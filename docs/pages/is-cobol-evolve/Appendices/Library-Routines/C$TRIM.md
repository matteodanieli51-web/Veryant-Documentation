## C$TRIM

The C$TRIM library routine performs a trim operation on alphanumeric variables.

A trim operation consists in the removal of any leading and trailing character whose hex value is less than 0x21, so spaces, low-values and the other characters in that range are removed.

**Note:** Since TRIM, TRIML and TRIMR intrinsic functions are available, this routine is deprecated.

### Syntax:

```cobol
 CALL "C$TRIM" USING var
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *var* | PIC X(n) | If *var* is defined as pic x any length, the variable may be resized. If *var* is defined as pic x(n), the variable is not resized and the trimmed text is left aligned in the variable area. Variables that are not alphanumeric produce undefined effects. |

### Examples:

**Example -** Remove leading spaces on a string

```cobol
*> define str1 as pic x(n)

move "   Hello COBOL World" to str1
call "c$trim" using str1
*> the first 3 spaces will be removed
```
