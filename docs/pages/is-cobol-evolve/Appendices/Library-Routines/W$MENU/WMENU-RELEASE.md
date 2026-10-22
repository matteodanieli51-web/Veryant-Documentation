### WMENU-RELEASE

The WMENU-RELEASE function logically removes a menu from the screen, but it is still visible. This is useful, for example, when you want to clear an entire window containing a menu bar. In this way the menu bar and the window content disappears in just one operation.

#### Syntax:

```cobol
 CALL "W$MENU" USING WMENU-RELEASE
              GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WMENU-RELEASE | Constant |  |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| <=0 | Operation failed. |
| >0 | Operation successful. |
