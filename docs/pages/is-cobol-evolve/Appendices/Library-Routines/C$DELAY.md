## C$DELAY

The C$DELAY library routine suspends the running program without using CPU resources.

### Syntax:

```cobol
 CALL "C$DELAY" USING seconds
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *seconds* | any numeric data item or numeric literal | Specifies the time to wait before the program execution is resumed. Decimal values are allowed. |

### Examples:

**Example -** Put the program to sleep for half second

```cobol
call "c$delay" using 0.5
```
