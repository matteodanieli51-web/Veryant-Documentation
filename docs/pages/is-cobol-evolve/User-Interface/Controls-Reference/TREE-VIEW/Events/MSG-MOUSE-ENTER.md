## MSG-MOUSE-ENTER

This event is fired when the mouse pointer is moved on a Tree-View item. The event may be fired more than one time if the mouse pointer hovers over multiple Tree-View items before leaving the Tree-View area. The event is not fired when the mouse pointer is moved over the heading of a Tree-View with the [Table-View](../Styles/Table-View) style.

This event is fired only if the Tree-View control has the [Notify-Mouse](../Styles/Notify-Mouse) style.

The EVENT-DATA-2 data item contains the ID of the item where the event was generated.

If the Tree-View has the [Table-View](../Styles/Table-View) style, the EVENT-DATA-1 data item contains the number of the column where the event was generated.
