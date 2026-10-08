## Better IBM COBOL compiler compatibility support

IsCOBOL Evolve 2021R1 release enhances the compiler, improving compatibility with the IBM COBOL compiler, simplifying the migration process from IBM machines to Open systems. Additionally, the ESQL syntax has been enhanced for better IBM DB2 compatibility, allowing migrations without using the db2prep pre-compiler.

### Improved IBM COBOL syntax

Compiling using the -cv compiler option now allows more IBM-specific syntax to be supported:

The USE FOR DEBUGGING declarative that allows execution of specific code while running with a configuration option set. For example, the following code snippet:

```cobol
 CONFIGURATION SECTION.
 SOURCE-COMPUTER. … WITH DEBUGGING MODE.
 PROCEDURE DIVISION.
 DECLARATIVES.
 DEBUG-DECLARATIVES SECTION.
   USE FOR DEBUGGING ON MYPAR1.
 DEBUG-DECLARATIVES-PARAGRAPH.
   DISPLAY "EXECUTING: " DEBUG-NAME ", MY-VAR=" TMY-VAR.
 END DECLARATIVES.
 …
   PERFORM MYPAR1
 …
 MYPAR1.
   ADD 1 TO MY-VAR
```

will execute the DISPLAY statement inside the USE FOR DEBUGGING declarative every time the paragraph named MYPAR1 is executed, but only when running with the configuration option *iscobol.use_for_debugging=true*. Note that, following IBM rules, if the WITH DEBUGGING MODE is omitted or commented in the SOURCECOMPUTER section, the code in the USE FOR DEBUGGING declarative is never executed.

The RECURSIVE clause in PROGRAM-ID to specify that the program can be recursively called while a previous invocation is still active. Since with isCOBOL every program can be recursively called without needing a specific declaration, the compiler treats the clause as a comment:

```cobol
PROGRAM-ID. MYPROG IS RECURSIVE.
```

The following syntax is now supported without needing the -cv compiler option, to ease the adoption of the features in COBOL applications:

LOCAL-STORAGE SECTION in PROGRAM-ID is used to declare variables that are “local”, to prevent sharing them when recursively calling the program. WORKING-STORAGE items are global. In previous releases, the configuration option:

```cobol
iscobol.recursion_data_global=true
```

allowed control on the working storage, which could only be either global or local.

Using the LOCAL-STORAGE SECTION allows for finer control. Below is a code snippet that shows how to declare a local variable:

```cobol
WORKING-STORAGE SECTION.
77 VAR-IDX PIC 99 VALUE 0.
LOCAL-STORAGE SECTION.
77 LOC-VAR-IDX PIC 99 VALUE 0.
```

New intrinsic functions named DISPLAY-OF and NATIONAL-OF to better display a National data item, declared as PIC N. The code snippet below shows the use of the new functions in MOVE and DISPLAY statements:

```cobol
 01 A-NATIONAL PIC N(1) USAGE NATIONAL. 
 01 A-DISPLAY PIC X. 
…
 MOVE FUNCTION NATIONAL-OF(A-DISPLAY) TO A-NATIONAL 
 …
 DISPLAY "THE CHARACTER IS: " FUNCTION DISPLAY-OF(A-NATIONAL) 
```

### Improved support for ESQL on IBM DB2

A new compiler property has been introduced to inform the Compiler that the underlying database is IBM DB2.

```cobol
iscobol.compiler.esql.db2=true
```

When this property is set to true, the Compiler generates specific code to return the result sets in the same format that would be produced when using the IBM DB2 pre-compiler. In particular, it supports the SQLDA structure and the use of date, time and timestamp as function parameters.

#### SQLDA

An SQLDA (SQL Descriptor Area) is a collection of variables that are required for execution of the SQL DESCRIBE statement, and can optionally be used by the PREPARE, OPEN, FETCH, EXECUTE, and CALL statements. An SQLDA can be used in a DESCRIBE or PREPARE INTO statement, modified with the addresses of host variables, and then reused in a FETCH statement.

An SQLDA consists of four variables in a header structure, followed by an arbitrary number of occurrences of a sequence of five variables collectively named SQLVAR. In OPEN, CALL, FETCH, and EXECUTE statements, each occurrence of SQLVAR describes a variable. In PREPARE and DESCRIBE, each occurrence describes a column of a result set.

The meaning of the information in an SQLDA depends on the context in which it is used.

For DESCRIBE and PREPARE INTO, IBM DB2 sets the fields in the SQLDA to provide information to the application program. For OPEN, EXECUTE, FETCH, and CALL, the application program sets the fields in the SQLDA to provide IBM DB2 with information.

The SQLDA definition in the program Working-Storage Section is:

```cobol
*****************************************************
 * SQL DESCRIPTOR AREA                               *
 *****************************************************
 01 SQLDA.
    02 SQLDAID PIC X(8) VALUE 'SQLDA '.
    02 SQLDABC PIC S9(8) COMPUTATIONAL VALUE 33016.
    02 SQLN PIC S9(4) COMPUTATIONAL VALUE 750.
    02 SQLD PIC S9(4) COMPUTATIONAL VALUE 0.
    02 SQLVAR OCCURS 1 TO 750 TIMES
              DEPENDING ON SQLN.
       03 SQLTYPE PIC S9(4) COMPUTATIONAL.
       03 SQLLEN PIC S9(4) COMPUTATIONAL.
       03 SQLDATA POINTER.
       03 SQLIND POINTER.
       03 SQLNAME.
          49 SQLNAMEL PIC S9(4) COMPUTATIONAL.
          49 SQLNAMEC PIC X(30).
```

#### Date and Time functions

IBM DB2 provides a set of functions that have date, time or timestamp parameters. When the parameter value is stored in a host variable, the IBM DB2 JDBC driver would cause “invalid parameter” errors.

For example, the following query that adds 2 hours to a given timestamp fails if executed on IBM DB2 via JDBC:

```cobol
SELECT (TIMESTAMP(:Wrk-TimeStamp) + :V2 HOURS) FROM SYSIBM.SYSDUMMY1
```

In order to make it work, a cast must be performed, e.g.

```cobol
SELECT (TIMESTAMP((CAST(:Wrk-TimeStamp AS TIMESTAMP))) + :V2 HOURS) FROM
SYSIBM.SYSDUMMY1
```

When iscobol.compiler.esql.db2 is set to true, the isCOBOL Compiler takes care of applying the necessary casts in cases like the above, requiring no code changes.

The following functions are recognized by the Compiler: ADD\_DAYS, ADD\_HOURS, ADD\_MINUTES, ADD\_MONTHS, ADD\_SECONDS, ADD\_YEARS, AGE, DATE\_PART, DATE\_TRUNC, DAYNAME, DAYOFMONTH, DAYOFWEEK, DAYOFWEEK\_ISO, DAYOFYEAR, DAYS, DAYS\_BETWEEN, DAYS\_TO\_END\_OF\_MONTH, DATE, EXTRACT, FIRST\_DAY, FROM\_UTC\_TIMESTAMP, HOUR, HOURS\_BETWEEN, JULIAN\_DATE, MICROSECOND, MIDNIGHT\_SECONDS, MINUTE, MINUTES\_BETWEEN, MONTH, MONTHNAME, MONTHS\_BETWEEN, NEXT\_DAY, NEXT\_MONTH, NEXT\_QUARTER, NEXT\_WEEK, NEXT\_YEAR, QUARTER, ROUND, ROUND\_TIMESTAMP, SECOND, SECONDS\_BETWEEN, THIS\_MONTH, THIS\_QUARTER, THIS\_WEEK, THIS\_YEAR, TIME, TIMESTAMP, TIMESTAMP\_FORMAT, TIMESTAMP\_ISO, TIMESTAMPDIFF, TIMEZONE, TO\_CHAR, VARCHAR\_FORMAT, WEEK, WEEK\_ISO, WEEKS\_BETWEEN, YEAR, YEARS\_BETWEEN, YMD\_BETWEEN.

If a program uses functions that are not listed here, for example user defined functions, then you can notify the Compiler about these functions with the new configuration property:

```cobol
iscobol.compiler.db2.fun.<function-name> = <sql type>
```

You can have multiple occurrences of this property, one for each function.

For example, to configure a user defined function named MY\_FUNC\_DATE that receives a date as parameter, you can add this entry to the Compiler configuration:

```cobol
iscobol.compiler.db2.fun.my_func_date=DATE
```

Where “DATE” is the constant in java.sql.Types according to the Java documentation:

[https://docs.oracle.com/javase/8/docs/api/java/sql/Types.htm.](https://docs.oracle.com/javase/8/docs/api/java/sql/Types.htm)
