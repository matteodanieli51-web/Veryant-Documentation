### WMENU-ENSURE-VISIBLE

The WMENU-ENSURE-VISIBLE function automatically expands the necessary menus in order to show a given menu item.

This function can be used only in menus created by [WMENU-NEW](./WMENU-NEW) or [WMENU-NEW-HAMBURGER](./WMENU-NEW-HAMBURGER) and it must be called after the [WMENU-SHOW](./WMENU-SHOW) function.

Calling this function multiple times on the same menu handle produces different results depending on the menu type:

- in a menu-bar, only the last call has effect, as you can have only one menu expanded;
- in an hamburger-menu, all the calls have effect, as you can have more than one branch expanded.

#### Syntax:

```cobol
 CALL "W$MENU" USING WMENU-ENSURE-VISIBLE
                     menuHandle
                     ID
              GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WMENU-ENABLE | Constant |  |
| *menuHandle* | USAGE HANDLE | Specifies the handle of an existing menu. |
| *ID* | any numeric data item or numeric literal | Specifies the menu entry to be shown. |

#### Return code:

returnCode can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| <=0 | Operation failed. |
| >0 | Operation successful. |
