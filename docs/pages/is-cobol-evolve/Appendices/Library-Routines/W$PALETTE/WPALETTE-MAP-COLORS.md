### WPALETTE-MAP-COLORS

The WPALETTE-MAP-COLORS function creates a mapping between RGB colors and their alternative versions. At runtime, whenever the system encounters a mapped RGB value, it automatically substitutes the specified alternative color.

#### Syntax:

```cobol
 CALL "W$PALETTE" USING WPALETTE-MAP-COLORS
                        WPALETTE-ORIGINAL-COLORS
                        WPALETTE-NEW-COLORS
                 GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WPALETTE-MAP-COLORS | Constant |  |
| *WPALETTE-ORIGINAL-COLORS* | Group Item | Group item defined in [ispalette.def](../../Copybooks/ispalette.def) as follows:<br>Decimal value of the Red component of the RGB. The value ranges from 0 to 255.<br>Decimal value of the Green component of the RGB. The value ranges from 0 to 255.<br>Decimal value of the Blue component of t he RGB. The value ranges from 0 to 255.<br>Every occurrence maps a new color. |
| *WPALETTE-NEW-COLORS* | Group Item | Group item defined in [ispalette.def](../../Copybooks/ispalette.def) as follows:<br>Decimal value of the Red component of the RGB. The value ranges from 0 to 255.<br>Decimal value of the Green component of the RGB. The value ranges from 0 to 255.<br>Decimal value of the Blue component of t he RGB. The value ranges from 0 to 255.<br>Every occurrence maps a new color. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| WPERR-UNSUPPORTED | The W$PALETTE library routine is not supported. |
| WPERR-BAD-ARG | The function has received incorrect parameters. |

#### Internal colors RGB values

When you map one RGB color to another, all equivalent color values (whether expressed in RGB or in non-RGB formats) are affected. For example, if you map the RGB value 255,0,0 to a different color, that new color will replace not only the RGB literal X#FF0000 but also the COBOL color value 12, since COBOL color 12 corresponds to the same RGB value (255,0,0).

The table below lists the COBOL color values along with their corresponding RGB equivalents.

| Color value | RGB for standard intensity | RGB for low intensity | RGB for high intensity |
| --- | --- | --- | --- |
| 0 | 0,0,0 | 0,0,0 | 128,128,128 |
| 1 | 0,0,128 | 0,0,128 | 0,0,255 |
| 2 | 0,128,0 | 0,128,0 | 0,255,0 |
| 3 | 0,128,128 | 0,128,128 | 0,255,255 |
| 4 | 128,0,0 | 128,0,0 | 255,0,0 |
| 5 | 128,0,128 | 128,0,128 | 255,0,255 |
| 6 | 128,128,0 | 128,128,0 | 255,255,0 |
| 7 | 192,192,192 | 192,192,192 | 255,255,255 |
| 8 | 128,128,128 | 128,128,128 | 128,128,128 |
| 9 | 0,0,255 | 0,0,255 | 0,0,255 |
| 10 | 0,255,0 | 0,255,0 | 0,255,0 |
| 11 | 0,255,255 | 0,255,255 | 0,255,255 |
| 12 | 255,0,0 | 255,0,0 | 255,0,0 |
| 13 | 255,0,255 | 255,0,255 | 255,0,255 |
| 14 | 255,255,0 | 255,255,0 | 255,255,0 |
| 15 | 255,255,255 | 255,255,255 | 255,255,255 |
