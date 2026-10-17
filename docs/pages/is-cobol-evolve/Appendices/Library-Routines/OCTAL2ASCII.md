## OCTAL2ASCII

The OCTAL2ASCII library routine converts an octal number to a string according to the ASCII table.

### Syntax:

```cobol
 CALL "OCTAL2ASCII" USING octalValue
                          asciiValue
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *octalValue* | PIC 9(8) | Specifies the octal number to be converted. Valid values range from 0 to 177777. |
| *asciiValue* | PIC X(2) | Receives the converted ASCII string. |

### Examples:

**Example -** Convert Octal value to ascii characters

```cobol
*> define oct-value as pic 9(8)
*> define asc-value as pic x(2)

move 00040501 to oct-value
move spaces   to asc-value

call "octal2ascii" using oct-value asc-value
*> asc-value will contain "AA"
```
