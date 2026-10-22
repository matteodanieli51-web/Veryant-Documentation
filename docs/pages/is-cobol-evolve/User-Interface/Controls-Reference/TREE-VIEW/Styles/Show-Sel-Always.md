## Show-Sel-Always

When this style is set, the current item is highlighted even if the Tree-View control is not the current control.

When this style is not set, there is no way to distinguish the current item if the Tree-View control is not the current control. This is the default setting.

**Example** - Define a tree-view with show-sel-always style

```cobol
...
screen section.
...
  03 screen-1-tv-1 Tree-View
     line 2.7
     column 3.4
     size 20.8 cells
     lines 29.1 cells
     height-in-cells
     color 144
     id 2
     show-sel-always
     show-lines
     .
```
