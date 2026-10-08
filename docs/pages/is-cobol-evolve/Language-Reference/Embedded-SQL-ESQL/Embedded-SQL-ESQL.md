# Embedded SQL (ESQL)

Embedded SQL is a method of combining the computing power of a high-level language and the database manipulation capabilities of SQL. It allows you to execute SQL statements from an application program.

All SQL statements need to be enclosed within EXEC SQL and END-EXEC. You can place the SQL statements anywhere within a program, with the restriction that variables and constants must be declared in file, working-storage or linkage section, while executable SQL statements must be placed in procedure division.
