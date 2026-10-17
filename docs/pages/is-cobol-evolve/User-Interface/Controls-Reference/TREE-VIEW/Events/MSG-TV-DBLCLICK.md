## MSG-TV-DBLCLICK

This event is fired when the user double-clicks a tree-view item without children. If the [Has-Children](../Properties/Has-Children) property of the item is set to 1, then the [MSG-TV-EXPANDING](./MSG-TV-EXPANDING) event is fired instead.

EVENT-DATA-2 contains the ID of the selected item.

If the Tree-View has the [Table-View](../Styles/Table-View) style, the EVENT-DATA-1 data item contains the column index.
