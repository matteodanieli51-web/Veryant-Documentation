## MSG-TV-SELCHANGE

This event is fired when the user changes the selected item in a Tree-View control. The EVENT-DATA-2 data item contains the newly selected item. EVENT-DATA-1 contains one of the following symbolic values, defined in [isgui.def](../../../../Appendices/Copybooks/isgui.def), depending on the reason of the change.

|  |  |
| --- | --- |
| TVFLAG-MOUSE | The new item has been selected with the mouse. |
| TVFLAG-KEYBOARD | The new item has been selected with the keyboard. |
| TVFLAG-PROGRAM | The new item has been programmatically selected by setting the [Value](../Properties/Value) property. |
