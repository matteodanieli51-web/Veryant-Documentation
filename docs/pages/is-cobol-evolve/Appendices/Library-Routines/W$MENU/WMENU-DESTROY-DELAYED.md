### WMENU-DESTROY-DELAYED

The WMENU-DESTROY-DELAYED function destroys a menu, including optional sub-menus. The menu is destroyed only if it is not displayed on the screen. If it is displayed the menu is destroyed only when a [WMENU-SHOW](./WMENU-SHOW) function is executed.

#### Syntax:

```cobol
 CALL "W$MENU" USING WMENU-DESTROY-DELAYED
                     menuHandle
              GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WMENU-DESTROY-DELAYED | Constant |  |
| *menuHandle* | USAGE HANDLE | Specifies the handle of an existing menu. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| <=0 | Operation failed. |
| >0 | Operation successful. |
