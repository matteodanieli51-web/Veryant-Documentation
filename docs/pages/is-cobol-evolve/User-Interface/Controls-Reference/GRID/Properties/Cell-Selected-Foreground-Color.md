## Cell-Selected-Foreground-Color

This property allows you to set or retrieve the foreground color of the selected cells when [Selection-Mode](./Selection-Mode) includes *grsm-cell-selection.* See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

This color is always visible, even when the Grid doesn’t have the focus.

**Example** - Set the foreground color for selected cells

```cobol
procedure division.
...
  modify screen-1-gr-1 cell-selected-foreground-color 7
...
```
