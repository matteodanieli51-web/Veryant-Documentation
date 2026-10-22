## Dynamic SQL

While embedded SQL is fine for fixed applications, sometimes it is important for a program to dynamically create entire SQL statements. With dynamic SQL, a statement stored in a string variable can be issued. [PREPARE](../Embedded-SQL-Statements/PREPARE) turns a character string into a SQL statement, and [EXECUTE](../Embedded-SQL-Statements/EXECUTE) executes that statement.

[PREPARE](../Embedded-SQL-Statements/PREPARE) and [EXECUTE](../Embedded-SQL-Statements/EXECUTE) may be combined into one statement using the IMMEDIATE clause of the [EXECUTE](../Embedded-SQL-Statements/EXECUTE) statement.

### Code example

```cobol
...
 
working-storage section.
 
...
 
exec sql include SQLCA end-exec.
77 cmd usage handle.
...
 
procedure division.
 
...
 
exec sql prepare :cmd from "DELETE FROM TABLE1" end-exec.
exec sql execute :cmd end-exec.
...
```
