### WMENU-UNBLOCK

The WMENU-UNBLOCK function decreases the current menu blocking count by 1. The menu is blocked when the blocking count is greater than zero. Blocking count cannot be less than zero. See also the [WMENU-BLOCK](./WMENU-BLOCK), [WMENU-GET-BLOCK](./WMENU-GET-BLOCK), and [WMENU-SET-BLOCK](./WMENU-SET-BLOCK) functions.

#### Syntax:

```cobol
 CALL "W$MENU" USING WMENU-UNBLOCK
              GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WMENU-UNBLOCK | Constant |  |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| <=0 | Operation failed. |
| >0 | Operation successful. |
