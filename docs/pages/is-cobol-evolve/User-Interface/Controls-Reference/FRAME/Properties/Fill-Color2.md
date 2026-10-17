## Fill-Color2

This property, used in conjunction with the [Fill-Percent](./Fill-Percent) property, defines the color used to fill the portion of frame not filled with the color set in the [Fill-Color](./Fill-Color) property, when the value of the [Fill-Percent](./Fill-Percent) property is less than 100. The default value, zero, indicates that no color must be applied to that frame portion. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a frame control with 2 fill colors, white and gray, the fill-percent tells the percentage for the first fill color and the rest is for the other fill color

```cobol
screen section.
...
  03 screen-1-fr-1 Frame
     line 17.7
     column 20.0
     size 24.3 cells
     lines 27.8 cells
     id 16
     fill-color 16
     fill-color2 9
     fill-percent 73
     .
```
