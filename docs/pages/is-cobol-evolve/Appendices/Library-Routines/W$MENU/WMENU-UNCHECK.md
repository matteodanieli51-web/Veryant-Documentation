### WMENU-UNCHECK

The WMENU-UNCHECK function removes the check mark from a menu item.

#### Syntax:

```cobol
 CALL "W$MENU" USING WMENU-UNCHECK
                     menuHandle
                     ID
              GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WMENU-UNCHECK | Constant |  |
| *menuHandle* | USAGE HANDLE | Specifies the handle of an existing menu. |
| *ID* | any numeric data item or numeric literal | Specifies the menu entry to be unchecked. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| <=0 | Operation failed. |
| >0 | Operation successful. |
