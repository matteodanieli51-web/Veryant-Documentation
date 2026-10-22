### WINPRINT-GRAPH-PEN

The WINPRINT-GRAPH-PEN function sets the appearance of the line used to draw the border of a shape before calling the [WINPRINT-GRAPH-DRAW](./WINPRINT-GRAPH-DRAW) function.

#### Syntax:

```cobol
 CALL "WIN$PRINTER" USING WINPRINT-GRAPH-PEN
                          WINPRINT-DATA
                   GIVING returnCode
```

#### Parameters:

|  |  |  |  |
| --- | --- | --- | --- |
| WINPRINT-GRAPH-PEN | Constant |  |  |
| WINPRINT-DATA | Group Item | Structure that contains the information to be passed to the function. This group item, defined in [isprint.def](../../Copybooks/isprint.def), has the following structure: |  |
|  |  | 01  winprint-data.    03 wprtdata-pen.       05 wprtdata-pen-style        unsigned-short.       05 wprtdata-pen-width        unsigned-short.       05 wprtdata-pen-color        pic 9(9) comp-5. |  |
|  |  | *wprtdata-pen-style*<br>Specifies the line style. Valid values are: |  |
|  |  | WPRT-PEN-SOLID | A solid line is drawn. |
|  |  | WPRT-PEN-DASH | A dashed line is drawn (-------). |
|  |  | WPRT-PEN-DOT | A dotted line is drawn (.......). |
|  |  | WPRT-PEN-DASHDOT | A line composed of dashes and dots is drawn (-.-.-.-.) |
|  |  | WPRT-PEN-DASHDOTDOT | A line composed of one dash and two dots is drawn (-..-..-..) |
|  |  | WPRT-PEN-NULL | The line is not visible. Background stays visible. |
|  |  | WPRT-PEN-INSIDEFRAME | A solid line is drawn inside the area of the shape. |
|  |  | *wprtdata-pen-width*<br>Specifies, in pixels, the width of the line. Note that actual pixel size depends on the printer resolution. |  |
|  |  | *wprtdata-pen-color*<br>Specifies RGB color of the line in the following hexadecimal form: 0x00BBGGRR. |  |

#### Return code:

returnCode can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| WPRTERR-UNSUPPORTED | The WIN$PRINTER library routine is not supported. |
| WPRTERR-BAD-ARG | The WIN$PRINTER library routine has been called with bad parameters. |
