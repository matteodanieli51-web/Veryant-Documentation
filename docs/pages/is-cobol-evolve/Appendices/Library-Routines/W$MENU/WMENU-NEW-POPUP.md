### WMENU-NEW-POPUP

The WMENU-NEW-POPUP function creates a new empty pop-up menu.

The optional parameters implement a scroll feature, which is useful for long menus to avoid displaying them past the edge of the screen. The number of items to fill the vertical space is calculated according to the text of menu items, so if bitmaps are involved the calcualtions may not be accurate.

#### Syntax:

```cobol
 CALL "W$MENU" USING WMENU-NEW-POPUP
                    [scrollItems]
                    [fixedTopItems]
                    [fixedBottomItems]
                    [scrollingInterval]
              GIVING menuHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WMENU-NEW-POPUP | Constant |  |
| *scrollItems* | PIC 9(n) | Specifies the number of items in the middle with up/down arrows to scroll. If omitted, the scroll feature will not be available. |
| *fixedTopItems* | PIC 9(n) | Specifies the number of items at the top that must be always visible. If omitted, 0 is assumed. |
| *fixedBottomItems* | PIC 9(n) | Specifies the number of items at the bottom that must be always visible. If omitted, 0 is assumed. |
| *scrollingInterval* | PIC 9(n) | Specifies the number of milliseconds used to scroll items. If omitted, the system default is used. |

#### Return code:

*menuHandle* must be an USAGE HANDLE data item and provides additional information:

|  |  |
| --- | --- |
| <=0 | Operation failed. |
| >0 | Receives the handle to the newly created menu. |
