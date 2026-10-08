## CLOSE

The CLOSE statement closes an open cursor. Once closed, the cursor cannot be used for further processing.

The [COMMIT](./COMMIT), [ROLLBACK](./ROLLBACK), and [DISCONNECT](./DISCONNECT) statements close all open cursors.

### General format

```cobol
EXEC SQL [ AT Database ]
 
  CLOSE Cursor-Name
 
END-EXEC
```

### Syntax rules

1. *Cursor-Name* is a [Nonnumeric Literal](../Preface/Definitions#nonnumeric-literal), as defined in the [Definitions](../Preface/Definitions) section in the Preface of this document.

### General rules

1. *Cursor-Name* must be previously defined by a [DECLARE](./DECLARE) statement.
2. *Database* identifies the active connection that will execute the query and must be previously defined using a Format 4 [DECLARE](./DECLARE) statement. By default, when the AT clause is used, the active connection is switched to the connection identified by *Database* and all the next statements will work on that connection; under the [-csora](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) option, instead, the connection is switched only for the current statement.

### Examples

Close cursor

```cobol
exec sql close cust_cur end-exec
```
