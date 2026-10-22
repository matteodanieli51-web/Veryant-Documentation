### WPALETTE-SET-COLOR

The WPALETTE-SET-COLOR function associates an RGB color to a COBOL color attribute.

#### Syntax:

```cobol
 CALL "W$PALETTE" USING WPALETTE-SET-COLOR
                        WPALETTE-DATA
                 GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WPALETTE-SET-COLOR | Constant |  |
| *WPALETTE-DATA* | Group Item | Group item that specifies the COBOL color attribute the function refers and the RGB color that it will be associated to. This group item, defined in [ispalette.def](../../Copybooks/ispalette.def), has the following structure:<br>It must be set to the COBOL color attribute before calling the function. It must range from 1 to 16.<br>Not used. |
|  |  | Specifies the red component of the color to be associated to the COBOL color attribute. It may range from 0 to 255.<br>Not used.<br>Specifies the green component of the color to be associated to the COBOL color attribute. It may range from 0 to 255.<br>Specifies the blue component of the color to be associated to the COBOL color attribute. It may range from 0 to 255. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| WPERR-UNSUPPORTED | The W$PALETTE library routine is not supported. |
| WPERR-BAD-ARG | The function has received incorrect parameters. |
