### WINPRINT-SET-CUSTOM-PAPER

The WINPRINT-SET-CUSTOM-PAPER function defines the paper dimensions.

The requested paper size must be supported by the printer (e.g. it must be available among the paper sizes offered by that printer). If the requested paper size is not supported by the current printer and the paperHeight parameter is greater or equal than the paperWidth parameter, the custom size will be used later if the program prints to PDF (e.g. if the print file name starts with "-P PDF"); in this case the function returns -7 (WPRTERR-DEVICE-INCAPABLE) instead of -1 (WPRTERR-BAD-ARG)

#### Syntax:

```cobol
 CALL "WIN$PRINTER" USING WINPRINT-SET-CUSTOM-PAPER
                          paperWidth
                          paperHeight
                          units
                   GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WINPRINT-SET-CUSTOM-PAPER | Constant |  |
| paperWidth | any numeric data item or numeric literal | Specifies the paper width. |
| paperHeight | any numeric data item or numeric literal | Specifies the paper height. |
| units | any numeric data item or numeric literal | Specifies the measurement unit for the *paperWidth* and *paperHeight* values.<br>Valid values are 1 (inches) and 2 (centimeters). The constants WPRTUNITS-INCHES and WPRTUNITS-CENTIMETERS defined in [isprint.def](../../Copybooks/isprint.def) can be used. |

#### Return code:

returnCode can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| WPRTERR-UNSUPPORTED | The WIN$PRINTER library routine is not supported. |
| WPRTERR-BAD-ARG | The WIN$PRINTER library routine has been called with bad parameters or the requested paper size was not available in the current printer. |
| WPRTERR-DEVICE-INCAPABLE | The requested paper size was not available in the current printer, but since paperHeight is equal or greater than paperWidth, the requested paper size can be used for the next prints to PDF. |
