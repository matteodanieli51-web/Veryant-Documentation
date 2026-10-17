## C$REPLACE_ALL

The C$REPLACE_ALL library routine allows you to replace parts of text in an alphanumeric variable according to a regular expression.

### Syntax

```cobol
 CALL "C$REPLACE_ALL" USING variable
                            regExp
                            replacement
                           [options]
                           [errorDesc]
                     GIVING returnCode
```

### Parameters

|  |  |  |
| --- | --- | --- |
| *variable* | PIC X(n) | Variable subjected to replacement |
| *regExp* | PIC X(n) | Regular expression.<br>It must respect Java specifications ([https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html](https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html) ). |
| *replacement* | PIC X(n) | Text to use as replacement. This text is not trimmed, so trailing spaces will be used as replacement as well. |
| *options* | PIC 9(n) | Optional parameter. It’s the sum between two or more of the following values defined in [iscobol.def](../Copybooks/iscobol.def):<br>CREP_CASE_INSENSITIVE<br>CREP_LEFT_TRIMMED<br>CREP_RIGHT_TRIMMED<br>These options affect only variable. |
| *errorDesc* | PIC X(n) | Optional parameter. It holds the error description in case of illegal regular expression. |

### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | operation successful |
| 1 | invalid regular expression |
| 2 | insufficient parameters |
| 3 | malformed replacement |

### Examples:

**Example -** Replace a string with another string with different length

```cobol
*> copy "iscobol.def" in working-storage
*> it’s good practice to define the involved alphanumeric data items as pic x any length.

 move "Dear @Name@," to wrk-str
 move "(?i)@NAME@" to search-reg-exp | Search for the tag @NAME@, case insensitive
 move "Christopher" to new-text      | Replace it with the actual name
 call "c$replace-all" using wrk-str
                            search-reg-exp
                            new-text
                            crep-right-trimmed
                            W-error
*> wrk-str new value will be "Dear Christopher,"
```
