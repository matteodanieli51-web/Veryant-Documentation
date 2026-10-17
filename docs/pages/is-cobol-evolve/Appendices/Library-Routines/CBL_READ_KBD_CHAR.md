## CBL_READ_KBD_CHAR

The CBL_READ_KBD_CHAR waits until a character is typed and then reads it with no echo.

### Syntax:

```cobol
 CALL "CBL_READ_KBD_CHAR" USING char
                         GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *char* | PIC X(1) | Receives the character that was typed, in ASCII. |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| >0 | Error status. |

### Examples:

**Example -** read the next character typed by the user

```cobol
working-storage section.
...
01 char-typed pic x.
...
procedure division.
...
call "cbl_read_kbd_char" using char-typed.
```
