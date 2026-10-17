## Flat

When this style is set under the Windows Look & Feel, Tree-View buttons are replaced by chevrons and connection lines between items are not shown.

**Example** - Define a tree-view with a “Windows 10” style:

```cobol
...
screen section.
...
  03 screen-1-tv-1 Tree-View
     flat
     line 2.7
     column 3.4
     size 20.8 cells
     lines 29.1 cells
     height-in-cells
     color 144
     id 2
     .
```
