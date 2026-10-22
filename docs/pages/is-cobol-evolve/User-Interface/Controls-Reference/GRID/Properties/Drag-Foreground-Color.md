## Drag-Foreground-Color

This property allows you to set or retrieve the foreground color of the drag area (see the [Drag-Color](./Drag-Color) property for an explanation). See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a grid with drag foreground color

```cobol
screen section.
...
  03 screen-1-gr-1 Grid
     line 7.6
     column 5.8
     size 28.2 cells
     lines 19.8 cells
     id 1
     no-box
     column-headings
     row-dividers 1
     cursor-color 393
     drag-background-color 14
     drag-foreground-color 1
     divider-color 5
     heading-font Default-Font
     cursor-frame-width 3
     num-rows 5
     .
```
