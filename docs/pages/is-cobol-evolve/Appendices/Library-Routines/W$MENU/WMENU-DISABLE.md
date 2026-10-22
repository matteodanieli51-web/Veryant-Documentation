### WMENU-DISABLE

The WMENU-DISABLE function disables a menu item or the entire menu. Users cannot select disabled menu items.

#### Syntax:

```cobol
 CALL "W$MENU" USING WMENU-DISABLE
                     menuHandle
                    [ID]
              GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WMENU-DISABLE | Constant |  |
| *menuHandle* | USAGE HANDLE | Specifies the handle of an existing menu. |
| *ID* | any numeric data item or numeric literal | Specifies the menu entry to be disabled. If this parameter is omitted, the entire menu is disabled. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| <=0 | Operation failed. |
| >0 | Operation successful. |
