## ALTER

The ALTER statement allows you to modify a resource.

### General format

```cobol
EXEC SQL [ AT Database ]
 
  ALTER Options
 
END-EXEC
```

### Syntax rules

1. *Options* is passed to the driver without further checks. Refer to the database documentation for detailed syntax. Syntax errors, if any, are returned at runtime.

### General Rules

1. *Database* identifies the active connection that will execute the query and must be previously defined using a Format 4 [DECLARE](./DECLARE) statement. By default, when the AT clause is used, the active connection is switched to the connection identified by *Database* and all the next statements will work on that connection; under the [-csora](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) option, instead, the connection is switched only for the current statement.

### Examples

Alter a table to add its primary key

```cobol
exec sql 
   alter table customers add primary key (cust_code)
end-exec
```
