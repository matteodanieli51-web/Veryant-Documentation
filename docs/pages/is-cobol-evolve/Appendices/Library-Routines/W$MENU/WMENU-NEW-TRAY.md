### WMENU-NEW-TRAY

The WMENU-NEW-TRAY function creates a new empty menu for the system tray.

The menu is shown when you right click on the tray icon. Clicking with the left mouse button, instead, produces an exception that can be intercepted by the program in the CRT STATUS, same as clicking on the menu items.

#### Syntax:

```cobol
 CALL "W$MENU" USING WMENU-NEW-TRAY
                     text
                     ID
                     ID2
                    [bitmapHandle]
                    [bitmapNumber]
                    [bitmapWidth]
              GIVING menuHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WMENU-NEW-TRAY | Constant |  |
| *text* | PIC X(n) | Specifies the content of the tool-tip shown when the user leaves the mouse pointer over the tray icon. |
| *ID* | PIC 9(n) | Specifies the exception value returned upon a single click on the tray icon. If zero, no exception is returned. |
| *ID2* | PIC 9(n) | Specifies the exception value returned upon a double click on the tray icon. If zero, no exception is returned. |
| *bitmapHandle* | PIC S9(9) COMP-4 | Specifies the bitmap image shown as tray icon. If this parameter is omitted, then the isCOBOL logo is shown as tray icon. |
| *bitmapNumber* | PIC 9(n) | Specifies which bitmap (among the ones in the bitmap strip referenced by *bitmap-Handle*) is to be displayed in the item identified by the Item property. |
| *bitmapWidth* | PIC 9(n) | This property identifies the width in pixels of the image displayed as tray icon. The bitmap strip identified by the *bitmapHandle* property is divided into several smaller images. The width of each image is the value assigned to this property. |

#### Return code:

*menuHandle* must be an USAGE HANDLE data item and provides additional information:

|  |  |
| --- | --- |
| <=0 | Operation failed. |
| >0 | Receives the handle to the newly created menu. |
