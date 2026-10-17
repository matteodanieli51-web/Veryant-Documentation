### WMENU-DESTROY

The WMENU-DESTROY function destroys a menu, including optional sub-menus. The destroyed menu is removed from the screen and all the associated memory is released.

**Note:** Using the [DESTROY](../../../Language-Reference/Procedure-Division-Statements/DESTROY) statement instead of this op-code will not remove the handle from memory.

#### Syntax:

```cobol
 CALL "W$MENU" USING WMENU-DESTROY
                     menuHandle
              GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WMENU-DESTROY | Constant |  |
| *menuHandle* | USAGE HANDLE | Specifies the handle of an existing menu. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| <=0 | Operation failed. |
| >0 | Operation successful. |
