## Text-Norotate

When this style is set along with the [Vertical](./Vertical) style, the text in the tab is shown horizontally.

**Example** - Define a tab-control with vertical and text-norotate style

```cobol
screen section.
...
  03 screen-1-tc-1 Tab-Control
     line 2.8
     column 25.7
     size 34.6 cells
     lines 28.9 cells
     help-id 1036
     id 10
     text-norotate
     vertical
     .
```
