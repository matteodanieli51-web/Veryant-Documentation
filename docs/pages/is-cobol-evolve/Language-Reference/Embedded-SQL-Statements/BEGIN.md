## BEGIN

The BEGIN ... END statement gives the statements defined within the BEGIN and END keywords the status of a single statement.

### General Format

```cobol
EXEC SQL
 
  BEGIN Options
 
END-EXEC
```

### Syntax rules

The BEGIN statement is a processed as a comment statement. It can be used only in DATA DIVISION.

### Examples

Show the begin of the declare section

```cobol
exec sql begin declare section end-exec
```
