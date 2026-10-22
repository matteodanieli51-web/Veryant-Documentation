## MSG-HEADING-MENU-POPUP

This event is fired after a MSG-BEGIN-HEADING-MENU-POPUP event, unless such event was interrupted by setting EVENT-ACTION to EVENT-ACTION-FAIL or EVENT-ACTION-FAIL-TERMINATE.

If the user clicked on the check box menu item corresponding to a column, the EVENT-DATA-1 and EVENT-DATA-2 data items contain the column number and the current value (respectively) of the check box.

If the user clicked on another menu item, EVENT-DATA-2 is not set and EVENT-DATA-1 assumes one of the following negative values:

|  |  |
| --- | --- |
| -1 | Find |
| -2 | Copy |
| -3 | Export |
