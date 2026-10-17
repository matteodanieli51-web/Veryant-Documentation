## SET

The SET statement allows you to set specific database dependent settings host variables.

### Format 1

```cobol
EXEC SQL [ AT Database ]
 
  SET Options 
 
END-EXEC
```

### Format 2

```cobol
EXEC SQL [ AT Database ]
 
  SET Options 
 
END-EXEC
```

### Syntax rules

1. No syntax check is performed on the content of Options.
2. *Host-Variable* is a [host variable](../Embedded-SQL-ESQL/Host-variables/Host-variables).
3. *Expression* specifies a value and can take a number of different forms. It can be a constant value, a special register, an arithmetic calculation, a function, etcetera...

### General rules

1. *Database* identifies the active connection that will execute the query and must be previously defined using a Format 4 [DECLARE](./DECLARE) statement. By default, when the AT clause is used, the active connection is switched to the connection identified by *Database* and all the next statements will work on that connection; under the [-csora](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options) option, instead, the connection is switched only for the current statement.

Format 1

2. The SET statement is passed as is to the underlying JDBC driver. If the driver doesn’t understand it, an SQL error will be generated.

Format 2

3. A Format 2 SET statement is automatically transformed to a SELECT query to retrieve the result of the function. The resulting query depends on the compatibility activated through compiler options.

When using the [-csdb2](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options) option, the query is:

```cobol
select Expression into :Host-Variable from sysibm.sysdumm1
```

When using the [-csora](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options) option, the query is:

```cobol
select Expression into :Host-Variable from dual
```

If none of the above options is used, the query is:

```cobol
select Expression into :Host-Variable
```

### Examples

Set the current transaction as READ ONLY and give it a name. This syntax is supported by the Oracle database

```cobol
   exec sql
     set transaction read only name 'mytran'
   end-exec
```

Retrieve the current schema through the appropriate special register. This syntax is supported by the DB2 database and requires the [-csdb2](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options) compiler option

```cobol
   exec sql
     set :wrk-schema = current schema
   end-exec
```
