# Drivers

The c-tree installation includes several drivers to interact with external software:

- an [ODBC Driver](./ODBC-Driver/ODBC-Driver)
- a [JDBC Driver](./JDBC-Driver)
- [Other Drivers](./Other-Drivers)

These drivers interface the SQL engine of c-tree and allows you to work on database tables using SQL statements. Database tables include:

- tables created directly with a CREATE TABLE statement
- ISAM archives sqlized with the [ctutil](../c-tree-Utilities/Command-line-utilities/ctutil/ctutil) [-sqlize](../c-tree-Utilities/Command-line-utilities/ctutil/sqlize) command
- ISAM archives created with the [iscobol.sqlserver.iss (boolean)](../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#sqlserver_iss) property set to true
