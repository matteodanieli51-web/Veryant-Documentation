## CALL

The CALL statement allows you to invoke stored procedures.

### Format 1

```cobol
EXEC SQL [ AT Database ]
 
  CALL { Procedure-Name  } ( [ Parameters ] ) [ INTO Host-Variable-2 ]
       { Host-Variable-1 }
 
END-EXEC
```

### Format 2

```cobol
EXEC SQL [ AT Database ]
 
  [ Host-Variable-2 = ] CALL { Procedure-Name  } ( [ Parameters ] ) 
                             { Host-Variable-1 }
 
END-EXEC
```

### Syntax Rules

1. The stored procedure name can be specified directly in the statement or through an host variable.
2. Multiple parameters must be separated by commas.
3. Each parameter name might be followed by the parameter type. The type can be IN, OUT or INOUT.

### General Rules

1. *Database* identifies the active connection that will execute the query and must be previously defined using a Format 4 [DECLARE](./DECLARE) statement. By default, when the AT clause is used, the active connection is switched to the connection identified by *Database* and all the next statements will work on that connection; under the [-csora](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) option, instead, the connection is switched only for the current statement.
2. Only one destination Host-Variable is allowed. If the stored procedure returns multiple fields or multiple rows, use a cursor defined using a Format 1 [DECLARE](./DECLARE) statement.
3. If the parameter type is not specified, INOUT is used by default.

### Examples

Call a Stored Procedure that updates values on a totals table (the logic of the update is DB Server based and stored)

```cobol
exec sql
  call update_totals()
end-exec
```

Call a Stored Procedure with an input parameter and an output parameter, storing the result in a destination data item

```cobol
exec sql
  call proc1(:p1 IN, :p2 OUT) into :exit-status
end-exec
```
