## ASCII2OCTAL

The ASCII2OCTAL library routine converts a string to an octal number according to the ASCII table.

### Syntax:

```cobol
 CALL "ASCII2OCTAL" USING asciiValue
                          octalValue
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *asciiValue* | PIC X(2) | Contains the ASCII characters to be converted. If characters outside the ASCII table are passed, results are unpredictable. |
| *octalValue* | PIC 9(8) | Receives the octal value of *asciiValue*. |

### Notes:

The routine always converts both characters in *asciiValue*. To convert a single character make sure that the first byte contains 0x00. If *asciiValue* contains spaces, their value 0x20 will be converted to octal.

```cobol
MOVE X"00" TO asciiValue(1:1)
MOVE "A" TO asciiValue(2:1)
CALL "ASCII2OCTAL" USING asciiValue, octalValue | Returns 101
```

### Examples:

**Example -** Convert "AZ" state code to its representation in OCTAL

```cobol
*> asciiValue should be pic x(n)
*> octalValue should be pic 9(n) and have double the length of the
*> asciiValue

move "AZ" to asciiValue
call "ascii2octal" using asciiValue
                         octalValue

*> octalValue will contain 00040532
```
