### WMENU-ADD-BITMAP

The WMENU-ADD-BITMAP function adds a bitmap to a menu item.

#### Syntax:

```cobol
 CALL "W$MENU" USING WMENU-ADD-BITMAP
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
| WMENU-ADD-BITMAP | Constant |  |
| *menuHandle* | USAGE HANDLE | Specifies the handle of an existing menu. |
| *ID* | any numeric data item or numeric literal | Specifies the menu entry you want to add a bitmap. |
| *bitmapHandle* | USAGE HANDLE | Specifies the handle of a bitmap or a bitmap strip (see [W$BITMAP](../W$BITMAP/W$BITMAP)). |
| *bitmapNumber* | any numeric data item or numeric literal | Specifies the ordinal position of the bitmap in the bitmap strip. If the bitmap handle does not reference a bitmap strip this parameter is optional. |
| *bitmapSize* | any numeric data item or numeric literal | Specifies the size of each bitmap in the bitmap strip. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| <=0 | Operation failed. |
| >0 | Operation successful. |
