### WINPRINT-GET-PAGE-LAYOUT

The WINPRINT-GET-PAGE-LAYOUT function retrieves the number of printable lines and columns. The result depends on the chosen font, the page size, margins and orientation.

#### Syntax:

```cobol
 CALL "WIN$PRINTER" USING WINPRINT-GET-PAGE-LAYOUT
                          WINPRINT-DATA
                   GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WINPRINT-GET-PAGE-LAYOUT | Constant |  |
| WINPRINT-DATA | Group Item | Structure that receives the information. This group item, defined in [isprint.def](../../Copybooks/isprint.def), has the following structure:<br>*wprtdata-lines-per-page*<br>It is the number of printable lines in a page.<br>*wprtdata-columns-per-page*<br>It is the number of printable columns in a page. |

#### Return code:

returnCode can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| WPRTERR-UNSUPPORTED | The WIN$PRINTER library routine is not supported. |
| WPRTERR-BAD-ARG | The WIN$PRINTER library routine has been called with bad parameters. |
