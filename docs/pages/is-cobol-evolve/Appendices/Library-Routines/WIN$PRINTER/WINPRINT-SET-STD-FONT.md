### WINPRINT-SET-STD-FONT

The WINPRINT-SET-STD-FONT function selects one of the pre-defined fonts to be used by the subsequent [WRITE](../../../Language-Reference/Procedure-Division-Statements/WRITE) statements.

A printer is required for this function to work correctly.

The WINPRINT-SET-STD-FONT function scales the font until 132 characters can fit the current printable area. Changing the printable area after this operation may invalidate the printer output, so this function should never be called before [WINPRINT-SET-PRINTER](./WINPRINT-SET-PRINTER), [WINPRINT-SET-PRINTER-EX](./WINPRINT-SET-PRINTER-EX) and [WINPRINT-SET-MARGINS](./WINPRINT-SET-MARGINS)

#### Syntax:

```cobol
 CALL "WIN$PRINTER" USING WINPRINT-SET-STD-FONT
                          WINPRINT-DATA
                   GIVING returnCode
```

#### Parameters:

|  |  |  |  |
| --- | --- | --- | --- |
| WINPRINT-SET-STD-FONT | Constant |  |  |
| WINPRINT-DATA | Group Item | Structure that contains the information to be passed to the function. This group item, defined in [isprint.def](../../Copybooks/isprint.def), has the following structure: |  |
|  |  | 01  winprint-data.    03 wprtdata-set-std-font.       05 wprtdata-std-font         pic x comp-x.       05 filler                    pic x(21). |  |
|  |  | *wprtdata-std-font*<br>Specifies the font to be used by the subsequent [WRITE](../../../Language-Reference/Procedure-Division-Statements/WRITE) statements. Valid values are: |  |
|  |  | WPRTFONT-DEFAULT | Is the default printer font. |
|  |  | WPRTFONT-COURIER-12 | It uses a 12-point TrueType Courier font. |
|  |  | WPRTFONT-COURIER-12-COMP | It uses a 12-point TrueType Courier font and rescales it so that at least 132 columns of print will fit on a page. |
|  |  | WPRTFONT-COURIER-10 | It uses a 10-point TrueType Courier font. |
|  |  | WPRTFONT-COURIER-10-COMP | It uses a 10-point TrueType Courier font and rescales it so that at least 132 columns of print will fit on a page. |

#### Return code:

returnCode can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| WPRTERR-UNSUPPORTED | The WIN$PRINTER library routine is not supported. |
| WPRTERR-BAD-ARG | The WIN$PRINTER library routine has been called with bad parameters. |
