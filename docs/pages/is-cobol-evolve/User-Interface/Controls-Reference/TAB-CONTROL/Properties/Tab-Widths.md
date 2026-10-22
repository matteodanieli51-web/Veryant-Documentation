## Tab-Widths

This property is used to set the width, in cells, of the tab identified by the [Tab-Index](./Tab-Index) property.

The tab width is applicable only to Tab-Controls with the [Tab-Flat](../Styles/Tab-Flat) style and without the [Accordion](../Styles/Accordion) style.

When values are enclosed between parentheses, the [Tab-Index](./Tab-Index) property is ignored, the 1st value refers to the 1st panel, the 2nd value refers to the 2nd panel and so on.

**Example** - Define a tab-control with three tabs where each tab has a different width

```cobol
...
screen section.
...
  03 screen-1-tc-1 Tab-Control
     tab-to-add ("Page 1" "Page 2 " "Page 3")
     tab-widths (15 20 10)
     line 2.8
     column 25.7
     size 34.6 cells
     lines 28.9 cells
     tab-flat
     tab-background-color 0
     tab-foreground-color 15
     tab-rollover-color 13
     id 10
     bitmap-width 16
     .
...
```
