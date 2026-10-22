## MSG-MOUSE-ENTER

This event is fired when the mouse pointer is moved on a Grid cell, while it is not fired when the mouse pointer hovers over the Grid empty area. The event may be fired more than one time if the mouse pointer is moved over multiple cells before leaving the Grid area.

This event is fired only if the Grid control has the [Notify-Mouse](../Styles/Notify-Mouse) style.

The EVENT-DATA-1 and EVENT-DATA-2 data items contain the column and row number (respectively) of the cell.
