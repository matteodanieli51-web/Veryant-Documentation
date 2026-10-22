## CBL_GET_KBD_STATUS

The CBL_GET_KBD_STATUS library routine checks whether there is a character waiting to be read from the keyboard.

### Syntax:

```cobol
 CALL "CBL_GET_KBD_STATUS" USING keyStatus
                          GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *keyStatus* | PIC X COMP-X | Returns the keyboard status:<br>0 - no character available<br>1 - character available |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| >0 | Error status. |

### Examples:

**Example -** Check if there’s a character in the keyboard buffer

```cobol
working-storage section.
77 ks pic x comp-x.
...
procedure division.
...
call "cbl_get_kbd_status" using ks.
if ks = 1 |character available
...
```
