## DEALLOCATE

The DEALLOCATE statement removes a cursor reference.

### General format

```cobol
EXEC SQL [ AT Database ]
 
  DEALLOCATE Options
 
END-EXEC
```

### Syntax rules

1. The DEALLOCATE statement is processed as a comment statement.

### General rules

1. *Database* identifies the active connection that will execute the query and must be previously defined using a Format 4 [DECLARE](./DECLARE) statement. By default, when the AT clause is used, the active connection is switched to the connection identified by *Database* and all the next statements will work on that connection; under the [-csora](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) option, instead, the connection is switched only for the current statement.

### Examples

Show the end of the declare section

```cobol
exec sql deallocate cust_cur end-exec
```
