## C$SHOW

The C$SHOW library routine allows you to show or hide the current window.

### Syntax:

```cobol
 CALL "C$SHOW" USING flag
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *flag* | any numeric data item or numeric literal | Specifies the visible state.<br>Set this parameter to zero to hide the current window. Set this parameter to a value greater than zero to make the current window visible. |

### Examples:

**Example -** Hide the current window

```cobol
call "c$show" using 0.
```
