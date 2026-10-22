### WINPRINT-CLEAR-DATA-COLUMNS

The WINPRINT-CLEAR-DATA-COLUMNS function erases any column setting previously defined with the [WINPRINT-SET-DATA-COLUMNS](./WINPRINT-SET-DATA-COLUMNS) function.

#### Syntax:

```cobol
 CALL "WIN$PRINTER" USING WINPRINT-CLEAR-DATA-COLUMNS
                   GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WINPRINT-CLEAR-DATA-COLUMNS | Constant |  |

#### Return code:

returnCode can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| WPRTERR-UNSUPPORTED | The WIN$PRINTER library routine is not supported. |
| WPRTERR-BAD-ARG | The WIN$PRINTER library routine has been called with bad parameters. |
