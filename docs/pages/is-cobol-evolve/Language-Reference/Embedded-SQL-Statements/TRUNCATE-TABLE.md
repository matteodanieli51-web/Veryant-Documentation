## TRUNCATE TABLE

The TRUNCATE TABLE statement deletes all rows in a table.

### General format

```cobol
EXEC SQL [ AT Database ]
 
  TRUNCATE TABLE Table-Name [ Options ]
 
END-EXEC
```

### Syntax rules

1. *Options* is passed to the driver without further checks. Refer to the database documentation for detailed syntax. Syntax errors, if any, are returned at runtime.
2. *Table-Name* is a [User-defined word](../Preface/Definitions#user-defined-word), as defined in the [Definitions](../Preface/Definitions) section of the Preface of this document.

### General rules

1. *Database* identifies the active connection that will execute the query and must be previously defined using a Format 4 [DECLARE](./DECLARE) statement. By default, when the AT clause is used, the active connection is switched to the connection identified by *Database* and all the next statements will work on that connection; under the [-csora](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options) option, instead, the connection is switched only for the current statement.

### Examples

Empty the table log

```cobol
exec sql
     truncate table log
end-exec
```
