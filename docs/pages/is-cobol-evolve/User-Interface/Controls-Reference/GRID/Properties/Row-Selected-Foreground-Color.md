## Row-Selected-Foreground-Color

This property allows you to set or retrieve the foreground color of the selected rows when [Selection-Mode](./Selection-Mode) includes *grsm-row-selection.* See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

This color is always visible, even when the Grid doesn’t have the focus.

**Example** - Set the foreground color for selected rows

```cobol
procedure division.
...
  modify screen-1-gr-1 row-selected-foreground-color 7
...
```
