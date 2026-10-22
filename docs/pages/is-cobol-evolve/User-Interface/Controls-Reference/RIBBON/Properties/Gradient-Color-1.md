## Gradient-Color-1

This property allows you to set or retrieve the start color of the gradient effect of the Ribbon control.

If this property is not set, but [Gradient-Color-2](./Gradient-Color-2) is set, then the start color of the gradient effect is black.

The gradient effect overrides the color set by [Background-Color](./Background-Color).

See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Display a Ribbon control whose background color goes from gray to white

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
          gradient-color-1 rgb x#c0c0c0
          gradient-color-2 rgb x#ffffff
          gradient-orientation gradient-northeast-to-southwest
          id 6
          bitmap-width 16
          handle screen-1-rbn-1-hdl
          .
...
```
