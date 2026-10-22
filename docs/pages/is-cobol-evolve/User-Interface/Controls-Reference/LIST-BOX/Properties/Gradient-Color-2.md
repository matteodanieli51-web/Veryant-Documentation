## Gradient-Color-2

This property allows you to set or retrieve the end color of the gradient effect of the List-Box control.

If this property is not set, but [Gradient-Color-1](./Gradient-Color-1) is set, then the end color of the gradient effect is black.

The gradient effect overrides the color set by [Background-Color](./Background-Color).

See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a list-box control whose background color goes from gray to white

```cobol
screen section.
...
  03 screen-1-lb-1 List-Box
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     gradient-color-1 rgb x#c0c0c0
     gradient-color-2 rgb x#ffffff
     gradient-orientation gradient-northeast-to-southwest
     id 16
     .
...
```
