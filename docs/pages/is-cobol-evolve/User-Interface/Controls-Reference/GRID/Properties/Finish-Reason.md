## Finish-Reason

This property returns a number that represents how the user has left the entry mode. It can only be inquired during the [MSG-FINISH-ENTRY](../Events/MSG-FINISH-ENTRY) and [MSG-CANCEL-ENTRY](../Events/MSG-CANCEL-ENTRY) events.

Returned values, defined in [isgui.def](../../../../Appendices/Copybooks/isgui.def), are:

| Standard Value | Extended Value | Constant in isgui.def | Description |
| --- | --- | --- | --- |
| -8 | -8 | grfr-autoterminate | The  editing has been automatically terminated |
| -7 | -7 | grfr-tab-key | The user has pressed the [Tab] key. |
| n/a | -11 | grfr-shift-tab-key | The user has pressed [SHIFT]+[TAB] |
| -6 | -6 | grfr-enter-key | The user has pressed the [Enter] key. |
| -5 | -5 | grfr-escape-key | The user has pressed the [Esc] key. |
| -4 | n/a | grfr-navigation-key | The user has pressed a navigation key, such as [Up], [Down], [PageUp] or [PageDown]. |
| n/a | -5 | grfr-arrow-right-key | The user has pressed the right arrow key |
| n/a | -9 | grfr-page-up-key | The user has pressed the Page Up key. |
| n/a | -10 | grfr-page-down-key | The user has pressed the Page Down key |
| n/a | -12 | grfr-arrow-up-key | The user has pressed the up arrow key |
| n/a | -13 | grfr-arrow-down-key | The user has pressed the down arrow key |
| n/a | -14 | grfr-arrow-left-key | The user has pressed the left arrow key. |
| -3 | -3 | grfr-cell-clicked | The user has clicked a cell of the same grid. |
| -2 | -2 | grfr-terminating | The user has clicked another control or another window. |
| -1 | -1 | grfr-blank-past-end | The user has entered spaces in the last empty row automatically added by the grid. This can only happen when the [Num-Rows](./Num-Rows) property is set to -1. |
| **any other value** |  |  | A Termination or an Exception condition has occurred. The property value is set to the Exception or Termination value. |

In order to activate the extended values, the configuration property [iscobol.gui.grid.extended_finish_reason (boolean) \*](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) must be set to true.

**Example** - Inquire the finish reason from a grid

```cobol
...
procedure division.
...
       screen-1-gr-1-evt-msg-finish-entry.
           inquire screen-1-gr-1 finish-reason ws-fr
           if ws-fr = grfr-enter-key
              display message "Finish reason: ENTER"
           end-if
           .
...
```
