## SAVEPOINT

The SAVEPOINT statement is used to identify a point in a transaction to which you can later roll back.

### General format

```cobol
EXEC SQL [ AT Database ]
 
  SAVEPOINT Savepoint-Name
 
END-EXEC
```

### Syntax rules

1. *Savepoint-Name* is [Nonnumeric Literal](../Preface/Definitions#nonnumeric-literal)s, as defined in the [Definitions](../Preface/Definitions) section of the Preface of this document.

### General rules

1. *Database* identifies the active connection that will execute the query and must be previously defined using a Format 4 [DECLARE](./DECLARE) statement. By default, when the AT clause is used, the active connection is switched to the connection identified by *Database* and all the next statements will work on that connection; under the [-csora](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options) option, instead, the connection is switched only for the current statement.
2. Savepoint names must be distinct within a given transaction. If you create a second savepoint with the same identifier as a previous savepoint, then the previous savepoint is erased.

### Examples

Define a savepoint named SP1

```cobol
exec sql
     savepoint sp1
end-exec
```
