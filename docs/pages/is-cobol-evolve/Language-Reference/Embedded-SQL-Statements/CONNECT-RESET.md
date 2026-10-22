## CONNECT RESET

The CONNECT RESET statement closes the connection with the database.

### General format

```cobol
EXEC SQL [ AT Database ]
 
  CONNECT RESET [ { DEFAULT } ]
                  { CURRENT } 
                  { ALL     }
 
END-EXEC
```

### Syntax rules

1. CURRENT and DEFAULT are synonymous.

### General rules

1. *Database* identifies the active connection that will execute the query and must be previously defined using a Format 4 [DECLARE](./DECLARE) statement. By default, when the AT clause is used, the active connection is switched to the connection identified by *Database* and all the next statements will work on that connection; under the [-csora](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) option, instead, the connection is switched only for the current statement.
2. Unless the ALL prhase is specified, the current databae connection is closed.
3. When the ALL phrase is specified, all the active connections are closed.

### Examples

Disconnect from the current connection

```cobol
exec sql connect reset end-exec
```
