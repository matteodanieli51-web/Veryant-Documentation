### WMENU-ENABLE

The WMENU-ENABLE function enables a menu item or the entire menu.

#### Syntax:

```cobol
 CALL "W$MENU" USING WMENU-ENABLE
                     menuHandle
                    [ID]
              GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WMENU-ENABLE | Constant |  |
| *menuHandle* | USAGE HANDLE | Specifies the handle of an existing menu. |
| *ID* | any numeric data item or numeric literal | Specifies the menu entry to be enabled. If this parameter is omitted then the entire menu is enabled. |

#### Return code:

returnCode can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| <=0 | Operation failed. |
| >0 | Operation successful. |
