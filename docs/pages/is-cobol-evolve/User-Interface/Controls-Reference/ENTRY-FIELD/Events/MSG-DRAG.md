## MSG-DRAG

This event is fired when the user left clicks on the control and drags the mouse pointer out of the Entry-Field area. The mouse cursor shape changes to notify that a drag is in progress. You can prevent this action by setting EVENT-ACTION to EVENT-ACTION-FAIL.

The EVENT-DATA-1 special register contains the cursor position in the Entry-Field.

Note - This event is fired only if the [Drag-Mode](../Properties/Drag-Mode) property is set to a value greater than zero.
