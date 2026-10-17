## C$TOUPPER

The C$TOUPPER library routine converts a data item's content to upper-case.

### Syntax:

```cobol
 CALL "C$TOUPPER" USING textItem
                       [textLen]
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *textItem* | any alphanumeric data item | Specifies the text to be converted. |
| *textLen* | any numeric data item or numeric literal | Specifies the number of characters to be converted. Conversion occurs from left to right and only the first textLen characters are converted. If this parameter is omitted the whole string is translated. |

### Examples:

**Example -** Change case to uppercase for a string

```cobol
*> define str1 as pic x(n)

move "Hello COBOL World" to str1
call "c$toupper" using str1
*> new value for str1 will be: HELLO COBOL WORLD
```
