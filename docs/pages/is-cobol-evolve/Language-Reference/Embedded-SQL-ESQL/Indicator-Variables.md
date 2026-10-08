## Indicator Variables

You can associate any host variable with an optional indicator variable. Each time the host variable is used in a SQL statement, a result code is stored in its associated indicator variable. Thus, indicator variables let you monitor host variables.

Indicator variables must be declared as a 2-byte integer (e.g. PIC S9(4) COMP).

If they’re not explicitly defined in the program’s Working-Storage, the compiler defines them implicitly and returns the warning number [265](\).

Their references must be prefixed with a colon ":" in SQL statements and must follow the host variable they refer to. There can be no space, one space or more spaces between the host variable and its indicator variable. The indicator variable can even appear on a separate line. The compiler uses the comma character to distinguish between host variables and indicator variables, for example:

| | |
| --- | --- |
| :var1, :var2 | var1 and var2 are considered as two separate host variables |
| :var1 :var2 | var1 is considered host variable while var2 is considered indicator variable |
| | |

To improve readability, you can precede any indicator variable with the optional keyword INDICATOR. You must still prefix the indicator variable with a colon. The correct syntax is:

```cobol
:host_var INDICATOR :indicator_var
```

which is equivalent to

```cobol
:host_var:indicator_var
```

Possible values for indicator variables are:

| | |
| --- | --- | --- |
| **Input** | -1 | The value of the host variable is ignored and NULL will be used, instead. |
| **Input** | >=0 | The whole value of the host variable will be used, no matter the value of the indicator variable. |
| **Output** | -2 | The column value does not fit the host variable, but the length of the column value cannot be determined. |
| **Output** | -1 | The column value is NULL. The program may not use the value of the host variable. |
| **Output** | 0 | The column value fits the host variable. |
| **Output** | >0 | The column value does not fit the host variable. The indicator variable value is the length, in characters for national items, of the column value.<br><br> When the data truncation occurs on a output parameter of a stored procedure, the behavior is influenced by the [iscobol.esql.indicator_trunc_on_call (boolean)](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#databasebridge-and-jdbcesql-configuration) configuration property. |
| | |

### Code example

The content of column1 is stored in the host variable named item1. The indicator variable ind1 is also set.

```cobol
...
 
working-storage section.
 
...
 
exec sql include SQLCA end-exec.
77 item1 pic 9(3).
77 ind1 pic s9(4) comp.
...
 
procedure division.
 
...
 
exec sql select column1 into :item1:ind1 from table1 where column1 = 1 end-exec.
...
```
