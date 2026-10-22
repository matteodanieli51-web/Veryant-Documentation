## MSG-GD-DBLCLICK

This event is fired when the user double clicks on a read-only protected cell in a Grid control. The EVENT-DATA-1 and EVENT-DATA-2 data items contain the column and the row number (respectively) of the cell. The [X](../Properties/X) and [Y](../Properties/Y) properties are automatically set to the value of the cell coordinates, until the user leaves that cell.

If the cell is not protected, a [MSG-BEGIN-ENTRY](./MSG-BEGIN-ENTRY) event is fired instead.

See [Cell-Protection](../Properties/Cell-Protection), [Column-Protection](../Properties/Column-Protection), [Row-Protection](../Properties/Row-Protection) and [Protection](../Properties/Protection) for more information about cells protection.
