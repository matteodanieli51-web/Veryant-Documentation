## isCOBOL DataBase Bridge Improvements

isCOBOL Database Bridge, the tool that enables COBOL programs to use power of RDBMS without changing COBOL source code or learning ESQL was enhanced to support a new database. This increase the number of databases supported natively.

### New IBM Informix support

The new option -di allows generating EDBI routines for Informix. All EDBI routines are optimized to generate specific SQL supported from IBM Informix DBMS.

### Improved performance

The EDBI routines now use a faster method to execute the corresponding SQL code of READ KEY from COBOL on Microsoft SQL Server. The EDBI RDBMS subroutines will benefit from this increase of performance up to 30%.

### Multi-connection support for COBOL threads

Usually COBOL threads shared DBMS connections unless the following property is used:

```cobol
iscobol.jdbc.thread_connection=true
```

With this property turned on, each COBOL threads runs in a separate DBMS connection.
