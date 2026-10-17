## ASCII2HEX

The ASCII2HEX library routine converts a string to a hexadecimal number according to the ASCII table.

### Syntax:

```cobol
 CALL "ASCII2HEX" USING asciiValue
                        hexValue
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *asciiValue* | PIC X(n) | Specifies the ASCII characters to be converted. |
| *hexValue* | PIC X(n)<br>It should be twice the size of *asciiValue* | Receives the hexadecimal value of *asciiValue*. |

### Examples:

**Example -** Convert "AZ" state code to its representation in HEX

```cobol
*> both variables should be pic x(n), however, the hexValue variable
*> should have at least double of the lenght of the asciiValue

move "AZ" to asciiValue
call "ascii2hex" using asciiValue
                        hexValue

*> hexValue will contain: 415A
```
