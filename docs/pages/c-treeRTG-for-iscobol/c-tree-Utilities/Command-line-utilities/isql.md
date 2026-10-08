### isql

The isql utility is a command-line SQL client for c-tree SQL. Using the proper queries it’s possible to manage all database items, like tables, users and triggers.

Usage:

```shell
isql [-s<script>] [-u username] [-a passwd] port@ipaddress:databasename
```

Where:

- *script* is a text file encoded with UTF-8 that contains SQL commands to execute. This feature is useful if you need to launch one or more SQL commands without user interaction.
- *username* is the login user, e.g. ‘admin’
- *passwd* is the login password, e.g. ‘ADMIN’
- *port* is the port on which the c-tree SQL Server is listening, e.g. ‘6597’
- *ipaddress* is the address on which the c-tree SQL Server is listening, e.g. ‘localhost’
- *databasename* is the name of the c-tree SQL database, e.g. ‘ctreeSQL’

If the login is successful the following prompt will appear and you will be able to input SQL commands:

```shell
                  FairCom/isql.exe Version 11.2.0.10214(Build-160621)

                           FairCom Corporation (C) 1992-2016.
                Dharma Systems Pvt Ltd-Dharma Systems Inc (C) 1992-2016.

ISQL>

```

Consult the SQL Reference Manual (sqlref.pdf) installed with the product for information about the supported SQL syntax.
