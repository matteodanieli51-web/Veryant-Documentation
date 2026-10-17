## NTF-RESIZED

This event is fired when the user tries to resize a window created with the [RESIZABLE](../Styles/Auto-Resize-Resizable) style. EVENT-DATA-1 and EVENT-DATA-2 contain the new height and the new width of the window respectively expressed in hundreds of cell.

The user can resize a window by left clicking on the border and dragging the mouse. Depending on your operating system configuration you might obtain only one event when the user releases the mouse button or multiple events while the user is dragging the mouse. In the second case it’s good practice to set [iscobol.gui.ntf_resized_delay](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) in the configuration in order to reduce the number of events raised and improve performance.
