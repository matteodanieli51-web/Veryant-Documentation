## MSG-LOAD-ON-DEMAND

This event is fired when the threshold indicated by the [Lod-Threshold](../Properties/Lod-Threshold) property is reached.

The program should load new records in the Grid in response to this event.

The EVENT-DATA-1 data item provides information on the action that triggered the event. Possible values, defined in [isgui.def](../../../../Appendices/Copybooks/isgui.def), are:

| Value | Constat in isgui.def | Description |
| --- | --- | --- |
| 1 | grlod-arrow-down-key | The down arrow key was pressed |
| 2 | grlod-page-down-key | The Pag Down key was pressed |
| 3 | grlod-ctrl-end-key | The Ctrl-End key combination was pressed |
| 4 | grlod-scroll-bar-drag | The vertical scroll-bar was dragged to the bottom of the Grid |
| 5 | grlod-tab-key | The Tab key was pressed and the Grid has the [Use-Tab](../Styles/Use-Tab) style |

Setting EVENT-ACTION to EVENT-ACTION-COMPLETE prevents the cursor for being moved on the Grid and doesn’t fire a MSG-GOTO-CELL event.
