### WINPRINT-GRAPH-DRAW

The WINPRINT-GRAPH-DRAW function draws a line or a box. Shapes are drawn using the current pen and brush settings. Use the [WINPRINT-GRAPH-BRUSH](./WINPRINT-GRAPH-BRUSH) and [WINPRINT-GRAPH-PEN](./WINPRINT-GRAPH-PEN) functions to change them.

#### Syntax:

```cobol
 CALL "WIN$PRINTER" USING WINPRINT-GRAPH-DRAW
                          WINPRINT-DATA
                   GIVING returnCode
```

#### Parameters:

|  |  |  |  |
| --- | --- | --- | --- |
| WINPRINT-GRAPH-DRAW | Constant |  |  |
| WINPRINT-DATA | Group Item | Structure that contains the information to be passed to the function. This group item, defined in [isprint.def](../../Copybooks/isprint.def), has the following structure: |  |
|  |  | 01  winprint-data.    03 wprtdata-draw.       05 wprtdata-draw-start-x     pic 9(7)v99 comp-5.       05 wprtdata-draw-start-y     pic 9(7)v99 comp-5.       05 wprtdata-draw-stop-x      pic 9(7)v99 comp-5.       05 wprtdata-draw-stop-y      pic 9(7)v99 comp-5.       05 wprtdata-draw-units       unsigned-short.       05 wprtdata-draw-shape       unsigned-short. |  |
|  |  | *wprtdata-draw-start-x*<br>Specifies the horizontal coordinate of the top-left corner of the shape. The position refers to the physical left margin. |  |
|  |  | *wprtdata-draw-start-y*<br>Specifies the vertical coordinate of the top-left corner of the shape. The position refers to the physical top margin. |  |
|  |  | *wprtdata-draw-stop-x*<br>Specifies the horizontal coordinate of the lower-right corner of the shape. |  |
|  |  | *wprtdata-draw-stop-y*<br>Specifies the vertical coordinate of the lower-right corner of the shape. |  |
|  |  | *wprtdata-draw-units*<br>Specifies the unit of measure for the drawing coordinates. Valid values are: |  |
|  |  | WPRTUNITS-CELLS | Values are expressed in cells. |
|  |  | WPRTUNITS-INCHES | Values are expressed in inches. |
|  |  | WPRTUNITS-CENTIMETERS | Values are expressed in centimeters. |
|  |  | WPRTUNITS-PIXELS | Values are expressed in pixels. |
|  |  | *wprtdata-draw-shape*<br>Specifies the shape to be drawn. Valid values are: |  |
|  |  | WPRT-DRAW-RECTANGLE | Draws a rectangle with square corners. |
|  |  | WPRT-DRAW-ROUND-RECTANGLE | Draws a rectangle with rounded corners. |
|  |  | WPRT-DRAW-LINE | Draws a line. |

#### Return code:

returnCode can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| WPRTERR-UNSUPPORTED | The WIN$PRINTER library routine is not supported. |
| WPRTERR-BAD-ARG | The WIN$PRINTER library routine has been called with bad parameters. |
