## FREE

The FREE statement releases the memory associated to a cursor or prepared statement.

### General format

```cobol
EXEC SQL [ AT Database ]
 
  FREE Host-Variable
 
END-EXEC
```

### Syntax rules

1. *Host-Variable* must be defined as USAGE HANDLE in DATA DIVISION.

### General Rules

1. *Database* identifies the active connection that will execute the query and must be previously defined using a Format 4 [DECLARE](./DECLARE) statement. By default, when the AT clause is used, the active connection is switched to the connection identified by *Database* and all the next statements will work on that connection; under the [-csora](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) option, instead, the connection is switched only for the current statement.

### Examples

This sample allocates a cursor handle, uses it and releases it at the end. Allocate is an Oracle specific SQL statement.

```cobol
exec sql allocate :cur-hndl end-exec.
 
exec sql execute
   begin
        open :cur-hndl for select * from emp;
   end;
end-exec.
 
exec sql fetch :cur-hndl into :empno,:ename
end-exec.
 
exec sql free :cur-hndl
end-exec.
```

Prepare a statement to insert a row, execute it and free the handle.

```cobol
working-storage section.
...
77 cmd handle.
...
procedure division.
... 
exec sql
     prepare :cmd from 
        "insert into cust_table values (2010,'Evan Raymond','New York')"
end-exec
 
exec sql
     execute :cmd
end-exec
 
exec sql
     free :cmd
end-exec
```
