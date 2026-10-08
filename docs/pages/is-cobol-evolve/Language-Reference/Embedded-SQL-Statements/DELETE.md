## DELETE

The DELETE statement removes rows from a database table.

### General format

```cobol
EXEC SQL [ AT Database ]
 
  [ FOR Iterations ]
 
  DELETE Options [ WHERE { Search-Condition                                     } ]
                         { CURRENT OF Cursor-Name [ FOR ROW Row-Num OF ROWSET ] }
 
                 [ RETURNING Field ... INTO HostVariable ... ]
 
END-EXEC
```

### Syntax rules

1. *Iterations* can be either a host variable or a numeric literal. It specifies the number of rows to be processed.
2. *Options* is passed to the driver without further checks. Refer to the database documentation for detailed syntax. Syntax errors, if any, are returned at runtime.
3. *Search-Condition* is composed of predicates of various kinds, optionally combined using parentheses and logical operators. Its syntax is database dependent, therefore only [Host Variables](../Embedded-SQL-ESQL/Host-variables/Host-variables) are handled and no further syntax checking is performed. Syntax errors, if any, are returned at runtime.
4. Cursor-Name must be previously defined by a [DECLARE](./DECLARE) statement.
5. *Field* is a alphanumeric literal.
6. *Row-Num* is a numeric literal or host variable.
7. *Host-Variable* is a [host variable](../Embedded-SQL-ESQL/Host-variables/Host-variables).

### General rules

1. *Database* identifies the active connection that will execute the query and must be previously defined using a Format 4 [DECLARE](./DECLARE) statement. By default, when the AT clause is used, the active connection is switched to the connection identified by *Database* and all the next statements will work on that connection; under the [-csora](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) option, instead, the connection is switched only for the current statement.
2. When *Search-Condition* is specified, only rows matching it are deleted.
3. The FOR clause limits the number of times the statement is executed when *Search-Condition* contains array host variables If you omit this clause,it executes the statement once for each component of the smallest array.
4. When *Search-Condition* is not specified, all rows are deleted.
5. CURRENT OF allows you to delete the last fetched record in the active cursor.

When this syntax is used

- the statement associated to the cursor should not use "SELECT \*" and
- the statement associated to the cursor should query from a single table.

Otherwise a "cursor is not updatable" error may occur.

6. FOR ROW n OF ROWSET specifies which row of the current rowset is to be deleted. The corresponding row of the rowset is deleted, and the cursor remains positioned on the current rowset. If the rowset consists of a single row, or all other rows in the rowset have already been deleted, then the cursor is positioned before the next rowset of the result table. If there is no next rowset, the cursor is positioned after the last rowset.
7. The RETURNING clause allows you to receive the updated fields value into host variables. Not all databases support this feature. For the Oracle database, the program must be compiled with the [-csora](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) compiler option.

### Examples

Delete 2 records by specific key

```cobol
exec sql
   delete from customers where  cust-code = 2 or cust-code = 4
end-exec
```

Declare, open and fetch a cursor. Delete records where the field cust-name is empty.

```cobol
exec sql 
   declare cust_cur  cursor for select cust_code, cust_name from customers
end-exec               
 
exec sql 
   open cust_cur
end-exec     
 
perform until 1 = 2
   exec 
      sql fetch next cust_cur into :ws-cust-code, :ws-cust-name
   end-exec
 
   if ws-cust-name = space
      exec sql 
           delete from customers where current of cust_cur
      end-exec
   end-if
 
   if sqlcode = 100
      exit perform
   end-if
 
end-perform
 
exec sql 
   close cust_cur
end-exec
```
