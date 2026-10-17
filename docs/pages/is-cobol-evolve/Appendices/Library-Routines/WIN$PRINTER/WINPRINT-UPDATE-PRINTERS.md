### WINPRINT-UPDATE-PRINTERS

The WINPRINT-UPDATE-PRINTERS function reloads the list of available printers so that any change to that list (e.g. the addition of a new printer) is detected by the COBOL program.

#### Syntax:

```cobol
 CALL "WIN$PRINTER" USING WINPRINT-UPDATE-PRINTERS
                   GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WINPRINT-UPDATE-PRINTERS | Constant |  |

#### Return code:

returnCode can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| WPRTERR-UNSUPPORTED | The WIN$PRINTER library routine is not supported. |
