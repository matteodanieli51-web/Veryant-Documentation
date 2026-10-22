### WMENU-SET-ATTRIBUTE

The WMENU-SET-ATTRIBUTE function sets the attributes for the next menu bars created via [WMENU-NEW](./WMENU-NEW) and [WMENU-NEW-HAMBURGER](./WMENU-NEW-HAMBURGER) functions. All the next calls to W$MENU in the current runtime session will be affected by these attributes.

#### Syntax:

```cobol
 CALL "W$MENU" USING WMENU-SET-ATTRIBUTE
                     attributeName
                     attributeValue
              GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WMENU-SET-ATTRIBUTE | Constant |  |
| attributeName | PIC X(n) | Identifies the attribute to set. Valid values are listed below. |
| attributeValue | PIC X(n) | Specifies the attribute value |

#### List of supported attributes:

##### Attributes for WMENU-NEW

| Attribute | Description | Possible values | Default Value |
| --- | --- | --- | --- |
| menu-bar-flavor | Default representation of the menu bar created by the [WMENU-NEW](./WMENU-NEW) function | "menu-bar" or "hamburger" | "menu-bar" |

**Note -** When menu-bar-flavor is set to "hamburger", calling the [WMENU-NEW](./WMENU-NEW) function is the same as calling the [WMENU-NEW-HAMBURGER](./WMENU-NEW-HAMBURGER) function, hence the below attributes are considered as well.

##### Attributes for WMENU-NEW-HAMBURGER

| Attribute | Description | Possible values | Default Value |
| --- | --- | --- | --- |
| check-icon | Icon shown after checked menu items in the tree-view representation of the hamburger menu | A PIC S9(9) COMP-4 data item representing the handle of a bitmap | Internal icon showing a check symbol |
| default-background-color | Background color of menu area and unselected items in the tree-view representation of the hamburger menu | Any numeric value representing either a COBOL color (if positive) or an RGB color (if negative). See [Color management](../../../User-Interface/Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management) for more information. | -15790320 |
| default-font | Font of unselected items in the tree-view representation of the hamburger menu | HANDLE OF FONT | The Arial font, plain, with size 10 |
| default-text-color | Text color of unselected items in the tree-view representation of the hamburger menu | Any numeric value representing either a COBOL color (if positive) or an RGB color (if negative). See [Color management](../../../User-Interface/Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management) for more information. | -4231625 |
| disabled-background-color | Background color of disabled items in the tree-view representation of the hamburger menu | Any numeric value representing either a COBOL color (if positive) or an RGB color (if negative). See [Color management](../../../User-Interface/Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management) for more information. | The color specified by the default-background-color attribute |
| disabled-font | Font of disabled items in the tree-view representation of the hamburger menu | HANDLE OF FONT | The font specified by the default-font attribute |
| disabled-text-color | Text color of disabled items in the tree-view representation of the hamburger menu | Any numeric value representing either a COBOL color (if positive) or an RGB color (if negative). See [Color management](../../../User-Interface/Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management) for more information. | -12632256 |
| dropdown-icon | Icon of collapsed groups in the tree-view representation of the hamburger menu | A PIC S9(9) COMP-4 data item representing the handle of a bitmap | Internal icon showing a chevron right |
| dropdown-open-icon | Icon of expanded groups in the tree-view representation of the hamburger menu | A PIC S9(9) COMP-4 data item representing the handle of a bitmap | Internal icon showing a chevron down |
| expanded | Specifies if menu items with children should be automatically expanded | "yes" or "no" | "no" |
| hamburger-icon | Icon shown in the menu bar when the hamburger menu is not visible.<br>The height of the menu bar depends on the height of this icon. | A PIC S9(9) COMP-4 data item representing the handle of a bitmap | Internal icon showing three horizontal bars |
| hamburger-open-icon | Icon shown in the menu bar when the hamburger menu is visible | A PIC S9(9) COMP-4 data item representing the handle of a bitmap | The icon specified by the hamburger-icon attribute |
| height | Height in pixels of the area covered by the hamburger menu.<br>In order to respect the requested height the hamburger menu will ignore the [status-bar-covering](./WMENU-SET-ATTRIBUTE) attribute and will extend over the window height if necessary. | Any positive integer value | The height of the window. It could be less if you disabled either [tool-bar-covering](./WMENU-SET-ATTRIBUTE) or [status-bar-covering](./WMENU-SET-ATTRIBUTE) |
| hover-background-color | Background color of menu items hovered by the mouse in the tree-view representation of the hamburger menu | Any numeric value representing either a COBOL color (if positive) or an RGB color (if negative). See [Color management](../../../User-Interface/Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management) for more information. | -6065849 |
| hover-font | Font of menu items the mouse hovers over in the tree-view representation of the hamburger menu | HANDLE OF FONT | The font specified by the default-font attribute |
| hover-text-color | Text color of menu items hovered by the mouse in the tree-view representation of the hamburger menu | Any numeric value representing either a COBOL color (if positive) or an RGB color (if negative). See [Color management](../../../User-Interface/Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management) for more information. | -16777215 |
| layout-manager | Layout manager bound to the menu that will operate when the window is resized while the menu is open. Use an empty string to remove any layout manager. | "lm-scale", "lm-zoom" or """ | """ |
| position | Hamburger button position on the menu bar. By default it’s on the left side of the window | "left" or "right" | "left" |
| tool-bar-covering | Indicates whether the tree-view representation of the hamburger menu should be shown over the screen's tool-bar or ribbon | "yes" or "no" | "yes" |
| search-panel | Indicates whether a search-panel is shown to allow the user to filter the contents of the menu | "yes" or "no" | "no" |
| show-lines | Tells if connection lines between menu items should be visible or not | "yes" or "no" | "no" |
| status-bar-covering | Indicates whether the tree-view representation of the hamburger menu should be shown over the screen's status-bar | "yes" or "no" | "yes" |
| style | Style of the hamburger menu. By default the hamburger menu is represented by a tree-view that appears from the side of the window. Setting this attribute to "laf" causes the hamburger menu to be a pop-up menu that appears when the hamburger button is clicked | "web" or "laf" | "web" |
| width | Width in pixels of the area covered by the hamburger menu | Any positive integer value | 300 |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| <=0 | Operation failed. |
| >0 | Operation successful. |
