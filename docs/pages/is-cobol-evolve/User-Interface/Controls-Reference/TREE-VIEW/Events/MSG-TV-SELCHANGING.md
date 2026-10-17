## MSG-TV-SELCHANGING

This event is fired when the selected item in a Tree-View control is going to be changed. The EVENT-DATA-2 data item contains the ID of the candidate item. EVENT-DATA-1 contains one of the following symbolic values, defined in [isgui.def](../../../../Appendices/Copybooks/isgui.def), depending on the reason of the change.

|  |  |
| --- | --- |
| TVFLAG-MOUSE | The new item is going to be selected with the mouse. |
| TVFLAG-KEYBOARD | The new item is going to be selected with the keyboard. |
| TVFLAG-PROGRAM | The new item is going to be programmatically selected by setting the [Value](../Properties/Value) property. |

Setting EVENT-ACTION to EVENT-ACTION-FAIL prevents the new item from being selected.
