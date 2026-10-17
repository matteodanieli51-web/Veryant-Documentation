### WMENU-DELETE

The WMENU-DELETE function deletes a menu item. If the item to be deleted refers to a submenu, that submenu is destroyed.

#### Syntax:

```cobol
 CALL "W$MENU" USING WMENU-DELETE
                     menuHandle
                     ID
              GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WMENU-DELETE | Constant |  |
| *menuHandle* | USAGE HANDLE | Specifies the handle of an existing menu. |
| *ID* | any numeric data item or numeric literal | Specifies the menu entry to be deleted. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| <=0 | Operation failed. |
| >0 | Operation successful. |
