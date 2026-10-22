### WPALETTE-CHOOSE-COLOR

The WPALETTE-CHOOSE-COLOR function opens a dialog box that allows the user to pick a color.

#### Syntax:

```cobol
 CALL "W$PALETTE" USING WPALETTE-CHOOSE-COLOR
                        WPALETTE-DATA
                 GIVING returnCode
```

#### Parameters:

|  |  |  |  |
| --- | --- | --- | --- |
| WPALETTE-CHOOSE-COLOR | Constant |  |  |
| *WPALETTE-DATA* | Group Item | Group item that receives the user's selection. This group item, defined in [ispalette.def](../../Copybooks/ispalette.def), has the following structure: |  |
|  |  | 01  wpalette-data.    03 wpal-color-id            pic x comp-x.    03 wpal-flags       redefines wpal-color-id  pic x comp-x.    03 wpal-red                 pic x comp-x.    03 wpal-user-color-id       redefines wpal-red       pic x comp-x.    03 wpal-green               pic x comp-x.    03 wpal-blue                pic x comp-x. |  |
|  |  | Not used. |  |
|  |  | wpal-flags<br>Flags affecting the behavior of the dialog box. Possible values are: |  |
|  |  | wpchoose-use-default | The dialog box is initialized according to the RGB values set in wpaletteData. |
|  |  | wpal-redReceives the red component of the color chosen by the user. It may range from 0 to 255. |  |
|  |  | wpal-user-color-idNot used. |  |
|  |  | wpal-greenReceives the green component of the color chosen by the user. It may range from 0 to 255. |  |
|  |  | wpal-blueReceives the blue component of the color chosen by the user. It may range from 0 to 255. |  |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. wpaletteData receives the user's selection. |
| WPERR-UNSUPPORTED | The WPALETTE-CHOOSE-COLOR function is not supported. wpaletteData is not updated. |
| WPERR-BAD-ARG | The function has received incorrect parameters. wpaletteData is not updated. |
| WPERR-CANCELLED | The user has pressed the "Cancel" button. wpaletteData is not updated. |
