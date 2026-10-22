### WBITMAP-TEXT-BOX

The WBITMAP-TEXT-BOX function generates round or square shapes with text inside.

In thin client environment the bitmap is generated on the server and it is sent to the client later, when the program uses it.

**Note -** the feature is certified for Java 1.8.0_251 or higher. Previous Java versions may generate a bitmap smaller than the requested width.

#### Syntax:

```cobol
 CALL "W$BITMAP" USING WBITMAP-TEXT-BOX
                       text
                       WBITMAP-TB-DATA
                GIVING bitmapHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WBITMAP-TEXT-BOX | Constant |  |
| text | PIC X(n) | Specifies the text to be shown in the shape. Leading and trailing spaces, if any, are not considered.<br>Line feed characters cause the text to be split across multiple lines. |
| WBITMAP-TB-DATA | Group Item | Structure that hosts the information. This group item, defined in [isgui.def](../../Copybooks/isgui.def), has the following structure:<br>*wbitmap-tb-shape*<br>Specifies the shape of the area that surrounds the text. It can be either a circle (0) or a square (1).<br>*wbitmap-tb-font*<br>A font handle as returned by the [W$FONT](../W$FONT/W$FONT) routine or one of the internal fonts available in the runtime (e.g. SMALL-FONT).<br>*wbitmap-tb-width*<br>Specifies the width and the height of the shape, expressed in pixels.<br>*wbitmap-text-color*<br>Specifies the color of the characters. A negative value is treated as RGB color while a positive value is treated as COBOL color. See [Color management](../../../User-Interface/Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management) for more information. If not set, then the black color is used.<br>*wbitmap-bg-color*<br>Specifies the first gradient color. Considered when *wbitmap-grd-or* is greater than -1. A negative value is treated as RGB color while a positive value is treated as COBOL color. See [Color management](../../../User-Interface/Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management) for more information. If not set, then the black color is used.<br>*wbitmap-grd-or*<br>Specifies the gradient orientation. Valid values are:<br>-1 - No gradient (default)<br>0 - North to South<br>1 - Northeast to Southwest<br>2 - East to West<br>3 - Southeast to Northwest<br>4 - South to North<br>5 -Southwest to Northeast<br>6 - West to East<br>7 - Northwest to Southeast<br>*wbitmap-tb-bg2-color*<br>Specifies the second gradient color. Considered when *wbitmap-grd-or* is greater than -1. A negative value is treated as RGB color while a positive value is treated as COBOL color. See [Color management](../../../User-Interface/Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management) for more information. If not set, then the black color is used. |

#### Return code:

*bitmapHandle* must be declared as PIC S9(9) COMP-4 and provides additional information:

|  |  |
| --- | --- |
| > 0 | Receives the handle to the bitmap |
| 0 | An error occurred, probably the font handle is invalid or an empty string of characters was passed |
