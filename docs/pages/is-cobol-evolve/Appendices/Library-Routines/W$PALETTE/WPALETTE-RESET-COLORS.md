### WPALETTE-RESET-COLORS

The WPALETTE-RESET-COLORS function restores the default colors settings.

#### Syntax:

```cobol
 CALL "W$PALETTE" USING WPALETTE-RESET-COLORS
                 GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WPALETTE-RESET-COLORS | Constant |  |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| WPERR-UNSUPPORTED | The W$PALETTE library routine is not supported. |
| WPERR-BAD-ARG | The function has received incorrect parameters. |
