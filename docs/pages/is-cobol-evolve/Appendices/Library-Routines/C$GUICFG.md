## C$GUICFG

The C$GUICFG library routine is used to dynamically manipulate configuration settings in a RM/COBOL compatible way.

Configuration settings in RM/COBOL syntax are translated to the corresponding iscobol property if applicable.

For example:

```cobol
CALL "C$GUICFG" USING "Printer Dialog Always=true"
```

is equivalent to

```cobol
SET ENVIRONMENT "printer.dialog.always" to "true"
```

### Syntax:

```cobol
 CALL "C$GUICFG" USING  setting1
                       [setting2 ... settingN]
                        exit-code
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *setting1*<br>*setting2*<br>*...*<br>*settingN* | PIC X(n) | Specifies the configuration setting. |
| *exit-code* | PIC 9(n) | Receives the exit status: zero for success and non-zero for failure. |

### Examples:

**Example -** Set one RM compatible printing property

```cobol
call "c$guicfg" using "Printer Dialog Always=true"
```
