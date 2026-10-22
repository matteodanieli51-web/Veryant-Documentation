## MSG-GRID-RBUTTON-DOWN

This event is fired when the user pushes the right mouse button and the mouse pointer is positioned on a Grid control. The EVENT-DATA-1 and EVENT-DATA-2 data items contain the column and row number (respectively) of the cell where the mouse pointer is, as well as the [X](../Properties/X) and [Y](../Properties/Y) properties. Setting EVENT-ACTION to EVENT-ACTION-COMPLETE, avoid further processing of this event to occur, otherwise, the grid acts as if the user pressed the left mouse button.
