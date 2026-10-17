### WMENU-ADD

The WMENU-ADD function adds an item to an existing menu.

#### Syntax:

```cobol
 CALL "W$MENU" USING WMENU-ADD
                     menuHandle
                     position
                     flags
                     text
                     ID
                    [submenu]
              GIVING returnCode
```

#### Parameters:

|  |  |  |  |
| --- | --- | --- | --- |
| WMENU-ADD | Constant |  |  |
| *menuHandle* | USAGE HANDLE | Specifies the handle of an existing menu. |  |
| *position* | any numeric data item or numeric literal | Specifies where to insert the new item. If this parameter is set to 0, then the new item is added at the end of the menu. Otherwise specify the menu ID before which to insert the new item. |  |
| *flags* | any numeric data item or numeric literal | It defines the item characteristics. Possible values, that can be added together, are: |  |
|  |  | W-CHECKED | If this flag is applied a check mark is put beside the menu item. |
|  |  | W-DISABLED | If this flag is applied the menu item is disabled and the user cannot select it. The item is grayed out. |
|  |  | W-SEPARATOR | If this flag is applied the menu item is displayed as a bar separator. The content of the TEXT data item (see below) is not considered. |
| *text* | PIC X(n) | Specifies the text of the menu shown on the menu bar. A key letter can be set by adding a "&" character before the desired letter, part of this text. When the menu is displayed, all the key letters are shown underlined, and it is possible to activate that menu item by pressing the [Alt] key in conjunction with the key letter.<br>A "\t" character works as a "tab". If you need to insert a "\t" in the menu description you have to write "\\t". |  |
| *ID* | any numeric data item or numeric literal | Specifies the menu item. This ID is returned to the program when the user selects this item. In this way it is possible to identify the selected item. |  |
| *submenu* | USAGE HANDLE | If this item is set to a valid menu handle the newly added item will be a submenu and it will show the menu pointed by submenu when selected by the user. This parameter should be omitted or set to zero for separators and items not containing submenus. |  |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| <=0 | Operation failed. |
| >0 | Operation successful. |
