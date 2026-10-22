## C$TOLOWER

The C$TOLOWER library routine converts a data item's content to lower-case.

### Syntax:

```cobol
 CALL "C$TOLOWER" USING textItem
                       [textLen]
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *textItem* | any alphanumeric data item | Specifies the text to be converted. |
| *textLen* | any numeric data item or numeric literal | Specifies the number of characters to be converted. Conversion occurs from left to right and only the first textLen characters are converted. If this parameter is omitted the whole string is translated. |

### Examples:

**Example -** Change case to lowercase for a string

```cobol
*> define str1 as pic x(n)

move "Hello COBOL World" to str1
call "c$tolower" using str1
*> new value for str1 will be: hello cobol world
```
