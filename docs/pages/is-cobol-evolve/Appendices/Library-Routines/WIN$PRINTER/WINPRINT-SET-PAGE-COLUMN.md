### WINPRINT-SET-PAGE-COLUMN

The WINPRINT-SET-PAGE-COLUMN function defines a column in a page. When a page is divided into columns the program can use a single [WRITE](../../../Language-Reference/Procedure-Division-Statements/WRITE) statement to print the content of all columns at a time. The content of the print buffer is placed into columns according to the settings defined with the [WINPRINT-SET-DATA-COLUMNS](./WINPRINT-SET-DATA-COLUMNS) function. This function must be called repeatedly specifying one column configuration at a time. Each time this function is called, it adds the column configuration passed to a list. To clear that list, use the [WINPRINT-CLEAR-PAGE-COLUMNS](./WINPRINT-CLEAR-PAGE-COLUMNS) function.

#### Syntax:

```cobol
 CALL "WIN$PRINTER" USING WINPRINT-SET-PAGE-COLUMN
                          winprintColumn
                   GIVING returnCode
```

#### Parameters:

|  |  |  |  |
| --- | --- | --- | --- |
| WINPRINT-SET-PAGE-COLUMN | Constant |  |  |
| WINPRINT-DATA | Group Item | Structure that contains the information to be passed to the function. This group item, defined in [isprint.def](../../Copybooks/isprint.def), has the following structure: |  |
|  |  | 01  winprint-column.    03 winprint-col-start      pic 9(7)v99 comp-5.    03 winprint-col-indent     pic 9(7)v99 comp-5.    03 winprint-col-separation pic 9(7)v99 comp-5.    03 winprint-col-font       handle of font.    03 winprint-col-units      pic 99 comp-x.    03 winprint-col-alignment  pic x.    03 winprint-transparency   pic 99 comp-x.       88 winprint-transparent value 1, false 0. |  |
|  |  | *winprint-col-start*<br>It defines the starting position of the column. The starting position of a column determines the ending position of the previous one. The last column extends to the right page margin. Text not fitting the column space will be truncated. |  |
|  |  | *winprint-col-indent*<br>It defines the amount of blank space to be left between the starting position of the column and the printed text. |  |
|  |  | *winprint-col-separation*<br>It defines the amount of blank space to be left between printed text and the ending position of the column. |  |
|  |  | *winprint-col-font*<br>Specifies the font handle to be used to print the column content. |  |
|  |  | *winprint-col-units*<br>Specifies the unit of measure of winprint-col-start, winprint-col-indent and winprint-col-separation. Valid values are: |  |
|  |  | WPRTUNITS-CELLS | Values are expressed in cells. |
|  |  | WPRTUNITS-INCHES | Values are expressed in inches. |
|  |  | WPRTUNITS-CENTIMETERS | Values are expressed in centimeters. |
|  |  | WPRTUNITS-PIXELS | Values are expressed in pixels. |
|  |  | *winprint-col-alignment*<br>Specifies the alignment of the text in the column being defined. Valid values are: |  |
|  |  | WPRTALIGN-NONE | No alignment. Leading spaces are kept. |
|  |  | WPRTALIGN-LEFT | Left alignment. Leading spaces are removed. |
|  |  | WPRTALIGN-RIGHT | Right alignment. Trailing spaces are removed. |
|  |  | WPRTALIGN-CENTER | Centered. Leading and trailing spaces are removed. |
|  |  | WPRTALIGN-DECIMAL | Right alignment on the decimal point. Trailing spaces are removed. |
|  |  | WPRTALIGN-DECIMAL-SUPPRESS | Right alignment on the decimal point. The decimal point character is not printed, a space is printed, instead. Trailing spaces are removed. |
|  |  | WPRTALIGN-RIGHT-SIGN | Right alignment. A certain amount of space is left on the right side to accommodate the sign symbol. Trailing spaces are removed. |
|  |  | *winprint-transparency*<br>Specifies the transparency of the text background.<br>When the winprint-transparent condition is set to true, the column is transparent.<br>When the winprint-transparent condition is set to false, the column is not transparent.<br>If no columns are defined or a column is not transparent, the text background is white, not transparent. This means that when the program prints several buffers on the same line, with the NO ADVANCING phrase of the [WRITE](../../../Language-Reference/Procedure-Division-Statements/WRITE) statement, the space characters in the buffer cover the text previously printed at the same location. This did not happen on dot-matrix printers. To avoid this behavior, set the column transparent. |  |

#### Return code:

returnCode can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| WPRTERR-UNSUPPORTED | The WIN$PRINTER library routine is not supported. |
| WPRTERR-BAD-ARG | The WIN$PRINTER library routine has been called with bad parameters. |
