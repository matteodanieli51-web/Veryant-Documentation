### WMENU-SET-BLOCK

The WMENU-SET-BLOCK function sets the current menu blocking count. When a program changes the menu blocking count, it should retrieve the current value before changing it and restore it before exiting. See also the [WMENU-BLOCK](./WMENU-BLOCK), [WMENU-UNBLOCK](./WMENU-UNBLOCK), and [WMENU-GET-BLOCK](./WMENU-GET-BLOCK) functions.

#### Syntax:

```cobol
 CALL "W$MENU" USING WMENU-SET-BLOCK
                     blockingCount
              GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WMENU-SET-BLOCK | Constant |  |
| *blockingCount* | any numeric data item or numeric literal | Represents the value to be assigned to the menu blocking count. When it is zero, the menu is available to the user. When it is greater than zero, the menu is blocked. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| <=0 | Operation failed. |
| >0 | Operation successful. |
