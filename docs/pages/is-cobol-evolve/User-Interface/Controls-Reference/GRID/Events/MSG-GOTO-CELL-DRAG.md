## MSG-GOTO-CELL-DRAG

This event is fired each time the user moves to a different cell while dragging the cursor. The EVENT-DATA-1 and EVENT-DATA-2 data items contain the column and row number (respectively) of the new cell, as well as the [X](../Properties/X) and [Y](../Properties/Y) properties. Setting EVENT-ACTION to EVENT-ACTION-FAIL will keep the cursor on the current cell instead on moving on the cell selected by the user. After it, you can move the cursor to a different cell by modifying the [Cursor-X](../Properties/Cursor-X) and [Cursor-Y](../Properties/Cursor-Y) properties.
