### WINPRINT-SET-MARGINS

The WINPRINT-SET-MARGINS function changes the page margins. Margins are applied at the close of the print file and affect all the pages of the print job. If this function is called multiple times within the same print job, only margins set by the last call are considered.

#### Syntax:

```cobol
 CALL "WIN$PRINTER" USING WINPRINT-SET-MARGINS
                          WINPRINT-DATA
                   GIVING returnCode
```

#### Parameters:

|  |  |  |  |
| --- | --- | --- | --- |
| WINPRINT-SET-MARGINS | Constant |  |  |
| WINPRINT-DATA | Group Item | Structure that contains the information to be passed to the function. This group item, defined in [isprint.def](../../Copybooks/isprint.def), has the following structure: |  |
|  |  | 01  winprint-data.    03 wprtdata-margins.       05 wprtdata-top-margin       pic 9(7)v99 comp-5.       05 wprtdata-bottom-margin    pic 9(7)v99 comp-5.       05 wprtdata-left-margin      pic 9(7)v99 comp-5.       05 wprtdata-right-margin     pic 9(7)v99 comp-5.       05 wprtdata-margin-units     unsigned-short. |  |
|  |  | *wprtdata-top-margin*<br>Specifies the top margin. |  |
|  |  | *wprtdata-bottom-margin*<br>Specifies the bottom margin. |  |
|  |  | *wprtdata-left-margin*<br>Specifies the left margin. |  |
|  |  | *wprtdata-right-margin*<br>Specifies the right margin. |  |
|  |  | *wprtdata-margin-units*<br>Specifies the unit of measure of the margins. Valid values are: |  |
|  |  | WPRTMARGIN-DEFAULT-MARGINS | The function resets the default printer margins. Other members are ignored. |
|  |  | WPRTMARGIN-INCHES | Margins are expressed in inches. |
|  |  | WPRTMARGIN-CENTIMETERS | Margins are expressed in centimeters. |

#### Return code:

returnCode can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| WPRTERR-UNSUPPORTED | The WIN$PRINTER library routine is not supported. |
| WPRTERR-BAD-ARG | The WIN$PRINTER library routine has been called with bad parameters. |
