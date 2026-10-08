## HOSTVAR Directive

The HOSTVAR directive specifies the type of the host variables in the Embedded SQL block. This directive is useful when a stored procedure is called in the Embedded SQL block and this stored procedure requires specific parameter types. It is particularly useful in the [EXECUTE](../Embedded-SQL-Statements/EXECUTE) statement, where it’s not possible to specify the parameter type after the parameter name like you can do in a [CALL](../Embedded-SQL-Statements/CALL) statement instead.

```cobol
>>SQL HOSTVAR hostvarsTypes
```

or

```cobol
$SQL HOSTVAR hostvarsTypes
```

or

```cobol
*(( SQL HOSTVAR hostvarsTypes ))
```

or

```cobol
*>(( SQL HOSTVAR hostvarsTypes ))
```

*hostvarsTypes* has the following format:

```cobol
index,type[,dbtype[,typename]];index,type[,dbtype[,typename]];...;index,type[,dbtype[,typename]]
```

Where

- *index* is the ordinal number of the host variable in the Embedded SQL block; use 1 to identify the first host variable, use 2 to identify the second host variable, and so on;
- *type* is the parameter type; use "i" for input, "o" for output and "u" for input-output.
- *dbtype* is the type of the corresponding database field. Any Java SQL type is allowed. Refer to the [java.sqlTypes javadoc](https://docs.oracle.com/javase/8/docs/api/java/sql/Types.html) for the list of possible values. If the *dbtype* is ARRAY, specify also the type name; the Compiler will look for the configuration property [iscobol.compiler.esql.array.TypeName](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#databasebridge-and-jdbcesql-configuration) in order to know which field type is used in the array.

It’s not mandatory to describe all the host variables; those host variables that are not described are considered as *dbtype*\=OTHER. The type instead is calculated as follows:

- host variables that are not used as parameter of a stored procedure are considered output if they’re followed by ":=", input otherwise.
- host variables that are used as parameter of a stored procedure are treated according to the configuration property [iscobol.compiler.esql.procedure.ProcedureName](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#databasebridge-and-jdbcesql-configuration). If this property is not set, then they’re considered as specified by [iscobol.esql.default_param_type](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#databasebridge-and-jdbcesql-configuration).

### Example

Specify that in-param is an input parameter while out-param is an output parameter. Foo will be automatically considered as output since it’s followed by ":=" :

```cobol
      >>SQL HOSTVAR 2,i;3,o 
       exec sql
           execute
           begin
              :foo := 1;
              stored_0 (:in-param, :out-param);
           end;
       end-exec 
```
