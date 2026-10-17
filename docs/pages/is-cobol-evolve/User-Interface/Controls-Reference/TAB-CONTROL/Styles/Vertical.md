## Vertical

When this style is set, the Tabs are positioned on the left side. When the [Bottom](./Bottom) style is also set, the Tabs are positioned on the right side.

**Note** - Since Java 17, tabs shown on the side of a Tab-Control appear slightly taller.

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
