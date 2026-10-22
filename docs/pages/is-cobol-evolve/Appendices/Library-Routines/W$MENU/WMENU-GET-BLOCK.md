### WMENU-GET-BLOCK

The WMENU-GET-BLOCK function retrieves the current menu blocking count. See also the [WMENU-BLOCK](./WMENU-BLOCK), [WMENU-UNBLOCK](./WMENU-UNBLOCK), and [WMENU-SET-BLOCK](./WMENU-SET-BLOCK) functions.

#### Syntax:

```cobol
 CALL "W$MENU" USING WMENU-GET-BLOCK
              GIVING blockingCount
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WMENU-GET-BLOCK | Constant |  |

#### Return code:

*blockingCount* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| <0 | Operation failed. |
| >=0 | This is the current blocking count. |
