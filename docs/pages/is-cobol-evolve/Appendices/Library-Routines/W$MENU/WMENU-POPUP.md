### WMENU-POPUP

The WMENU-POPUP function displays a pop-up menu. The menu is automatically removed after the user has selected an item from the menu. The user response is treated as if the user had chosen an item from the standard menu bar.

WMENU-POPUP is asynchronous and therefore it should be followed by an [ACCEPT](../../../Language-Reference/Procedure-Division-Statements/ACCEPT) statement that waits for user input in order to intercept user choice.

#### Syntax:

```cobol
 CALL "W$MENU" USING WMENU-POPUP
                     menuHandle
                    [row]
                    [column]
              GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WMENU-POPUP |  |  |
| *menuHandle* | USAGE HANDLE | This is a handle of an existing pop-up menu, created with the [WMENU-NEW-POPUP](./WMENU-NEW-POPUP) function. |
| *row* | any numeric data item or numeric literal | It represents, in pixels, the vertical position where the pop-up menu is displayed. If this parameter is omitted, the pop-up menu will appear at the mouse cursor's position. |
| *column* | any numeric data item or numeric literal | It represents, in pixels, the horizontal position where the pop-up menu is displayed. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| <=0 | Operation failed. |
| >0 | Operation successful. |
