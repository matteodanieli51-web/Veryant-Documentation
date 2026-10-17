### WBITMAP-LOAD-SYMBOL-FONT-EX

The WBITMAP-LOAD-SYMBOL-FONT-EX function generates a bitmap strip from multiple combinations of font, color and text.

This is particularly useful to generate icons from symbol fonts like [Font Awesome](https://fontawesome.com/)or [Material Design Icons](https://materialdesignicons.com/ ).

In thin client environment the bitmap is generated on the server and it is sent to the client later, when the program uses it.

**Note -** the feature is certified for Java 1.8.0_251 or higher. Previous Java versions may generate a bitmap smaller than the requested width.

#### Syntax:

```cobol
 CALL "W$BITMAP" USING WBITMAP-LOAD-SYMBOL-FONT-EX
                       imageWidth
                       WBITMAP-LSF-DATA
                GIVING bitmapHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WBITMAP-LOAD-SYMBOL-FONT-EX | Constant |  |
| imageWidth | PIC 9(n) | Specifies the width in pixels of the bitmap frame. The function generates a frame for each character in the characters sequence and then combines all the frames into a bitmap strip. Regardless of the font size, characters will be resized to fit the width specified by this parameter. |
| WBITMAP-LSF-DATA | Group Item | Structure that hosts the information. This group item, defined in [isgui.def](../../Copybooks/isgui.def), has the following structure:<br>*wbitmap-lsf-font*<br>A font handle as returned by the [W$FONT](../W$FONT/W$FONT) routine or one of the internal fonts available in the runtime (e.g. SMALL-FONT).<br>*wbitmap-lsf-characters*<br>Specifies the list of characters that will be included in the bitmap strip. Use a national data item or literal if the font requires Unicode representation of the characters.<br>*wbitmap-lsf-color*<br>Specifies the color of the characters. A negative value is treated as RGB color while a positive value is treated as COBOL color. See [Color management](../../../User-Interface/Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management) for more information. If not set, then the black color is used. |

#### Return code:

*bitmapHandle* must be declared as PIC S9(9) COMP-4 and provides additional information:

|  |  |
| --- | --- |
| > 0 | Receives the handle to the bitmap |
| 0 | An error occurred, probably the font handle is invalid or an empty string of characters was passed |
