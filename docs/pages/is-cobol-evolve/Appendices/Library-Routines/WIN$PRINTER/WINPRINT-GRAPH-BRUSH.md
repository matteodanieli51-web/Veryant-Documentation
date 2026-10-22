### WINPRINT-GRAPH-BRUSH

The WINPRINT-GRAPH-BRUSH function sets a pattern and a color to fill an area before calling the [WINPRINT-GRAPH-DRAW](./WINPRINT-GRAPH-DRAW) function.

#### Syntax:

```cobol
 CALL "WIN$PRINTER" USING WINPRINT-GRAPH-BRUSH
                          WINPRINT-DATA
                   GIVING returnCode
```

#### Parameters:

|  |  |  |  |
| --- | --- | --- | --- |
| WINPRINT-GRAPH-BRUSH | Constant |  |  |
| WINPRINT-DATA | Group Item | Structure that contains the information to be passed to the function. This group item, defined in [isprint.def](../../Copybooks/isprint.def), has the following structure: |  |
|  |  | 01  winprint-data.    03 wprtdata-brush.       05 wprtdata-brush-style      unsigned-short.       05 wprtdata-brush-color      pic 9(9) comp-5. |  |
|  |  | *wprtdata-brush-style*<br>Specifies the pattern type used to fill an area. Valid values are: |  |
|  |  | WPRT-BRUSH-SOLID | It defines a solid pattern. As a result, the area will be filled with the color defines in wprtdata-brush-color. |
|  |  | WPRT-BRUSH-NULL | No patter is defined and the area will appear transparent. |
|  |  | WPRT-BRUSH-BDIAGONAL | It defines a pattern of 45 degrees angled lines (//////). |
|  |  | WPRT-BRUSH-CROSS | It defines a pattern of crosses (++++++). |
|  |  | WPRT-BRUSH-DIAGCROSS | It defines a pattern of diagonal crosses (xxxxxxx). |
|  |  | WPRT-BRUSH-FDIAGONAL | It defines a pattern of 315 degrees angled lines (\\\\\\\\). |
|  |  | WPRT-BRUSH-HORIZONTAL | It defines a pattern of horizontal dashes (--------). |
|  |  | WPRT-BRUSH-VERTICAL | It defines a pattern of vertical bars (\|\|\|\|\|\|\|\|\|\|). |
|  |  | WPRT-BRUSH-DKGRAY | Colors the area with dark gray. |
|  |  | WPRT-BRUSH-GRAY | Colors the area with gray. |
|  |  | WPRT-BRUSH-LTGRAY | Colors the area with light gray. |
|  |  | *wprtdata-brush-color*<br>Specifies the RGB color used to fill the area in the following hexadecimal form: 0x00BBGGRR. |  |

#### Return code:

returnCode can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| WPRTERR-UNSUPPORTED | The WIN$PRINTER library routine is not supported. |
| WPRTERR-BAD-ARG | The WIN$PRINTER library routine has been called with bad parameters. |
