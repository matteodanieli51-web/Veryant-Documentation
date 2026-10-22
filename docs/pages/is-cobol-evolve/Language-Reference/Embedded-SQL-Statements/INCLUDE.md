## INCLUDE

The INCLUDE statement includes a file in the source code.

### General format

```cobol
EXEC SQL
 
  INCLUDE File-Name
 
END-EXEC
```

### Syntax rules

1. *File-Name* is the name of a regular disk file. If the name contains a period (.), it must be enclosed in double quotes.

### General rules

1. The INCLUDE statement is similar to the COPY statement.
2. *File-Name* is internally converted to upper case.
3. If there is more than one *File-Name*, only the first one is used, the others are considered comments.

### Examples

Include isCOBOL SQLCA copybook

```cobol
exec sql include sqlca end-exec.
```
