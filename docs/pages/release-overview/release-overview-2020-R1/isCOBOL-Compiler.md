## isCOBOL Compiler

Starting from isCOBOL 2020R1, the compiler supports the new POSITIONAL clause in the MOVE statement to easily move dynamic variables (X ANY LENGTH, OCCURS DYNAMIC,…) used inside structures into other structures without dynamic variables and vice versa.

This proves useful, for example, when moving data from FD declaration, which has static content, to WORKING-STORAGE items, which can contain dynamic variables, to minimize memory usage.

Intrinsic functions execution has been enhanced, and a new EFD directive has been added for temporary tables.

### Move Positional

The new POSITIONAL clause is similar to the existing CORRESPONDING clause, but instead of using variable names to identify matching items, it will use the positional order of items to match and move data between structures. The first item in the source structure will be moved to the first item in the target structure, the second to the second, and so on.

For example, the following code snippet defines 2 structures that are comparable in the field positioning but one structure contains only fixed data items, while the other contains dynamic data items:

```cobol
       WORKING-STORAGE SECTION.  
       01  struct-fix.
           03 g1-name                 pic x(50).
           03 g1-table                occurs 100.
              05 g1-account-id        pic 9(3)         value 0.
              05 g1-account-short-des pic x(20)        value space.
              05 g1-account-notes     pic x(1000)      value space.
           03 g1-address              pic x(50).
       01  struct-dyn.
           03 g2-name                 pic x any length.
           03 g2-table                occurs dynamic 
                                      capacity cap-g2-table-occ 
                                      initialized.
              05 g2-account-id        pic 9(3)         value 0.
              05 g2-account-short-des pic x(20)        value space.
              05 g2-account-short-des pic x any length value space.
           03 g2-address              pic x any length.
```

The new POSITIONAL clause can be used as shown in the statement:

```cobol
move positional struct-fix to struct-dyn
```

and the compiler will translate that one statement in the following moves:

```cobol
move g1-name to g2-name
perform varying ind from 1 by 1 until ind > 100
   move g1-account-id(ind)        to g2-account-id(ind)
   move g1-account-short-des(ind) to g2-account-short-des(ind)
   move g1-account-notes(ind)     to g2-account-notes(ind)
end-perform
move g2-address to g2-address
```

This will make maintenance of COBOL code with large data structures much simpler.

Moreover, the DELIMITED BY DEFAULT VALUE clause can be used as in the following statement:

```cobol
move positional struct-fix to struct-dyn delimited by default value
```

and the compiler will translate it as:

```cobol
move g1-name to g2-name
perform varying ind from 1 by 1 until ind > 100
   if g1-account-id(ind)        = 0 and
      g1-account-short-des(ind) = spaces and 
      g1-account-short-des(ind) = spaces 
      exit perform
   else 
      move g1-account-id(ind)        to g2-account-id(ind)
      move g1-account-short-des(ind) to g2-account-short-des(ind)
      move g1-account-notes(ind)     to g2-account-notes(ind)
   end-if
end-perform
move g1-address to g2-address
```

This way, dynamic occurs variables will be filled until default values are found, reducing memory usage to what is actually being used.

The POSITIONAL clause can also be used when moving two fixed structures with different children and different pictures, since it uses positional ordering to execute the moves.

### Intrinsic functions

The compiler now supports a shorthand syntax to invoke functions using the $ symbol in place of the “function” keyword. This simplifies the way to execute intrinsic functions and could also be useful for compatibility with other COBOLs.

For example, the syntax:

```cobol
display $length(g2-address)
display $capacity(g2-table)
```

is the equivalent of:

```cobol
display function length(g2-address)
display function capacity(g2-table)
```

The two functions length and capacity will be executed during the DISPLAY statement.

Intrinsic functions can be used in any COBOL statement that requires a data item, such as MOVE, STRING, or any conditional statement, such as IF, EVALUATE, PERFORM UNITL.

### EFD TEMPORARY directive

The compiler now supports a new EFD directive to mark a table as TEMPORARY instead of PERMANENT. This directive is used by the Database Bridge product. Temporary tables are useful as “working files”. They are usually needed to save temporary data that is not being used concurrently and does not need to be stored permanently. Usually these temporary tables are kept in memory to provide maximum performance.

The following code snippet shows how to define the table “mywork” as temporary:

```cobol
      $efd temporary
       fd mywork.
       01 mywork-rec.
          03 mywork-k    pic 9.
          ...
```

The compiler will natively support temporary tables for any RDBMS that supports them.

Oracle 18c supports two kinds of temporary tables: global and private, and those can be specified using the global and private values in the temporary directive. Unlike traditional database servers, global temporary tables in Oracle are permanent database objects that store data on disk and objects are visible to all sessions, but data written in the tables is only visible to the session that created it. At the end of the session the data is removed, but the table remains. Private temporary tables, on the other hand, are memory-based tables, only visible to the session that created it, and are automatically dropped at the end of the session or transaction.

Example of the $efd temporary directive for Oracle 18c:

```cobol
$efd temporary = global
```

or

```cobol
$efd temporary = private
```
