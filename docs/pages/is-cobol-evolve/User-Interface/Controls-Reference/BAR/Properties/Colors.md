## Colors

The Bar control consists of a number of rows defined with the [Width](./Width) property that make the Bar control thicker or thinner.

The color of each single row is defined by this property. If not set, each row will be drawn with the color set to the [Color](./Color) or [Foreground-Color](./Foreground-Color) properties.

Since this property can be set for each row, a list of values is needed in order to determine the color of each row.

When values are enclosed between parentheses, a new list is defined at once. The snippet below defines a gray fading Bar control.

```cobol
WIDTH  = 8
COLORS = (RGB x#000000,
          RGB x#222222,
          RGB x#444444,
          RGB x#666666,
          RGB x#888888,
          RGB x#AAAAAA,
          RGB x#CCCCCC,
          RGB x#EEEEEE)
```

See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example -** Define a bar on screen section with 3 different colors for a width 3

```cobol
screen section.
...
  03 screen-1-br-1 Bar
     line 8.0
     column 5.0
     color 7
     size 45.0 cells
     id 2
     width  = 3
     colors =
         (rgb x#222222,
          rgb x#444444,
          rgb x#cccccc)
     .
```
