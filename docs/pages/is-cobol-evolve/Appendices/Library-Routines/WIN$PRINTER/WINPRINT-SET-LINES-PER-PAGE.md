### WINPRINT-SET-LINES-PER-PAGE

The WINPRINT-SET-LINES-PER-PAGE function changes the number of printable lines per page. The lines per page currently available can be retrieved with the [WINPRINT-GET-PAGE-LAYOUT](./WINPRINT-GET-PAGE-LAYOUT) function. Note that character size is not changed, this function only changes the line spacing.

#### Syntax:

```cobol
 CALL "WIN$PRINTER" USING WINPRINT-SET-LINES-PER-PAGE
                          WINPRINT-DATA
                   GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WINPRINT-SET-LINES-PER-PAGE | Constant |  |
| WINPRINT-DATA | Group Item | Structure that contains the information to be passed to the function. This group item, defined in [isprint.def](../../Copybooks/isprint.def), has the following structure:<br>Note - members not mentioned below are not used by this function.<br>*wprtdata-lines-per-page*<br>Specifies the number of lines per page. |

#### Return code:

returnCode can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| WPRTERR-UNSUPPORTED | The WIN$PRINTER library routine is not supported. |
| WPRTERR-BAD-ARG | The WIN$PRINTER library routine has been called with bad parameters. |
