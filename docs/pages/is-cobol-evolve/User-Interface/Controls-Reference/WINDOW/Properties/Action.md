## Action

A specific action is performed when a value is assigned to this property. The following symbolic values, included in the copy file [isgui.def](../../../../Appendices/Copybooks/isgui.def), can be assigned. The table below shows the actions related to each value:

|  |  |
| --- | --- |
| action-maximize | The window is maximized.<br>**Note-** the window maximization is asynchronous, so there's no guarantee that inquiring window and controls’ dimensions just after modifying the Action property will provide updated values. |
| action-maximize-postponed | The window is maximized along with the first display of a Screen Section item or graphical control over it.<br>**Note -** displaying a Ribbon, a Status-Bar, or a Tool-bar doesn’t trigger the maximization. Display a different graphical control to trigger the maximization. |
| action-minimize | The window is minimized. |
| action-restore | If the window is currently maximized or minimized, restores the window to its previous size and position; otherwise, it has no effect. |

This property has effect only on INDEPENDENT, INITIAL, MDI-CHILD and STANDARD windows.

**Example** - Display a standard window and maximize it later with the action property

```cobol
working-storage section.
77 window-handle usage handle of window.
...
procedure division.
...
  display standard  window background-low
          screen line 41
          screen column 91
          size 64.0
          lines 55.8
          cell width 10
          cell height 10
          label-offset 20
          control font Default-Font
          color 257
          resizable
          modeless
          title-bar
          no wrap
          title "Screen"
          handle window-handle
          .
...
  modify window-handle action action-maximize
...
```
