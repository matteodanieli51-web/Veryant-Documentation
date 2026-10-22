### CREGEXP-COMPILE

The CREGEXP-COMPILE function compiles a regular expression to ensure that it has a valid form, returning a handle to the compiled regular expression or NULL if there is an error.

#### Syntax

```cobol
 CALL "C$REGEXP" USING CREGEXP-COMPILE
                       regExpr
                      [flags]
                GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| CREGEXP-COMPILE | Constant |  |
| *regExpr* | PIC X(n) | Contains the regular expression to compile.<br>It must be NULL-terminated because trailing spaces are allowed in regular expressions. |
| *flags* | PIC 9(n) | (Optional) if set to 1, enables case insensitive search (IGNORE_CASE flag) |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation failed.<br>Call the [CREGEXP-LAST-ERROR](./CREGEXP-LAST-ERROR) function for more details. |
| >0 | Handle to the compiled regular expression. |
