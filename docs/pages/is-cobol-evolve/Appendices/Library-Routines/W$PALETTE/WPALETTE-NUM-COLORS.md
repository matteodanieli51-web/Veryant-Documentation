### WPALETTE-NUM-COLORS

The WPALETTE-NUM-COLORS function retrieves the maximum number of colors the system can render simultaneously.

#### Syntax:

```cobol
 CALL "W$PALETTE" USING WPALETTE-NUM-COLORS
                 GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WPALETTE-NUM-COLORS | Constant |  |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| >0 | Operation successful. It receives the number of colors the system can render simultaneously. |
| WPERR-UNSUPPORTED | The W$PALETTE library routine is not supported. |
