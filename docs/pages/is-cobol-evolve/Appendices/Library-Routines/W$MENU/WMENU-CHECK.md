### WMENU-CHECK

The WMENU-CHECK function adds a check mark to a menu item.

The check icon can be customized by providing a custom GIF file as described in [Default icons](../../../User-Interface/Working-With-UI-and-Controls/Default-Icons).

#### Syntax:

```cobol
 CALL "W$MENU" USING WMENU-CHECK
                     menuHandle
                     ID
              GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WMENU-CHECK | Constant |  |
| *menuHandle* | USAGE HANDLE | Specifies the handle of an existing menu. |
| *ID* | any numeric data item or numeric literal | Specifies the menu entry to be checked. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| <=0 | Operation failed. |
| >0 | Operation successful. |
