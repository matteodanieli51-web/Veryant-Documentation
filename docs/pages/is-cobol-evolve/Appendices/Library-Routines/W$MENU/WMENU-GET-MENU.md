### WMENU-GET-MENU

The WMENU-GET-MENU function retrieves the handle of the current menu bar.

#### Syntax:

```cobol
 CALL "W$MENU" USING WMENU-GET-MENU
              GIVING menuHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WMENU-GET-MENU | Constant |  |

#### Return code:

*menuHandle* must be an USAGE HANDLE data item and provides additional information:

|  |  |
| --- | --- |
| <=0 | Operation failed. |
| >0 | This is the handle to the currently displayed menu bar. |
