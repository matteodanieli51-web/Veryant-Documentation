### WPALETTE-GET-COLOR

The WPALETTE-GET-COLOR function retrieves the RGB color associated to a COBOL color attribute.

#### Syntax:

```cobol
 CALL "W$PALETTE" USING WPALETTE-GET-COLOR
                        WPALETTE-DATA
                 GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WPALETTE-GET-COLOR | Constant |  |
| *WPALETTE-DATA* | Group Item | Group item that specifies the COBOL color attribute the function refers to and receives the corresponding RGB color. This group item, defined in [ispalette.def](../../Copybooks/ispalette.def), has the following structure:<br>It must be set to the COBOL color attribute before calling the function. It must range from 1 to 16.<br>Not used.<br>Receives the red component of the color associated to the COBOL color attribute. It may range from 0 to 255.<br>Not used.<br>Receives the green component of the color associated to the COBOL color attribute. It may range from 0 to 255.<br>Receives the blue component of the color associated to the COBOL color attribute. It may range from 0 to 255. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| WPERR-UNSUPPORTED | The W$PALETTE library routine is not supported. wpaletteData is not updated. |
| WPERR-BAD-ARG | The function has received incorrect parameters. wpaletteData is not updated. |
