## C$CENTURY

The C$CENTURY library routine retrieves the first two digits of the current year.

### Syntax:

```cobol
 CALL "C$CENTURY" USING century
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *century* | PIC XX or PIC 99 | Receives the first two digits of the current year |

### Examples:

**Example -** Getting the current century

```cobol
working-storage section.
77 century pic xx.
...
procedure division.
...
  call "c$century" using century.
```
