## Start-X

The only purpose of this property is to paint a rectangular region of the Grid control. See [Region-Color](./Region-Color) property for a more detailed explanation.

**Example** - Modify a grid to set the color of a region

```cobol
procedure division.
...
modify my_grid
       start-x = 2 start-y = 2 x = 4 y = 4
       region-color = 225
...
```
