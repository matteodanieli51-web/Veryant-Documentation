## MSG-BEGIN-HEADING-MENU-POPUP

This event is fired when the user starts selecting a menu item in a heading menu popup of a Grid control.

When the user clicks on the check box menu item corresponding to a column, the EVENT-DATA-1 and EVENT-DATA-2 data items contain the column number and the current value (respectively) of the check box.

When the user clicks on another menu item, EVENT-DATA-2 is not set and EVENT-DATA-1 assumes one of the following negative values:

|  |  |
| --- | --- |
| -1 | Find |
| -2 | Copy |
| -3 | Export |

Setting EVENT-ACTION to EVENT-ACTION-FAIL inhibits the change of the check-box menu item value.
