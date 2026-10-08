## isCOBOL Compiler

Starting from isCOBOL Evolve 2021R1, the compiler supports Lambda expressions through the new operator "->”.

SORT statements on occurs containing dynamic data items are now fully supported, as well as nested dynamic capacity tables in multilevel occurs.

Additional syntax is now supported to improve compatibility with other COBOLs like MicroFocus and RM/COBOL.

### Lambda expression

A lambda expression, also known as anonymous function, is a block of code that can be passed as an argument to a function call. This is supported in many languages like C# and Java, and now is supported in isCOBOL as well. This is useful when using OOP (Object Oriented Programming) to invoke existing java classes, and when writing OOP CLASS-ID directly in COBOL. The required operator in the COBOL source is -> and it needs to be written before the class name. Lambda expressions are similar to methods, but they do not need a name, and can be implemented right in the body of a method.

For example, the following CLASS-ID myclass lists all the \*.cbl files in the current directory by printing their name on the system output. Files that don’t have a cbl extension are not listed. The filtering is performed by the filterFileName() method that matches the accept() method in the FilenameFilter interface and is invoked via Lambda, see the second statement in the procedure division of the main() method.

This is the full source of the CLASS-ID:

```cobol
 identification division.
 class-id. myclass as "myclass".
 configuration section.
 repository.
 class j-string as "java.lang.String"
 class j-string-arr as "java.lang.String[]"
 class j-io-file as "java.io.File"
 class j-system as "java.lang.System"
 .
 identification division.
 factory.
 procedure division.
 identification division.
 method-id. main as "main".
 working-storage section.
 77 curr-dir object reference j-io-file.
 77 file-list object reference j-string-arr.
 77 len int.
 77 i int.
 linkage section.
 01 args object reference j-string-arr.
 procedure division using args.
 main.
    set curr-dir to j-io-file:>new(".").
    set file-list to curr-dir:>list(->myclass:>filterFileName).
    set len to file-list:>length.
    perform varying i from 0 by 1 until i >= len
       display file-list(i)
    end-perform
    goback.
 end method.
 identification division.
 method-id. filterFileName as "filterFileName".
 working-storage section.
 77 ret object reference "boolean".
 linkage section.
 01 f object reference j-io-file.
 01 n object reference j-string.
 procedure division using f, n returning ret.
 main.
    if n:>toLowerCase:>endsWith(".cbl")
       set ret to true
    else
       set ret to false
    end-if
    goback.
 end method.
 end factory.
    end class.
```

### SORT with dynamic tables

The SORT statement was used in previous releases to SORT data inside fixed length groups. In the isCOBOL Evolve 2021 R1 release it’s also possible to sort “group-dynamic” groups, which are groups containing dynamic length data item, such as “ANY LENGTH” items:

```cobol
01 w-table-contacts.
   05 w-contacts occurs 9 times.
      10 w-contact-cod pic 9(3).
      10 w-contact-name pic x(50).
      10 w-contact-notes pic x any length.
```

The following statements:

```cobol
sort w-contacts on ascending key w-contact-name
sort w-contacts on ascending key w-contact-notes
```

can now be compiled without any warnings “Dynamic items will be ignored: WCONTACTS” and when running the table will be sorted correctly.

Nested OCCURS DYNAMIC data structures are also now supported, such as:

```cobol
01 w-table-contacts.
   05 w-company-occ occurs dynamic capacity cap-company.
      10 w-company-cod pic 9(6).
      10 w-company-name pic x(50).
      10 w-company-contacts.
         15 w-contact-occ occurs dynamic capacity cap-contact.
            20 w-contact-cod pic 9(3).
            20 w-contact-name pic x(50).
            20 w-contact-notes pic x any length.
```

allowing the use of a SORT statement such as:

```cobol
sort w-company-occ on ascending key w-company-name
```

No Warning or Severe Error will be issued when compiling, all company names will be sorted according to the key specified on the statement, and all the nested occurs dataitems will be moved to their correspondent parents.

### Improved Compatibility with other COBOLs

To improve the compatibility with the MicroFocus COBOL dialect, and to offer additional syntax to isCOBOL users without the need to use any compiler option, isCOBOL compiler now supports the following:

- LOCAL-STORAGE SECTION is now supported for METHOD-IDs. In previous releases all the data items declared inside WORKING-STORAGE of a METHOD ID were completely local. Now, if the LOCAL-STORAGE SECTION is declared the WORKING-STORAGE SECTION becomes shared, and on subsequent executions of the same method the variables under WORKING will retain previous values, while the variables under LOCAL will always be initialized to its original values. Following is a code snippet that shows the declaration of LOCAL-STORAGE in a METHOD-ID:

```cobol
identification division.
method-id. methodCompute as "methodCompute".
working-storage section.
77 w-var-1 pic 9(3) value 0.
local-storage section.
77 l-loc-1 pic 9(3) value 0.
procedure division.
```

- OBJECT REFERENCE declared on main level, 01 or 77, can now have the OCCURS clause, and the code below

```cobol
01 obj-occ occurs 5 object reference.
77 jint-occ object reference jInt occurs 9.
77 jstr-occ object reference "java.lang.String" occurs 20.
```

can now be compiled. These occurs use indexes that starts from 1, following the COBOL rule instead of using Java indexes \[ \] that start from 0.

- Concatenation using figurative constants is now fully supported, as shown in the

following code:

```cobol
 77 w-desc1 pic x(10) value "ab" & low-value.
 77 w-desc2 pic x(10) value x"3132" & zero.
 …
    move "xyz" & high-value to w-desc3
```

- Data description entry not terminated by a dot is now supported returning a compiler Error but not a Severe Error, and it can be suppressed with the compiler configuration:

```cobol
iscobol.compiler.messagelevel.188=0
```

- The code snippet:

```cobol
01 VAR-GROUP
03 VAR1 PIC X
03 VAR2 PIC X
77 VAR77 PIC X
78 CONST78 VALUE "SALC"
```

is supported and does not require that you manually add the missing dots, since they

are assumed automatically by compiler.

- The SET statements to assign pointers are now more flexible, allowing the OF clause to be optional, making the following code

```cobol
set ptr1 to address wrk1
set address lk1 to ptr1
set address lk2 to address wrk1
```

equal to

```cobol
set ptr1 to address of wrk1
set address of lk1 to ptr1
set address of lk2 to address of wrk1
```

To improve compatibility with RM/COBOL, isCOBOL compiler has improved the –cr option to accept the popup window RM syntax uses to create and remove a popup window on the DISPLAY statement with the CONTROL clause. Now there is no need to manually change the COBOL source during RM migrations. A code snippet such as:

```cobol
01 WINDOW-CONTROL-BLOCK.
 03 WCB-HANDLE PIC 999 BINARY(2) VALUE 0.
 03 WCB-NUM-ROWS PIC 999 BINARY(2).
 03 WCB-NUM-COLS PIC 999 BINARY(2).
 …
 03 WCB-TITLE PIC X(40).
```

declares a window definition, and the following DISPLAY statement creates and removes the pop-up window:

```cobol
MOVE 10 TO WCB-NUM-ROWS
MOVE 40 TO WCB-NUM-COLS
MOVE "Customer list" TO WCB-TITLE
DISPLAY WINDOW-CONTROL-BLOCK LINE 5 POSITION 20
CONTROL "WINDOW-CREATE, REVERSE"
DISPLAY WINDOW-CONTROL-BLOCK CONTROL "WINDOW-REMOVE"
```

To simplify migrating from RM /COBOL, a new File Connector has been created in the isCOBOL Evolve 2021R1 release to allow full access to existing RM/COBOL indexed files.

This is currently available on both 32 and 64-bits Windows environments.

The isCOBOL configuration settings to use this connector are:

```cobol
iscobol.file.index=rmc
# set the below property if rmc.exe is not located in PATH
iscobol.file.connector.program.rmc=/path/to/rmc.exe
```

The RMC connector can be used with any Veryant product and utility, and it can be used to access RM indexed files from the isCOBOL runtime, isCOBOL File Server, isCOBOL UDBC and utilities like GIFE and ISMIGRATE.

A file connector is also useful when running in a “mixed COBOL” environment, and data files need to be shared. For example, if an RM installation needs to quickly deploy a new portion of an application that needs to be executed in a web browser, this can be deployed using isCOBOL WebClient and can run concurrently with the original application still running under RM. No full migration is needed to provide added benefits for users, and migration can proceed in parallel with the implementation of new features.
