## Row-Selected-Color

This property allows you to set or retrieve the color of the selected rows when [Selection-Mode](./Selection-Mode) includes *grsm-row-selection*. Foreground and background color values are combined and therefore RGB colors are not supported. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

This color is always visible, even when the Grid doesn’t have the focus.

**Example** - Set the colors for selected rows

```cobol
procedure division.
...
  modify screen-1-gr-1 row-selected-color 480
..
```
