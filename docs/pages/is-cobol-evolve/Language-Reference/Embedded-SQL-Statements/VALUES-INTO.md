## VALUES INTO

The VALUES INTO statement assigns one or more values to host variables.

```cobol
EXEC SQL [ AT Database ]
 
VALUES { Expression, ... }  INTO Host-Variable, ... 
       { NULL, ...       }
 
END-EXEC
```

### Syntax rules

1. This statement is currently supported only on the IBM DB2 database and requires the [-csdb2](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options) compiler option.
2. *Expression* specifies a value and can take a number of different forms. It can be a constant value, a special register, an arithmetic calculation, a function, etcetera...
3. *Host-Variable* is a [host variable](../Embedded-SQL-ESQL/Host-variables/Host-variables).
4. NULL can only be specified for host variables that have an associated indicator variable.

### General rules

1. *Database* identifies the active connection that will execute the query and must be previously defined using a Format 4 [DECLARE](./DECLARE) statement. By default, when the AT clause is used, the active connection is switched to the connection identified by *Database* and all the next statements will work on that connection; under the [-csora](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options) option, instead, the connection is switched only for the current statement.
2. The value of each *Expression* is stored in the corresponding host *Host-Variable*.

### Examples

Assign the value of the CURRENT PATH special register to host variable HV1.

```cobol
exec sql 
     values(current path)
       into :hv1
end-exec.
```
