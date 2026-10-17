## C$SLEEP

The C$SLEEP library routine suspends the running program without using CPU resources. When called by a thread, it suspends that thread.

### Syntax:

```cobol
 CALL "C$SLEEP" USING seconds
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *seconds* | Unsigned fixed-point numeric parameter, or an alphanumeric data item containing an unsigned fixed-point number. | Specifies the time to wait before the program execution is resumed.<br>Decimal values are allowed. If the parameter is alphanumeric, both comma and dot decimal separators are accepted. If the parameter is numeric, the decimal separator specified in the SPECIAL-NAMES should be used, instead. |

### Examples:

**Example -** Put the program to sleep for half second

```cobol
call "c$sleep" using 0.5
```
