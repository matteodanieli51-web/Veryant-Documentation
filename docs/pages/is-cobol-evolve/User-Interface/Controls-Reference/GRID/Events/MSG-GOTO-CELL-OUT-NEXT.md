## MSG-GOTO-CELL-OUT-NEXT

This event is fired when the user tries to move the cursor outside of the Grid area in one of the following conditions:

- the cursor is on the most bottom-right non-protected cell and the user presses
   - TAB (only if the Grid has the [Use-Tab](../Styles/Use-Tab) style)
   - the right arrow key
   - the down arrow key (only if the Grid has not the [Paged](../Styles/Paged) style)
   - the Page Down key (only if the Grid has not the [Paged](../Styles/Paged) style)
- the cursor is on a cell in the last column and the user presses
   - the right arrow key
- the cursor is on a cell in the last row and the user presses
   - the down arrow key (only if the Grid has not the [Paged](../Styles/Paged) style)
   - the Page Down key (only if the Grid has not the [Paged](../Styles/Paged) style)

The EVENT-DATA-1 and EVENT-DATA-2 data items contain the column and row number (respectively) of the current cell.
