## MSG-FINISH-ENTRY

This event is fired when the user ends typing in a grid cell. The EVENT-DATA-1 and EVENT-DATA-2 data items contain the column and row number (respectively) of the edited cell, as well as the [X](../Properties/X) and [Y](../Properties/Y) properties.

In order to know which key or action caused the Grid to exit from edit mode, inquire the [Finish-Reason](../Properties/Finish-Reason) property.

Setting EVENT-ACTION to EVENT-ACTION-FAIL will keep the cell in edit mode avoiding the user to leave it.

Setting EVENT-ACTION to EVENT-ACTION-TERMINATE will interrupt the current ACCEPT setting the CRT STATUS either to 96 or to the value of the function key where applicable. This behavior is controlled by the [iscobol.gui.grid.terminate_finish_entry (boolean)](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) configuration property.
