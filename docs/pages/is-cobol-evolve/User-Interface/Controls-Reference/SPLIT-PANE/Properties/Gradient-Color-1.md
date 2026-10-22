## Gradient-Color-1

This property allows you to set or retrieve the start color of the gradient effect of the Split-Pane control.

If this property is not set, but [Gradient-Color-2](./Gradient-Color-2) is set, then the start color of the gradient effect is black.

The gradient effect overrides the color set by [Background-Color](./Background-Color).

See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a split pane whose background color goes from gray to white

```cobol
screen section.
...
  03 screen-1-sp-1 Split-pane
     line 33.1
     column 12.8
     size 38.2 cells
     lines 3.0 cells
     gradient-color-1 rgb x#c0c0c0
     gradient-color-2 rgb x#ffffff
     gradient-orientation gradient-northeast-to-southwest
     .
```
