### WINPRINT-SET-CURSOR

The WINPRINT-SET-CURSOR function changes the cursor position in the current report page.

The subsequent [WRITE](../../../Language-Reference/Procedure-Division-Statements/WRITE) statement must specify the WITH NO CONTROL clause.

#### Syntax:

```cobol
 CALL "WIN$PRINTER" USING WINPRINT-SET-CURSOR
                          WINPRINT-DATA
                   GIVING returnCode
```

#### Parameters:

|  |  |  |  |
| --- | --- | --- | --- |
| WINPRINT-SET-CURSOR | Constant |  |  |
| WINPRINT-DATA | Group Item | Structure that contains the cursor position to be set and returns the previous cursor position. This group item, defined in [isprint.def](../../Copybooks/isprint.def), has the following structure: |  |
|  |  | 01  winprint-data.    03 wprtdata-draw.       05 wprtdata-draw-start-x     pic 9(7)v99 comp-5.       05 wprtdata-draw-start-y     pic 9(7)v99 comp-5.       05 wprtdata-draw-stop-x      pic 9(7)v99 comp-5.       05 wprtdata-draw-stop-y      pic 9(7)v99 comp-5.       05 wprtdata-draw-units       unsigned-short.       05 wprtdata-draw-shape       unsigned-short. |  |
|  |  | *wprtdata-draw-start-x*<br>Specifies the horizontal coordinate of the cursor location. The position refers to the physical left margin. |  |
|  |  | *wprtdata-draw-start-y*<br>Specifies the vertical coordinate of the cursor location. The position refers to the physical top margin. |  |
|  |  | *wprtdata-draw-stop-x*<br>Returns the horizontal coordinate of the current cursor location. The position refers to the physical left margin. |  |
|  |  | *wprtdata-draw-stop-y*<br>Returns the vertical coordinate of the current cursor location. The position refers to the physical top margin. |  |
|  |  | *wprtdata-draw-units*<br>Specifies the unit of measure for the coordinates. Valid values are: |  |
|  |  | WPRTUNITS-CELLS | Values are expressed in cells. |
|  |  | WPRTUNITS-INCHES | Values are expressed in inches. |
|  |  | WPRTUNITS-CENTIMETERS | Values are expressed in centimeters. |
|  |  | WPRTUNITS-PIXELS | Values are expressed in pixels. |
|  |  | *wprtdata-draw-shape*<br>It is a flag that specifies if the cursor position must be changed or not.<br>When it is set to zero, the function will change the cursor position.<br>When it is set to a non-zero value, the function will not change the cursor position, but it will return the cursor position set by the previous call to this function, or zero if the function has never been called before. |  |

#### Return code:

returnCode can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| WPRTERR-UNSUPPORTED | The WIN$PRINTER library routine is not supported. |
| WPRTERR-BAD-ARG | The WIN$PRINTER library routine has been called with bad parameters. |
