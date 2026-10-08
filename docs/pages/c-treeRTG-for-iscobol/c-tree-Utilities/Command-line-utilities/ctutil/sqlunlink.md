#### -sqlunlink

Removes the reference to the physical file from the c-tree SQL Server database. It requires the administrator password, the database name and the logical name if specified during the link. After the unlink operation, the physical file will not be available anymore as database table for SQL clients, but it can be interfaced again by the isCOBOL Framework.

Usage

```shell
ctutil -sqlunlink file database_name [-symb=symbolic_name] [-owner=owner_name]
```

- *file* is the name of the c-tree file. The default file extension (that is ".dat" if not configured differently) must be omitted. Relative paths are resolved according to the c-tree server working directory.
- *database_name* is the name of the destination SQL database.
- the *-symb* option allows to specify the name for the resulting table. By default, the table has the same name as the disc file.
- the *-owner* option allows to specify a specific table ownership.

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
