## MSG-GOTO-CELL-OUT-PREV

This event is fired when the user tries to move the cursor outside of the Grid area in one of the following conditions:

- the cursor is on the most top-left non-protected cell and the user presses
   - SHIFT+TAB (only if the Grid has the [Use-Tab](../Styles/Use-Tab) style)
   - the left arrow key
   - the up arrow key (only if the Grid has not the [Paged](../Styles/Paged) style)
   - the Page Up key (only if the Grid has not the [Paged](../Styles/Paged) style)
- the cursor is on a cell in the first column and the user presses
   - the left arrow key
- the cursor is on a cell in the first row and the user presses
   - the up arrow key (only if the Grid has not the [Paged](../Styles/Paged) style)
   - the Page Up key (only if the Grid has not the [Paged](../Styles/Paged) style)

The EVENT-DATA-1 and EVENT-DATA-2 data items contain the column and row number (respectively) of the current cell.
