## Fill-Percent

This property sets the portion of the Frame control to be filled with the color set in the [Fill-Color](./Fill-Color) property. If the frame is wider than it is tall, it is horizontally filled starting from the left side. Otherwise, it is vertically filled from the bottom. The value of to this property must be in the range 0-100.

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
