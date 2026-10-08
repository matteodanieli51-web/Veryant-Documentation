## DISCONNECT

The DISCONNECT statement closes the connection with the database.

### General format

```cobol
EXEC SQL [ AT Database ]
 
  DISCONNECT [ { Connection-Name } ]
               { CURRENT         } 
               { ALL             }
 
END-EXEC
```

### Syntax rules

1. *Connection-Name* is a [Nonnumeric Literal](../Preface/Definitions#nonnumeric-literal), as defined in the [Definitions](../Preface/Definitions) section of the Preface of this document.
2. *Connection-Name* can be referenced by the [SET CONNECTION](./SET-CONNECTION) statement

### General rules

1. *Database* identifies the active connection that will execute the query and must be previously defined using a Format 4 [DECLARE](./DECLARE) statement. By default, when the AT clause is used, the active connection is switched to the connection identified by *Database* and all the next statements will work on that connection; under the [-csora](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) option, instead, the connection is switched only for the current statement.

1. CURRENT is default.
2. When the ALL phrase is specified, the application is disconnected from all connected databases.

### Examples

Disconnect from the current connection

```cobol
exec sql disconnect end-exec
```
