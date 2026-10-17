## Database Bridge enhancements

isCOBOL Database Bridge is the tool that enables COBOL programs to interact with a RDBMS without changing COBOL source code or learning ESQL. It has been enhanced to optimize interactions with Microsoft SQL Server.

The compiler property *iscobol.compiler.easydb.light_cursor* can now be used along with *iscobol.compiler.easydb.sqlserver* as follows:

```cobol
iscobol.compiler.easydb=true
iscobol.compiler.easydb.sqlserver=true
iscobol.compiler.easydb.light_cursors=2
```

EDBI routines generated with this configuration retrieve n records at a time instead of retrieving the whole resultset at once. The size of the block of received records is controlled by the runtime configuration property *iscobol.easydb.sqlserver_row_limit*, whose default value is 100. It can be changed dynamically by SET ENVIRONMENT statement just before executing START file I/O statement.

Reading records with this logic reduces the workload on the database and improves performance when there are several runtime sessions working on the database.

The difference between light_cursor set to 1 instead of 2 is to use the pagination logic only when using UNIQUE indexes.

For developers that prefer to generate EDBI routines with the legacy two-steps approach by processing the EFD dictionaries with the edbiis command, these new edbiis options are now available:

- -dslu (equivalent of iscobol.compiler.easydb.light_cursors=1)
- -dsld (equivalent of iscobol.compiler.easydb.light_cursors=2)

For example, the command to be used for the legacy approach is:

```cobol
edbiis -dsld FileName.xml
```

At runtime the application can improve performance by lowering the number of returned rows in the result set, example by setting:

```cobol
iscobol.easydb.sqlserver_row_limit=50
```
