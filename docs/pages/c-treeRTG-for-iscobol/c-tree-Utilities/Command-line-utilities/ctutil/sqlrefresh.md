#### -sqlrefresh

Preserves existing information about the table (synonyms, grants, etc.) when relinking into SQL.

Usage

```shell
ctutil -sqlrefresh file iss_file database_name [-symb=symbolic_name] [-owner=owner_name] [-prefix=table_prefix][-conv=sign_convention][-rule=rules_file]
```

- *file* is the name of the c-tree file. The default file extension (that is ".dat" if not configured differently) must be omitted. Relative paths are resolved according to the c-tree server working directory.
- *iss_file* is the dictionary file. Relative paths are resolved according to the ctutil working directory.
- *database_name* is the name of the destination SQL Server database.
- the *-symb* option allows to specify the name for the resulting table. By default, the table has the same name as the disc file.
- the *-owner* option allows to specify a specific table ownership.
- the *-prefix* option allows to specify a prefix that will be put before the table name in the database. For example, if you link a file named “file1” with -prefix=myprefix, you obtain a table named “myprefixfile1” in the database.
- *sign_convention* identifies the numeric data convention.
  - use A for programs compiled with -dca option or without data compatibility options.
  - use B for programs compiled with -dcb option.
  - use D for programs compiled with -dcd option.
  - use I for programs compiled with -dci option.
  - use M for programs compiled with -dcm option.
  - use N for programs compiled with -dcn option.
  - use R for programs compiled with -dcr option.
  - use V for programs compiled with -dcv option.

    If omitted, A is assumed

- *rules_file* identifies a file with external rules. See [Defining External Rules](https://docs.faircom.com/doc/ctcobol/#54797.htm) in Faircom’s documentation for more information.

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
