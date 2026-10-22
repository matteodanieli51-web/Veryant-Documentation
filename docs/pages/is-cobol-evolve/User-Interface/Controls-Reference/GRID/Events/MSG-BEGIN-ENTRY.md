## MSG-BEGIN-ENTRY

This event is fired when the user starts changing the content of a cell in a Grid control. The EVENT-DATA-1 and EVENT-DATA-2 data items contain the column and the row number (respectively) of the modified cell. The [X](../Properties/X) and [Y](../Properties/Y) properties are automatically set to the value of the cell coordinates, until the user leaves that cell.

In order to know which key or action caused the Grid to enter in edit mode, inquire the [Entry-Reason](../Properties/Entry-Reason) property.

Setting EVENT-ACTION to EVENT-ACTION-FAIL allows you to protect the cell from being edited. In this way you can create read-only cells, but this method is less performing than using the [Cell-Protection](../Properties/Cell-Protection) property.
