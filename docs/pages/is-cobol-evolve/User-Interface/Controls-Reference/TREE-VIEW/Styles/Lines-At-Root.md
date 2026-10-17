## Lines-At-Root

When this style is set, the lines connecting the items at the same level are shown also for top level items and, if they have children, a button is shown before their name. This makes the Tree-View control more readable, without influencing its behavior. The lines may not show up using certain Look & Feel.

**Example** - Define a tree-view with lines-at-root style

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
     3-d
     lines-at-root
     .
```
