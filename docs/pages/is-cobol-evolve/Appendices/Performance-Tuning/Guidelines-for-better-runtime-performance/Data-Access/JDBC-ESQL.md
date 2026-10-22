#### JDBC/ESQL

The following tips are applicable to JDBC so they affect both DatabaseBridge and ESQL.

##### Driver configuration

- If the database service runs on a separate machine than the isCOBOL Runtime, the network speed and latency might affect performance.
- If you're working on Microsoft SQL Server with either the official driver from Microsoft or JTDS, then add the JDBC option *sendStringParametersAsUnicode=false* to your connection URL. Example:

```cobol
iscobol.jdbc.url=jdbc:sqlserver://localhost:1433\\SQLEXPRESS;databasename=master;encrypt=false;sendStringParametersAsUnicode=false
```

• While JTDS is discontinued, Microsoft continues to improve their driver. If you choose the Microsoft driver instead of JTDS, be sure to download and use the latest release of the driver.

• On Microsoft SQL Server the FETCH statement is faster if you lock records in transaction with [iscobol.jdbc.cursor.concurrency \*](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#jdbc_cursor_concurrency) set either to 1007 or 1008 rather then having that property set to 1009.

##### SQL syntax

- For massive updates (i.e. a huge sequence of [INSERT](../../../../Language-Reference/Embedded-SQL-Statements/INSERT) you should keep [iscobol.jdbc.autocommit (boolean)](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#jdbc_autocommit)) set to false and issue a [COMMIT](../../../../Language-Reference/Embedded-SQL-Statements/COMMIT) statement after each n operations, where n depends on the maximum transaction size that the database can support. A reasonable approach is to issue a [COMMIT](../../../../Language-Reference/Embedded-SQL-Statements/COMMIT) after each 1000 operations, but, if the database supports huge transactions, you might also consider issuing a single [COMMIT](../../../../Language-Reference/Embedded-SQL-Statements/COMMIT) at the end of the massive update. By default isCOBOL works in autocommit mode, so every update operation is automatically committed, affecting the performance of your massive update. Note that the [iscobol.jdbc.autocommit (boolean)](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#jdbc_autocommit) property is evaluated before the connection. After the connection has been established, you can’t change the autocommit mode by setting the configuration property.
- If you’re working on Oracle, consider using Optimizer Hints in your queries in order to direct the optimizer to choose the best query execution plan.
- If you’re working on either MySQL or PostgreSQL, consider using the LIMIT clause in your queries in order to generate lighter cursors and save memory.
