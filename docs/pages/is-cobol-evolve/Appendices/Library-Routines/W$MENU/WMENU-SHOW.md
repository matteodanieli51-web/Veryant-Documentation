### WMENU-SHOW

The WMENU-SHOW function displays a menu.

If the menu was created by WMENU-NEW, it is displayed on the screen. If the window has already a menu, it is replaced. The previous menu is not destroyed, its memory is not released and it can be displayed again with the WMENU-SHOW function.

If the menu was created by WMENU-NEW-TRAY, it is displayed as a tray icon in the system tray.

#### Syntax:

```cobol
 CALL "W$MENU" USING WMENU-SHOW
                     menuHandle
                    [windowHandle]
              GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WMENU-SHOW | Constant |  |
| *menuHandle* | USAGE HANDLE | Specifies the handle of an existing menu.<br>Setting this parameter to 0 removes the menu. |
| *windowHandle* | USAGE HANDLE | Specifies the window where the menu has to be displayed. If this parameter is omitted then the menu is displayed on the current window. This parameter is ignored when the menu is shown on the system tray. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| <=0 | Operation failed. |
| >0 | Operation successful. |
