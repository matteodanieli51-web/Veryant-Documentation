## isCOBOL Compiler

The isCOBOL 2023 R1 compiler includes new compiler options to simplify the migration from other COBOL dialects and ESQL pre-compilers. It also supports a new syntax to declare a variable number of parameters in the program and class.

### Improved Compatibility with other COBOLs

In this release the ON statement has been implemented to allow execution of statements based on a counter that is implicitly defined for any ON statement. The counter is initialized to zero and is automatically increased by one every time the ON statement is executed. It is particularly useful to execute code depending on the number of CALLs executed on a program or the PERFORMs executed on a paragraph without declaring data items and manually manage the counter. For example, the following code snippet:

```cobol
           perform my-paragraph 10 times.
           ...
       my-paragraph.
           on 1                  |"loop started first time"
              initialize w-data.
           ...
           on 2 and every 2      |"execute at ‘even’ times"
              move w-data to w-data-p
           else
              move w-data to w-data-e
           .
```

executes the initialize statement only the first time the paragraph “my-paragraph” is executed and the move statement is done on different data items depending on the execution being odd or even.

MicroFocus COBOL and IBM COBOL allow specifying an occurs data item without the index after the data name, like the following code snippet:

```cobol
       77 w-flag pic 9 occurs 3.
           ...
              if w-flag = 1
                 ...
```

Previous isCOBOL compilers would have marked the statement as a Severe Error:

--S: #41 Subscript required: W-FLAG

To improve compatibility, when compiling using options -cm (for MicroFocus compatibility) or -cv (for IBM compatibility), the severe errors are now marked as managed errors, as shown below:

--E: #299 Subscript required, first occurrence assumed: W-FLAG

causing the program to be compiled successfully, and assuming that the data name W-FLAG is considered as W-FLAG(1).

New compiler options have been added in this release:

- *-csdb2* to activate the DB2 pre-compiler compatibility. With this option, all the behaviors activated by previous configuration iscobol.compiler.esql.db2=true are applied, for example the compiler generates specific code to return the result sets in the same format that would be produced when using the IBM DB2 preprocessor. It supports the SQLDA structure and the use of date, time and timestamp as function parameters, and it allows you to intercept the result of a function or a special register with a SET statement.
- *-csora* to activate the Oracle ProCobol compatibility. With this option, the Compiler enables the SQLADR, SQLNUL and SQLPRC functions used by SQLDA feature for the JDBC environment instead of the ProCobol native calls. An additional advantage of these new compiler options related to ESQL is that they are integrated and taken into consideration by the iscobol.runtime.compile_flags.mandatory or iscobol.runtime.compile_flags.prohibited configurations set when running.
- *-dcv* to use the VAX/COBOL numeric formats. These formats are identical to the IBM formats, except that unsigned COMP-3 fields place X"0C" in the sign position, instead of X"0F", useful when migrating data from VAX/COBOL or OpenVMS systems.

### Improved Compatibility with IBM DB2 Preprocessor

Enhancements have been made in this release to improve compatibility with the IBM DB2 Preprocessor.

The new supported syntax includes:

- CONNECT RESET statement to close the connection with the database. This statement can be used as synonym of DISCONNECT regardless of the database you’re connected to.
- SQL TYPE in host variables declaration to map the host variable with a large object field on the database. The new syntax supported by the compiler in USAGE is:

```cobol
          01 Data-Item USAGE IS SQL TYPE IS { BLOB   } [(Lob-Length)]
                                            { CBLOB  } 
                                            { DBCLOB } 

```

The compiler internally transforms the host variables into a group data item where data and length are stored in two separate sub-items, for example the following host variables:

```cobol
       01 MY-BLOB USAGE IS SQL TYPE IS BLOB(2M).
```

is translated to:

```cobol
       01  MY-BLOB. 
              49 MY-BLOB-LENGTH PIC S9(9) COMP-5. 
              49 MY-BLOB-DATA   PIC X(2097152). 
```

The following code snippet reads the content of a CLOB column and displays it:

```cobol
       01  MY-CLOB USAGE SQL TYPE IS CLOB(1M).
           ...
           EXEC SQL 
              SELECT TBL_CLOB INTO :MY-CLOB FROM TBL WHERE TBL_PK = 1 
           END-EXEC
           DISPLAY MY-CLOB-DATA(1:MY-CLOB-LENGTH).
```

Although this syntax was implemented as compatibility with DB2, it can also work on other JDBC-compliant databases, and the compiler accepts the syntax without the need to set a specific option.

A new runtime configuration option has been added:

iscobol.esql.db2.row_data_as_bytes_threshold

The DB2 Preprocessor allows you to store any character in CHAR and VARCHAR fields, as you can do with a COBOL item with picture X. Some COBOL applications take advantage of this possibility to store the dump of COBOL structures with COMP fields into CHAR and VARCHAR fields. When moving to Java JDBC, CHAR and VARCHAR fields are managed as strings and a conversion error may occur if an unknown character is detected in the string. The database encoding affects the management of the strings.

To address this problem, the isCOBOL runtime allows you to manage CHAR and VARCHAR fields as byte arrays, allowing any character to be stored into such fields. To have all CHAR and VARCHAR fields managed as byte arrays, it’s now possible to set:

```cobol
iscobol.esql.db2.row_data_as_bytes_threshold=1
```

To have only specific CHAR and VARCHAR fields managed as byte arrays, set the property to a value greater than 1. For example, by setting:

```cobol
iscobol.esql.db2.row_data_as_bytes_threshold=100
```

CHAR and VARCHAR fields whose size is not less than 100 bytes will be managed as byte arrays, while smaller CHAR and VARCHAR fields will be managed as strings.

### Variable number of parameters

With previous releases, when a program-id or entry needed to be called with a variable number of parameters, it was necessary to declare many linkage data items used in the “procedure division using” statement and call the C$NARG library routine to find out the number of parameters passed from the caller program. In addition, in cases of method-id declared in a class-id, the variable number of parameters was not supported.

Starting from 2023 R1 the syntax “…” written at the end of the object reference class definition is supported to manage a variable number of arguments in all scenarios (program-id, entry, method-id). The syntax is the same as pure Java, where the “…” is used to create a method with a variable number of arguments (known also as a Varargs method). This is shown in the following code snippet:

```cobol
public static void doDisplay (String... params){
System.out.println("Number of arguments received: " + params.length);
for(String s:params){
System.out.println(s);
}
}
```

The same result can be achieved in the class-id Cobol source using the following syntax:

```cobol
       method-id. doDisplay as "doDisplay".
       working-storage section.
       77  npar    pic 9(3).
       77  idx     pic 9(3).
       linkage section.
       77  params  object reference "java.lang.String...".
       procedure division using params.
       main.     
           set npar to params:>length.
           display "Number of arguments received: " npar.
           perform varying idx from 0 by 1 until idx = npar
              display params(idx)
           end-perform
       end method.
```

The calling programs that need to invoke this method can pass a variable number of parameters as shown in the following code snippet:

```cobol
       repository.
           class tclassid as "tclassid"
           .
       working-storage section.
       77  obj object reference tclassid.
       procedure division.
           set obj to tclassid:>new().
           obj:>doDisplay(var1).
           obj:>doDisplay(var1, var2).
           obj:>doDisplay(var1, var2, "string").
```

The same applies for a program-id Cobol source. To specify a variable number of pic X data items instead of java.lang.String, declare the isCOBOL class type as shown in this code snippet:

```cobol
       program-id. tprogid.
       working-storage section.
       77  npar    pic 9(3).
       77  idx     pic 9(3).
       linkage section.
       77  params  object reference "com.iscobol.types.PicX...".
       procedure division using params.
       main.     
           set npar to params:>length.
           display "Number of arguments received: " npar.
           perform varying idx from 0 by 1 until idx = npar
              display params(idx)
           end-perform
           goback.
```

The caller program can pass a variable number of parameters in the CALL statement as shown in the following code snippet:

```cobol
       working-storage section.
       77  var1   pic x(10).
       77  var2   pic x any length.
       procedure division.
           call "tprogid" using var1
           call "tprogid" using var1, var2
           call "tprogid" using var1, var2, "string"
```
