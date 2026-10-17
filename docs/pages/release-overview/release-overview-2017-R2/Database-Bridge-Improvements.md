## Database Bridge Improvements

isCOBOL Database Bridge generation has been rewritten in Java, and has been integrated in the isCOBOL compiler and available on all supported platforms. It’s now a one-step process, and all needed files are generated at compile time. There is no need to run an external utility for each supported database anymore, as the compiler itself does it all automatically.

### EDBI generation integrated in the compiler

New compiler properties have been added to configure the EDBI generation for supported DBMS (DB2, DB2\_AS400, Informix, Oracle, MySQL, PostgreSQL, SQL Server:

```cobol
iscobol.compiler.easydb=true|false (default: false)
iscobol.compiler.easydb.db2=true|false (default: false)
iscobol.compiler.easydb.db2_as400=true|false (default: false)
iscobol.compiler.easydb.informix=true|false (default: false)
iscobol.compiler.easydb.oracle=true|false (default: false)
iscobol.compiler.easydb.mysql=true|false (default: false)
iscobol.compiler.easydb.postgres=true|false (default: false)
iscobol.compiler.easydb.sqlserver=true|false (default: false)
iscobol.compiler.easydb.db2.prefix=... (default: db2)
iscobol.compiler.easydb.db2_as400.prefix=... (default: d24)
iscobol.compiler.easydb.generic.prefix=... (default: gen)
iscobol.compiler.easydb.informix.prefix=... (default: ifx)
iscobol.compiler.easydb.oracle.prefix=... (default: ora)
iscobol.compiler.easydb.mysql.prefix=... (default: mys)
iscobol.compiler.easydb.postgres.prefix=... (default: pgs)
iscobol.compiler.easydb.sqlserver.prefix=... (default: srv)
```

Further details on the configuration properties can be found on the isCOBOL 2017 R2 Documentation.

A new runtime property has been added to set the file name prefix of the generated EDBI programs:

```cobol
iscobol.easydb.prefix=...
```

For example, to generate the EDBI programs for Oracle and MySQL, the compiler.properties file should contain

```cobol
iscobol.compiler.easydb=true
iscobol.compiler.easydb.oracle=true
iscobol.compiler.easydb.mysql=true
```

When compiling the source code with the following command:

```cobol
C:\Veryant\isCOBOL2017R2\sample\easydb>iscc -c=compiler.properties -sp=..\isdef PROG-FILE1.cbl
Generated 'oraEDBI-file1.cbl'
Generated 'mysEDBI-file1.cbl'
```

Database Bridge classes are generated for both, Oracle and MySQL

At runtime, to execute the program and connect to a MySQL database, the runtime

configuration should set the prefix as

```cobol
iscobol.easydb.prefix=mys
```

while to connect to an Oracle database the following should set it as

```cobol
iscobol.easydb.prefix=ora
```

### Support for E type in EFD DATE

The EFD DATE directive now allows developer to store a COBOL 7-digit date in a database Date field. Such dates are represented in COBOL with the format YYYYEEE, where YYYY is the year, and EEE is the number of days since the first day of the year. As an example, the 1st of February of 2017 would be represented in COBOL as 2017032.

Database bridge can handle automatic conversion from YYYYEEE dates to the underlying database Date fields by specifying the following directives and field declaration:

```cobol
$EFD NAME=ORDER_DATE
$EFD DATE=YYYYEEE
     03 customer-order-date pic 9(7).
```

The usual scenario for this configuration is when using code such as

```cobol
accept customer-order-date from day YYYYDDD.
write customer-order-rec
…
read customer-order-file next…
```

Automatic conversion of the data from the database to the COBOL program and vice versa is carried out automatically by the Database Bridge engine.
