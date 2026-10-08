## SELECT

The SELECT statement returns values from tables.

### General format

```cobol
EXEC SQL [ AT Database ]
 
  [ FOR Iterations ]
 
  SELECT Select-Options [ INTO Host-Variable, ... ] FROM From-Options 
                        [ WHERE Search-Condition  ]  [ Options ]
 
END-EXEC
```

### Syntax rules

1. *Iterations* can be either a host variable or a numeric literal. It specifies the number of rows to be processed.
2. Host variables used in *Search-Condition* and *Select-Options*, if any, are replaced by question marks (?) and then passed to the driver without further check.
3. *Host-Variable* is a [host variable](../Embedded-SQL-ESQL/Host-variables/Host-variables).

### General rules

1. *Database* identifies the active connection that will execute the query and must be previously defined using a Format 4 [DECLARE](./DECLARE) statement. By default, when the AT clause is used, the active connection is switched to the connection identified by *Database* and all the next statements will work on that connection; under the [-csora](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options) option, instead, the connection is switched only for the current statement.
2. When *WHERE* is specified, only rows matching *Search-Condition* are returned.
3. When *Search-Condition* is not specified, all rows are returned.
4. The FOR clause limits the number of times the statement is executed when *Search-Condition* contains array host variables If you omit this clause,it executes the statement once for each component of the smallest array.
5. When *Host-Variable* is a [host variable](../Embedded-SQL-ESQL/Host-variables/Host-variables) declared as a group-item, the runtime uses all subordinate items as separate values instead of using the group-item as a single value.
6. If *Host-Variable* is array, it fetches enough rows to fill the array.

Array host variables can have different sizes. In this case, the number of rows it fetches is determined by the smaller of the following values:

- The size of the smallest array
- The value of the host_integer in the optional FOR clause

If the array is not completely filled then the warning is issued and you should check SQLERRD(3) to see how many rows were actually fetched.

If one of the host variables in the INTO clause is an array, they must all be arrays.

7. *Options* are passed to the driver without further checks. Refer to the database documentation for allowed syntax. Syntax errors, if any, are returned at runtime.

### Examples

Select customer name for a given customer code

```cobol
move spaces to ws-cust-name
move 2020   to ws-cust-code
exec sql
     select customer_name into :ws-cust-name
       from customers
      where customer_code = :ws-cust-code
end-exec
```
