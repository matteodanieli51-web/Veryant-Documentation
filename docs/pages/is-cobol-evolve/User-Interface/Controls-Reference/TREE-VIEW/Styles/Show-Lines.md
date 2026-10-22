## Show-Lines

When this style is set, items at the same level are connected by a line and, if they have children, a button is shown before their name. This just makes the Tree-View control more readable, without influencing its behavior. The lines may be shown also without this style using certain Look & Feel.

**Example** - Define a tree-view with show-lines style

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
     show-lines
     .
```
