## Row-Color-Pattern

This property sets a color pattern to be applied to the Grid control rows. The first color specified here is used for the first pattern row, the second color of the second pattern row and so on. The pattern is then applied to the whole grid.

To obtain a "zebra" effect, add the following definition to the Grid control:

```cobol
ROW-COLOR-PATTERN = (257, 513)
```

Foreground and background color values are combined and therefore RGB colors are not supported. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Modify a grid to set its background color patern

```cobol
procedure division.
...
  modify screen-1-gr-1
         row-color-pattern 65
         row-color-pattern 225
         row-color-pattern 289
...
```
