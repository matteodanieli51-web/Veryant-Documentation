### WINPRINT-SETUP

The WINPRINT-SETUP function shows a dialog window to choose the current printer.

#### Syntax:

```cobol
 CALL "WIN$PRINTER" USING WINPRINT-SETUP
                   GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WINPRINT-SETUP | Constant |  |

#### Return code:

returnCode can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| WPRTERR-UNSUPPORTED | The WIN$PRINTER library routine is not supported. |
| WPRTERR-BAD-ARG | The WIN$PRINTER library routine has been called with bad parameters. |
