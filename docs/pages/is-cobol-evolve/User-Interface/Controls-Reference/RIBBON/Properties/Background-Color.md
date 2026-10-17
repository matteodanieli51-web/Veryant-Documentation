## Background-Color

This property allows you to set or retrieve the background color of the Ribbon control. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Display a Ribbon control with background and foreground color

```cobol
working-storage section.
77 screen-1-rbn-1-hdl  handle of ribbon.
...
procedure division.
...
  display ribbon
          tab-to-add ( "Page-1" "Page-2")
          bitmap-number ( 0 0)
          lines 4.4375
          background-color 8
          foreground-color 3
          id 6
          bitmap-width 16
          handle screen-1-rbn-1-hdl
          .
...
```
