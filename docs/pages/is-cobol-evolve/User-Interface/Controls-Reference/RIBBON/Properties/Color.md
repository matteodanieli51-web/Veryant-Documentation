## Color

This property allows you to set or retrieve the color of the Ribbon control. Foreground and background color values are combined and therefore RGB colors are not supported. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Display a Ribbon control with color property

```cobol
procedure division.
...
  display ribbon
          tab-to-add ( "Page-1" "Page-2")
          bitmap-number ( 0 0)
          lines 4.4375
          color 134
          id 6
          bitmap-width 16
          handle screen-1-rbn-1-hdl
          .
...
```
