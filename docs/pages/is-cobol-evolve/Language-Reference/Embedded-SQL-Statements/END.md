## END

The BEGIN ... END statement gives the statements defined within the BEGIN and END keywords the status of a single statement.

### General Format

```cobol
EXEC SQL 
 
  END Options 
 
END-EXEC
```

### Syntax rules

1. The END statement is a processed as a comment statement. It can be used only in DATA DIVISION.

### Examples

Show the end of the declare section

```cobol
exec sql end declare section end-exec
```
