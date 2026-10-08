### ctsqlutl

The ctsqlutl utility allows to change the name of table columns.

Usage:

```shell
ctsqlutl [options] -rencol table_name column newcolumn
```

Where:

- *table_name* is the name of the table with the column you want to rename
- *column* is the name of the column you want to rename
- *newcolumn* is the new name for the column
- *options* can be one or more of the following:
  - *-o owner_name*: owner of table
  - *-d database_name*: database name (default: ctreeSQL)
  - *-s server_name*: c-tree SQL Server name (default: FAIRCOMS)
  - *-u userid*: userid for logging onto the c-tree SQL Server
  - *-a password*: password for authentication
