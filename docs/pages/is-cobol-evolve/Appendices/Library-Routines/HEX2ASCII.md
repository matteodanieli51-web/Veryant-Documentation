## HEX2ASCII

The HEX2ASCII library routine converts a hexadecimal number to a string according to the ASCII table.

### Syntax:

```cobol
 CALL "HEX2ASCII" USING asciiValue
                        hexValue
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *asciiValue* | PIC X(n) | Receives the converted ASCII string. |
| *hexValue* | PIC X(n)<br>It should be twice the size of *asciiValue* | Specifies the hexadecimal number to be converted. |

### Examples:

**Example -** Convert HEX representation to Ascii value

```cobol
*> define ascii-value and hex-value as pic x(n) and
*> hex-value should be double the lenght of ascii-value
move "a1" to hex-value
call "hex2ascii" using ascii-value, hex-value
*> ascii-value will contain "i"
```
