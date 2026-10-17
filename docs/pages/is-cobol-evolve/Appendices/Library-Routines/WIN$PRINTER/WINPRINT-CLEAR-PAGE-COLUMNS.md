### WINPRINT-CLEAR-PAGE-COLUMNS

The WINPRINT-CLEAR-PAGE-COLUMNS function erases any column setting previously defined through the [WINPRINT-SET-PAGE-COLUMN](./WINPRINT-SET-PAGE-COLUMN) function.

#### Syntax:

```cobol
 CALL "WIN$PRINTER" USING WINPRINT-CLEAR-PAGE-COLUMNS
                   GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WINPRINT-CLEAR-PAGE-COLUMNS | Constant |  |

#### Return code:

returnCode can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| WPRTERR-UNSUPPORTED | The WIN$PRINTER library routine is not supported. |
| WPRTERR-BAD-ARG | The WIN$PRINTER library routine has been called with bad parameters. |
