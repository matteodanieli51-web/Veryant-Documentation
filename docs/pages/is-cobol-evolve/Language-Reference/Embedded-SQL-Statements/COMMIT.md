## COMMIT

The COMMIT statement commits the current transaction and automatically starts a new transaction.

### General format

```cobol
EXEC SQL [ AT Database ]
 
  COMMIT { WORK        } [ RELEASE ]
         { TRAN        }
         { TRANSACTION }
END-EXEC
```

### General Rules

1. *Database* identifies the active connection that will execute the query and must be previously defined using a Format 4 [DECLARE](./DECLARE) statement. By default, when the AT clause is used, the active connection is switched to the connection identified by *Database* and all the next statements will work on that connection; under the [-csora](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) option, instead, the connection is switched only for the current statement.
2. WORK, TRAN and TRANSACTION are synonymous and are assumed if omitted.
3. The RELEASE option frees all resources (locks and cursors) held by the program and logs off the database.
4. The [iscobol.jdbc.autocommit (boolean)](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#databasebridge-and-jdbcesql-configuration) configuration setting must be set to false, otherwise all statements are automatically commited. With [iscobol.jdbc.autocommit (boolean)](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#databasebridge-and-jdbcesql-configuration) set to false, a transaction is started as soon as you connect to the database. The COMMIT statement allows you to confirm that transaction and immediately start a new one.

### Examples

Commit transaction

```cobol
exec sql commit work end-exec
```
