#### -sqllink

Links a physical file into c-tree SQL Server database. It requires the administrator password, the database name and optionally a logical name to be used for the table. If the last parameter is not provided, the table on the database will be called the same way of the disk file.

After the link operation, the physical file can be interfaced as standard ISAM file by isCOBOL Framework and as database table from SQL clients.

Usage

```shell
ctutil -sqllink file database_name [-symb=symbolic_name] [-owner=owner_name] [-prefix=table_prefix][-public[=ro]]
```

- *file* is the name of the c-tree file. The default file extension (that is ".dat" if not configured differently) must be omitted. Relative paths are resolved according to the c-tree server working directory.
- *database_name* is the name of the destination SQL Server database.
- the *-symb* option allows to specify the name for the resulting table. By default, the table has the same name as the disc file.
- the *-owner* option allows to specify a specific table ownership.
- the *-prefix* option allows to specify a prefix that will be put before the table name in the database. For example, if you link a file named “file1” with -prefix=myprefix, you obtain a table named “myprefixfile1” in the database.
- the *-public* option grants public access permissions on the resulting table. Use *-public=ro* to indicate read-only permissions to all SQL users. Admin users are always able to modify a c-tree file.

##### Administrator password

The administrator password is included in the configuration file.\* This file can be:

- in the working directory in a file named *ctree.conf*
- in the directory specified in the environment variable CTREE_CONF
- passed to ctutil using the -c option in the command line

This configuration file should contain this statement:

```shell
<config>
  <instance server="FAIRCOMS" user="admin" password="ADMIN">
  </instance>
</config>
```

Other statements can be added to the configuration file as needed.

\*To be compatible with older c-tree versions that allowed you to pass the administrator password in the command line, you can add the new configuration variable COMPATIBILITY SQLIMPORT_ADMIN_PASSWORD to the c-tree Server configuration file (ctsrvr.cfg). However, adding the admin and password to the configuration file as shown above is considered the best practice.

**Note -** After the archive has been registered as a SQL table, it can be removed by a DROP TABLE statement on the database. If you want to keep the archive on disc for ISAM access after a DROP TABLE, add [SQL_OPTION DROP_TABLE_DICTIONARY_ONLY](../../../Configuring-the-c-tree-Server#sql_option_drop_table_dictionary_only) to the c-tree Server’s configuration file (ctsrvr.cfg).
