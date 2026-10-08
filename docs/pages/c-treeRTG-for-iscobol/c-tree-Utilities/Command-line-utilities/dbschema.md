### dbschema

The dbschema utility generates statements to recreate the specified database elements and data. This can be a great tool for backing up database schema designs, and building scripts to recreate databases.

Usage:

```shell
dbschema [ -d ] [-u user_name ] [-a password ] [ -o outfile ]
         [ -p [ user_name.]procedure_name [ , ... ] ]
         [ -t [ user_name.]table_name [ , ... ] ]
         [ -T [ user_name.]trigger_name [ , ... ] ]
         [ database_name ]
```

Where:

- *-d*: in conjunction with the -t option, specifies that dbschema generates SQL INSERT statements for data in the tables, in addition to CREATE statements.
- *-u user_name*: user name to connect to the database.
- *-a password*: password to connect to the database.
- *-o outfile*: redirects the output to the specified file. The default is stdout.
- *-t [ user_name.]table_name [ , ... ]* : a comma-separated list of tables and views for which definitions should be generated. Specify a list of specific tables, or use the % to generate definitions for all tables.
- *-p [ user_name.]procedure_name [ , ... ]* : a comma-separated list of stored procedures for which definitions should be generated. The table names in the list can include the % and underscore ( _ ) characters, which provide pattern-matching semantics: the % matches zero or more characters in the procedure name while the underscore ( _ ) matches a single character in the procedure name.
- *-T [ user_name.]trigger_name [ , ... ]* : a comma-separated list of triggers for which definitions should be generated. The table names in the list can include the % and underscore (_) characters, which provide pattern-matching semantics: the % matches zero or more characters in the trigger name while the underscore ( _ ) character matches a single character in the trigger name.

By default, dbschema generates definitions for resources owned by the current user. Use the optional *user_name* qualifier to specify a trigger owned by a different user.
