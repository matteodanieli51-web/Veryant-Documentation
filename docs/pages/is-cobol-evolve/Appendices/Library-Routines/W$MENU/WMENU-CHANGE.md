### WMENU-CHANGE

The WMENU-CHANGE function modifies a menu item. If an item is modified from being a submenu to a normal item than that submenu is destroyed.

#### Syntax:

```cobol
 CALL "W$MENU" USING WMENU-CHANGE
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
| WMENU-CHANGE | Constant |  |  |
| *menuHandle* | USAGE HANDLE | Specifies the handle of an existing menu. |  |
| *position* | any numeric data item or numeric literal | Specifies the ID of the menu entry you want to change. That entry is deleted and the entry described by the current parameters is inserted in the same location. It must be greater than zero. |  |
| *flags* | any numeric data item or numeric literal | It defines the item characteristics. Possible values, that can be added together, are: |  |
|  |  | W-CHECKED | If this flag is applied a check mark is put beside the menu item. |
|  |  | W-DISABLED | If this flag is applied the menu item is disabled and the user cannot select it. The item is grayed out. |
|  |  | W-SEPARATOR | If this flag is applied the menu item is displayed as a bar separator. The content of the TEXT data item (see below) is not considered. |
| *text* | PIC X(n) | Indicates the text of the menu shown on the menu bar. A key letter can be set by adding a "&" character before the desired letter, part of this text. When the menu is displayed, all the key letters are shown underlined, and it is possible to activate that menu item by pressing the [Alt] key in conjunction with the key letter. |  |
| *ID* | any numeric data item or numeric literal | Specifies the menu item. This ID is returned to the program when the user selects this item. In this way it is possible to identify the selected item. |  |
| *submenu* | USAGE HANDLE | If this item is set with a menu handle, than this item, when selected, opens up a submenu. For normal operation you cam omit this parameter or set it to "0". |  |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| <=0 | Operation failed. |
| >0 | Operation successful. |
