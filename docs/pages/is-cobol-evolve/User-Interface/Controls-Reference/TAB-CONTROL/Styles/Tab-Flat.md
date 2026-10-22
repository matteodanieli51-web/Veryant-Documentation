## Tab-Flat

When this style is set, pages appear flat, with no border, rather than having a 3-D appearance.

**Example** - Define a tab-control with flat tabs.

```cobol
screen section.
...
  03 screen-1-tc-1 Tab-Control
     tab-flat
     line 2.8
     column 25.7
     size 34.6 cells
     lines 28.9 cells
     help-id 1036
     id 10
     background-low
     bold
     .
```
