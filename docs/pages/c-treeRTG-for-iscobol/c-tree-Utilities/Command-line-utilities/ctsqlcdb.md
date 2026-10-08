### ctsqlcdb

The ctsqlcdb utility creates a new, adds an existing, or drops a database from the c-tree SQL Server.

Usage:

```shell
ctsqlcdb command_with_args [servername] [user] [password]
```

Where:

- *command_with_args* can be:
  - *-add <dbname\>*: adds a reference to an existing database (be sure that the database dbs folder has been copied to the server’s *data* directory before using this option)
  - *-addctdb <dbname\> <path\>*: adds a reference to an existing CTDB database located at *path*
  - *-create <dbname\> [-casesensitive|-cs|-caseinsensitive|-ci]*: creates a new database
  - *-casesensitive|-cs:* sets database as case sensitive (default)
  - *-caseinsensitive|ci:* sets database as case insensitive
  - -create_preimage: creates a preimage only database (supporting only atomicity; no transaction logs for durability)
  - *-drop <dbname\>*: removes a reference to an existing database
  - *-exists* *<dbname\>*: returns 1 if the database exists, 0 if not, 2 on error
  - *-list <servername\>*: lists databases available from the server
  - *-copy <dbname\> <newname\>*: copies a database and all the non c-tree files that are present in the database directory area.
- *servername* is the optinal c-treeSQL server
- *user* is the optional login user name
- *password* is the optional login password
- *dbname* is the database name.
