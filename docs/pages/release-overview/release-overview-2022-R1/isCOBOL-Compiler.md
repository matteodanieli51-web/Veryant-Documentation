## isCOBOL Compiler

The isCOBOL 2022R1 compiler includes improved compatibility with other COBOL dialects to simplify migrations, and isCOBOL ESQL has been improved as well to ease migration from the IBM DB2 PRE (ESQL precompiler).

### Improved Compatibility with other COBOLs

Enhancements have been made in this release to improve our compatibility with MicroFocus COBOL, such as:

- WITH DEBUGGING MODE in SOURCE-COMPUTER is now supported to handle code lines marked with D. For example, this code snippet:

```cobol
       CONFIGURATION SECTION.
       SOURCE-COMPUTER.  WITH DEBUGGING MODE.
       working-storage section.
       ...
       procedure division.
       MAIN.
      D    DISPLAY "LOG: calling ELCUST"
           CALL "ELCUST" USING PARAMS
      D    DISPLAY "LOG: returned from ELCUST"
```

turns on debugging mode, causing the lines containing the DISPLAY statements to be included in the compiled program. If the WITH DEBUGGING MODE statement is commented out, like this:

```cobol
       SOURCE-COMPUTER. . *>WITH DEBUGGING MODE.
```

all lines marked with D in the Indicator area, column 7 for ANSI sources, are treated as comments and the DISPLAY statements will not be included in the compiled program.

- the XML syntax extension with ORGANIZATION IS XML in SELECT and XD for record definition is supported to clean compile.

A code such as:

```cobol
       FILE-CONTROL.
       select xml-customer assign "out-customer.xml"
             organization  is xml   
             document-type is "customer"
             file status is xml-status.
       file section.
       xd xml-customer.
       01  rec-customer identified by "customer".
           05  xmls-name pic x(80) identified by "elementName" is attribute.
           05  xmls-age  pic 9(18) identified by "elementAge".
       ...
           open output xml-customer
           write rec-customer
           close xml-customer
```

is now compiled without needing compiler options, enabling reading and writing XML files.

- the direct syntax is now supported on INVOKE statement, using the code snippet:

```cobol
 invoke JSystem::"getProperty"("user.home") returning w-home
```

or:

```cobol
 invoke JSystem:>"getProperty"("user.home") returning w-home
```

are equivalent of:

```cobol
 invoke JSystem "getProperty" using "user.home" returning w-home
```

Enhancements have been made to improve the compatibility with RM/COBOL, such as:

- a new compiler option, -crko, has been implemented to declare keys of indexed files in offset order including segments. This option is useful to have the same file definitions of indexed files, both when isCOBOL is used to access existing RM indexed files through RMC (RM file Connector) or when using the ISMIGRATE utility to migrate the existing files to the desired Veryant file system such as C-Tree or JISAM.
- enhanced the existing -cr option to better manage the character DISPLAY with POS declared without LINE.

An enhancement in the compiler has been implemented to improve the compatibility with ACUCOBOL-GT:

- the COPY RESOURCE directive is now fully supported. It allows you to embed any file in the class. This is typically useful to load an image using the W$BITMAP routine that is not present on the disk and needs to be embedded in the program class. Code like the following:

```cobol
           copy resource "..\resources\logo.png".
           call "w$bitmap" using wbitmap-load, "logo.png" 
                          giving h-bmp.
```

will load the image “logo.png” and embed it in the class at compile time.

### Improved Compatibility with DB2 ESQL Precompiler

The Rowset positioning syntax is now supported by ESQL cursors, to simplify the migration from DB2 Precompiler to the isCOBOL compiler, that supports ESQL statements accessing directly with the JDBC driver. This feature enables programs to read one or more records from a cursor starting either from the beginning of the cursor or from a given position in the cursor. As an example, given the following table:

```cobol
CUST_ID CUST_NAME 
------- --------- 
1 Daniel 
2 Robert 
3 Bill 
4 John 
5 Richard 
6 Eleonore
7 Bob
8 Cindy
9 Rachel
```

Create a cursor with the following syntax:

```cobol
 exec sql 
 declare cur cursor 
    with rowset positioning 
    for select * from customers 
 end-exec
```

After opening the cursor, you can read record 4 (John) and 5 (Richard) with the following syntax:

```cobol
exec sql 
   fetch rowset 
      starting at absolute 3 
      cur 
      for 2 rows  
      into :wrk-id, :wrk-name 
end-exec
```

You can then read records 7 (Bob), 8 (Cindy) and 9 (Rachel) with the following syntax:

```cobol
exec sql 
   fetch rowset 
      starting at relative 1 
      cur 
      for 3 rows  
      into :wrk-id, :wrk-name 
    end-exec
```

The ABSOLUTE clause counts records from the beginning of the cursor while RELATIVE counts from the current position in the cursor.

The wrk-id and wrk-name data items should be OCCURS items as they will host multiple results.
