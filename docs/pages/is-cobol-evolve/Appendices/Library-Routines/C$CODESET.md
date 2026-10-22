## C$CODESET

The C$CODESET library routine translates a string from EBCDIC to ASCII and vice versa.

### Syntax:

```cobol
 CALL "C$CODESET" USING transFlag
                        length,
                        transString
                       [encoding]
                 GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *transFlag* | PIC 9(2) COMP-X | Indicates the type of text in *TransString*, and whether to apply *Length* when performing the translation. *TransFlag* takes one of the following values:<br>0- *TransString* contains EBCDIC and *Length* specifies the length of the string to translate to ASCII.<br>1- *TransString* contains ASCII and *Length* specifies the length of the string to translate to EBCDIC.<br>2- *TransString* contains EBCDIC and 256 bytes of data should be translated to ASCII. The *Length* parameter is ignored.<br>3- *TransString* contains ASCII and that 256 bytes of data should be translated to EBCDIC. The *Length* parameter is ignored. |
| *length* | 9(9) COMP-X | Specifies the length of the string to translate. |
| *transString* | PIC X(n) | Contains the string to translate and the result of the translation. |
| *encoding* | PIC X(n) | Contains an alternate java encoding to be used in conversion. By default cp037 is used. |

### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| -1 | Error converting to EBCDIC |
| -2 | Error converting to ASCII |
| -3 | Bad arguments |

### Examples:

**Example -** Translate a string from ASCII to EBCDIC

```cobol
working-storage section.
77 transFlag   pic 9(2) comp-x.
77 strLen      pic 9(9) comp-x.
77 transString pic x(256).
77 retCode     pic s9(1).

procedure division.
...
   move "This is the ASCII text" to transString
   move 1  to transFlag
   move 22 to strLen
   call "c$codeset"
              using transFlag, strLen transString
             giving retCode.
```
