## OPEN

The OPEN statement executes the [SELECT](./SELECT) statement the cursor refers to and positions the cursor immediately before the first row returned.

### Format 1

```cobol
EXEC SQL [ AT Database ]
 
  OPEN { Cursor-Name } [ USING Host-Variable, ... ] [ INTO Host-Variable, ... ]
       { Host-Var    }
 
END-EXEC
```

### Format 2

```cobol
EXEC SQL [ AT Database ]
 
  OPEN { Cursor-Name } [ USING DESCRIPTOR Sql-Descriptor ]
       { Host-Var    }
 
END-EXEC
```

### Syntax rules

1. *Cursor-Name* is a [Nonnumeric Literal](../Preface/Definitions#nonnumeric-literal), as defined in the [Definitions](../Preface/Definitions) section of the Preface of this document.
2. *Host-Var* must be USAGE HANDLE
3. *Host-Variable* is a [host variable](../Embedded-SQL-ESQL/Host-variables/Host-variables).
4. *Sql-Descriptor* is a [SQLDA](../Embedded-SQL-ESQL/SQLDA/SQLDA) structure.This syntax is compiled only under the [-csdb2](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options) option.

### General rules

1. *Database* identifies the active connection that will execute the query and must be previously defined using a Format 4 [DECLARE](./DECLARE) statement. By default, when the AT clause is used, the active connection is switched to the connection identified by *Database* and all the next statements will work on that connection; under the [-csora](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options) option, instead, the connection is switched only for the current statement.
2. *Cursor-Name* must be previously defined by a [DECLARE](./DECLARE) statement.
3. If the cursor is already open, the runtime automatically closes and reopens it.
4. When Host-Variable is a [host variable](../Embedded-SQL-ESQL/Host-variables/Host-variables) declared as a group-item, the runtime uses all subordinate items as separate values instead of using the group-item as a single value.
5. Once open, you can retrieve the cursor handle by invoking the getResultSet() method of the com.iscobol.rts.EsqlRuntime object. This method returns a java.sql.ResultSet that can be passed to other java programs. See [EsqlRuntime (com.iscobol.rts.EsqlRuntime)](\) for more information.

### Examples

Declare, open and fetch a cursor

```cobol
exec sql 
   declare cust_cur  cursor for select * from customers
end-exec
 
exec sql 
   open cust_cur
end-exec     
 
perform until 1 = 2
   exec 
      sql fetch next cust_cur into :ws-cust-code, :ws-cust-name
   end-exec
 
   display "code: " ws-cust-code " name: " ws-cust-name
   if sqlcode = 100
      exit perform
   end-if
 
end-perform
 
exec sql 
   close cust_cur
end-exec
```
