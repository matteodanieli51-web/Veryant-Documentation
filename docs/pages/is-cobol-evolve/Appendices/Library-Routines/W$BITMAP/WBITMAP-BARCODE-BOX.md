### WBITMAP-BARCODE-BOX

The WBITMAP-BARCODE-BOX function generates an image representing a barcode. Various barcode types are supported.

#### Syntax:

```cobol
 CALL "W$BITMAP" USING WBITMAP-BARCODE-BOX
                       text
                       WBITMAP-BB-DATA
                      [errorDesc]
                GIVING bitmapHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WBITMAP-LOAD-SYMBOL-FONT-EX | Constant |  |
| text | PIC x(n) | Specifies the text associated with the barcode. |
| WBITMAP-BB-DATA | Group Item | Structure that hosts the information. This group item, defined in [isgui.def](../../Copybooks/isgui.def), has the following structure:<br>*wbitmap-bb-width*<br>Specifies the barcode box width in pixels.<br>Be sure to specify a reasonable width to obtain a readable barcode.<br>This value might be altered by the routine to maintain the aspect ratio in the current barcode type.<br>*wbitmap-bb-height*<br>Specifies the barcode box height in pixels.<br>Be sure to specify a reasonable height to obtain a readable barcode.<br>This value might be altered by the routine to maintain the aspect ratio in the current barcode type.<br>*wbitmap-bb-type*<br>Specifies the barcode type.<br>*wbitmap-bb-dpi*<br>Specifies the image DPI.<br>When set to zero, the current DPI in the system is used.<br>*wbitmap-bb-orientation*<br>Specifies the image orientation. |
|  |  | *wbitmap-bb-antialiasing*<br>Enables or disables antialiasing.<br>*wbitmap-bb-text-position*<br>Specifies the text position for those barcode types where text can be shown. When set to zero, the text is not shown.<br>*wbitmap-bb-use-custom-color*<br>Specifies whether or not use a custom color for the barcode. By default, barcodes use a black foreground and a white background.<br>*wbitmap-bb-fg-color*<br>Specifies a custom foreground color for the barcode. See "[Color management](../../../User-Interface/Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details. Be sure to specify a reasonable color to obtain a readable barcode; brightest colors make the barcode more difficult to be read.<br>*wbitmap-bb-bg-color*<br>Specifies a custom background color for the barcode. See "[Color management](../../../User-Interface/Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details. Be sure to specify a reasonable color to obtain a readable barcode; low contrast between foreground and background makes the barcode more difficult to be read.<br>*wbitmap-bb-logo-image*<br>When set to a value different than zero, it specifies a custom logo image to be displayed in the center of the barcode. The value of this property is a bitmap handle obtained by calling the [WBITMAP-LOAD](./WBITMAP-LOAD) function. The logo is applicable only to QR barcodes. No resizing is performed, so be sure to use reasonable logo dimensions to avoid covering important barcode data. |
| errorDesc | PIC X(n) | Optional parameter.<br>Receives the error description if the barcode generation fails. |

#### Return code:

*bitmapHandle* must be declared as PIC S9(9) COMP-4 and provides additional information:

|  |  |
| --- | --- |
| > 0 | Receives the handle to the bitmap |
| 0 | An error occurred, the error description is stored in the *errDesc* parameter, if passed |
