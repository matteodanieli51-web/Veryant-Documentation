## Action

A specific action is performed when a value is assigned to this property. Only the following symbolic value, included in the copy file [isgui.def](../../../../Appendices/Copybooks/isgui.def), can be assigned. The table below shows the action related to it:

|  |  |
| --- | --- |
| action-entry | The Tree-View control enters the Edit Mode and the [MSG-BEGIN-ENTRY](../Events/MSG-BEGIN-ENTRY) event is generated. |
| action-end | The Tree-View control stops the edit mode and the [MSG-FINISH-ENTRY](../Events/MSG-FINISH-ENTRY) event is generated. |

This property has no effect on Tree-Views with the [Table-View](../Styles/Table-View) style.

**Example** - Define a tree-view and use the action property in procedure division to start the edition of the current item

```cobol
screen section.
...
  03 screen-1-tv-1 Tree-View
     line 2.7
     column 3.4
     size 23.6 cells
     lines 29.1 cells
     id 2
     no-box
     .
...
procedure division.
...
  modify screen-1-tv-1
         parent = null
         item-to-add "Option 1"
         giving tv-item-hdl
         parent = tv-item-hdl
         item-to-add "Sub-option 1.1"
         giving tv-item-hdl2
         parent = tv-item-hdl
         item-to-add "Sub-option 1.2"
         giving tv-item-hdl3
         parent = null
         item-to-add "Option 2"
         giving tv-item-hdl0
         parent = tv-item-hdl0
         item-to-add "Sub-option 2.1"
         giving tv-item-hdl4
         parent = null
         item-to-add "Option 3"
         giving tv-item-hdl1
         .
...
  modify screen-1-tv-1 action action-entry
...
```
