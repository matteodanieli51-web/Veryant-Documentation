### WMENU-DELETE-BITMAP

The WMENU-DELETE-BITMAP removes a bitmap from a menu item.

#### Syntax:

```cobol
 CALL "W$MENU" USING WMENU-DELETE-BITMAP
                     menuHandle
                     ID
              GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WMENU-DELETE-BITMAP | Constant |  |
| *menuHandle* | USAGE HANDLE | Specifies the handle of an existing menu. |
| *ID* | any numeric data item or numeric literal | Specifies the menu entry you want to delete a bitmap. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| <=0 | Operation failed. |
| >0 | Operation successful. |
