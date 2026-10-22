## No-Box

When this style is set, the borders of the Tab-Control are not shown.

This style has no effect on Tab-Controls with either the [Accordion](./Accordion) style or the [Allow-Container](./Allow-Container) style.

**Example** - Define a tab-control without borders

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
     background-low
     bold
     no-box
     .
```
