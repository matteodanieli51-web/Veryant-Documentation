## INSERT

The INSERT statement allows you to add new rows into a table.

### Format 1

```cobol
EXEC SQL [ AT Database ]
 
  [ FOR Iterations ]
 
  INSERT Options [ VALUES ( { Insert-Value } ... ) ]
 
         [ RETURNING Field ... INTO HostVariable ... ]
 
END-EXEC
```

### Format 2

```cobol
EXEC SQL [ AT Database ]
 
  INSERT Options [ VALUES ( { Insert-Value } ... ) ]  [ FOR Num-Rows ROWS ]
 
END-EXEC
```

### Syntax rules

1. *Iterations* can be either a host variable or a numeric literal. It specifies the number of rows to be processed.
2. *Options* is passed to the driver without further checks. Refer to the database documentation for detailed syntax. Syntax errors, if any, are returned at runtime.
3. *Insert-Value* can be a [host variable](../Embedded-SQL-ESQL/Host-variables/Host-variables) or a [Nonnumeric Literal](../Preface/Definitions#nonnumeric-literal), as defined in the [Definitions](../Preface/Definitions) section of the Preface of this document.
4. *Field* is a alphanumeric literal.
5. *Host-Variable* is a [host variable](../Embedded-SQL-ESQL/Host-variables/Host-variables).
6. *Num-Rows* can be a [host variable](../Embedded-SQL-ESQL/Host-variables/Host-variables) or a [Numeric Literal](../Preface/Definitions#nonnumeric-literal), as defined in the [Definitions](../Preface/Definitions) section of the Preface of this document.

### General rules

1. *Database* identifies the active connection that will execute the query and must be previously defined using a Format 4 [DECLARE](./DECLARE) statement. By default, when the AT clause is used, the active connection is switched to the connection identified by *Database* and all the next statements will work on that connection; under the [-csora](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options) option, instead, the connection is switched only for the current statement.
2. When *Insert-Value* is a [host variable](../Embedded-SQL-ESQL/Host-variables/Host-variables) declared as a group-item, the runtime uses all subordinate items as separate values instead of using the group-item as a single value.

#### Format 1

3. The FOR clause limits the number of times the statement is executed when *Insert-Value* are array host variables. If you omit this clause,it executes the statement once for each component of the smallest array.
4. The RETURNING clause allows you to receive the updated fields value into host variables. Not all databases support this feature. For the Oracle database, the program must be compiled with the [-csora](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options) compiler option.

#### Format 2

5. The FOR n ROWS form of INSERT statement inserts multiple rows into a table from the values that are provided in host-variable arrays, where each array corresponds to a column.

### Examples

Inserting rows on a customers table

```cobol
exec sql insert into customers values (10, 'Adam Smith') end-exec
exec sql insert into customers values (20, 'Eve Scott') end-exec
```
