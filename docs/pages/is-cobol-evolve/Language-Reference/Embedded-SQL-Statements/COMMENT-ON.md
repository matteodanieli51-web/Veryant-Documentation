## COMMENT ON

The COMMENT ON statement adds a descriptive text to a database object (such as a table, column, view, or other schema element) and stores it in the system catalog for documentation and metadata purposes.

### General format

```cobol
EXEC SQL [ AT Database ]
 
  COMMENT ON options
 
END-EXEC
```

### General Rules

1. *Database* identifies the active connection that will execute the query and must be previously defined using a Format 4 [DECLARE](./DECLARE) statement. By default, when the AT clause is used, the active connection is switched to the connection identified by *Database* and all the next statements will work on that connection; under the [-csora](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) option, instead, the connection is switched only for the current statement.
2. The syntax of this statement is slightly different between the RDMS that support it. Therefore the compiler doesn’t perform any validation and passes it as is to the JDBC driver. Syntax errors, if any, will be returned at runtime.

### Examples

Add a comment to a table on Postgres:

```cobol
exec sql COMMENT ON TABLE mytable IS 'This is my table.' end-exec
```
