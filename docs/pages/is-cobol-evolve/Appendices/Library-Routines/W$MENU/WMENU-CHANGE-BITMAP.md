### WMENU-CHANGE-BITMAP

The WMENU-CHANGE-BITMAP function changes the bitmap in a menu item.

#### Syntax:

```cobol
 CALL "W$MENU" USING WMENU-CHANGE-BITMAP
                     menuHandle
                     ID
                     bitmapHandle
                    [bitmapNumber]
                    [bitmapSize]
              GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WMENU-CHANGE-BITMAP | Constant |  |
| *menuHandle* | USAGE HANDLE | Specifies the handle of an existing menu. |
| *ID* | any numeric data item or numeric literal | Specifies the menu entry you want to change a bitmap. |
| *bitmapHandle* | USAGE HANDLE | Specifies an handle of a bitmap or a bitmap strip (see [W$BITMAP](../W$BITMAP/W$BITMAP)). |
| *bitmapNumber* | any numeric data item or numeric literal | Specifies the ordinal position of the bitmap in the bitmap strip. If this parameter is omitted, the first bitmap is used. |
| *bitmapSize* | any numeric data item or numeric literal | Specifies the size of each bitmap in the bitmap strip. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| <=0 | Operation failed. |
| >0 | Operation successful. |
