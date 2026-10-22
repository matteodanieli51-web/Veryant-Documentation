### WMENU-BLOCK

The WMENU-BLOCK function increases the menu blocking count by 1. The menu is blocked when the blocking count is greater than zero. See also the [WMENU-UNBLOCK](./WMENU-UNBLOCK), [WMENU-GET-BLOCK](./WMENU-GET-BLOCK), and [WMENU-SET-BLOCK](./WMENU-SET-BLOCK) functions.

#### Syntax:

```cobol
 CALL "W$MENU" USING WMENU-BLOCK
              GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WMENU-BLOCK | Constant |  |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| <=0 | Operation failed. |
| >0 | Operation successful. |
