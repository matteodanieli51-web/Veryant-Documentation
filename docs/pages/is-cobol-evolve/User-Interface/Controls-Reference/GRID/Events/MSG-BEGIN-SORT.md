## MSG-BEGIN-SORT

This event is fired each time a sort is required for a grid with either the [Sortable-Columns](../Styles/Sortable-Columns) style or [Sort-Types](../Properties/Sort-Types). Depending on the sort settings, the EVENT-STATUS item has different meanings.

If the event is fired by a Grid with the [Sortable-Columns](../Styles/Sortable-Columns) style:

   EVENT-DATA-1 contains a value of 0 if the sort has been issued by setting the [Action](../Properties/Action) property to ACTION-SORT, or 1 if the sort has been issued by clicking on the heading. EVENT-DATA-2 contains the order type:

|  |  |
| --- | --- |
| 1 | no order |
| 2 | ascending |
| 3 | descending |

   To prevent the sort from completing and leave the grid unchanged, set EVENT-ACTION to EVENT-ACTION-FAIL. To change the sort settings, modify the [Sort-data](../Properties/Sort-data) property and set EVENT-ACTION to EVENT-ACTION-COMPLETE.

If the event is fired by a Grid with [Sort-Types](../Properties/Sort-Types):

   EVENT-DATA-1 contains the column number. Setting EVENT-ACTION to EVENT-ACTION-FAIL or EVENT-ACTION-COMPLETE, the sort is not performed. Do it if you wish to provide a custom sort procedure by emptying the grid and reloading it in the desired order.
