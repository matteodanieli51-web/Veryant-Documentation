## C$STRING_CONVERT

The C$STRING_CONVERT library routine converts the content of an alphanumeric data item from one character set to another.

### Syntax:

```cobol
 CALL "C$STRING_CONVERT" USING inputString
                               outputString
                               inputEncoding
                               outputEncoding
                        GIVING returnCode
```

### Parameters:

|  |  |  |  |
| --- | --- | --- | --- |
| *inputString* | PIC X(n) | Contains the original string encoded with the character set specified by *inputEncoding*. |  |
| *outputString* | PIC X(n) | Receives the new string encoded with the character set specified by *outputEncoding*. |  |
| *inputEncoding* | PIC X(n) or string literal | Specifies the encoding of *inputString*. Refer to [Supported Encodings](https://docs.oracle.com/javase/8/docs/technotes/guides/intl/encoding.doc.html) in the Java documentation for the list of valid values. |  |
| *outputEncoding* | PIC X(n) or string literal | Specifies the encoding for *outputString*. Refer to [Supported Encodings](https://docs.oracle.com/javase/8/docs/technotes/guides/intl/encoding.doc.html) in the Java documentation for the list of valid values. |  |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful |
| 1 | Operation failed.<br>An invalid encoding have been used or a conversion exception occurred. |

### Examples:

**Example -** Convert a string from Cp1252 to UTF-8 on Windows

```cobol
call "c$string_convert" using myvar myvar-utf8 "Cp1252" "UTF-8"
```
