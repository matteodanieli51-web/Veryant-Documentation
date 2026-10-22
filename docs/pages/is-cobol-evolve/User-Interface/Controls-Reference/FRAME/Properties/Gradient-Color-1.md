## Gradient-Color-1

This property allows you to set or retrieve the start color of the gradient effect of the Frame control.

If this property is not set, but [Gradient-Color-2](./Gradient-Color-2) is set, then the start color of the gradient effect is black.

The gradient effect is not applied if either the [Fill-Color](./Fill-Color) property or the [Fill-Color2](./Fill-Color2) property is set.

If the [Fill-Percent](./Fill-Percent) property is set, then the gradient effect is applied only on the portion indicated by this property.

See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a frame control whose background color goes from gray to white

```cobol
screen section.
...
  03 screen-1-fr-1 Frame
     line 17.7
     column 20.0
     size 24.3 cells
     lines 27.8 cells
     gradient-color-1 rgb x#c0c0c0
     gradient-color-2 rgb x#ffffff
     gradient-orientation gradient-northeast-to-southwest
     id 16
     .
...
```
