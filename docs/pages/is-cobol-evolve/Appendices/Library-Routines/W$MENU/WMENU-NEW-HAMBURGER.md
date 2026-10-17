### WMENU-NEW-HAMBURGER

The WMENU-NEW-HAMBURGER function creates a new empty hamburger menu.

A hamburger menu is represented by a button in the menu bar that shows a menu when clicked.

The hamburger menu has a default layout that can be customized by calling the [WMENU-SET-ATTRIBUTE](./WMENU-SET-ATTRIBUTE) function.

The heigh of the menu bar depends on the height of the hamburger button. Changing the [hamburger-icon](./WMENU-SET-ATTRIBUTE) attribute to use an icon with different height will affect the height of the menu bar.

#### Syntax:

```cobol
 CALL "W$MENU" USING WMENU-NEW-HAMBURGER
              GIVING menuHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WMENU-NEW-HAMBURGER | Constant |  |

#### Return code:

*menuHandle* must be an USAGE HANDLE data item and provides additional information:

|  |  |
| --- | --- |
| <=0 | Operation failed. |
| >0 | Receives the handle to the newly created menu. |
