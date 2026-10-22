## Tab-Border-Width

This property allows you to set or retrieve the width of the four borders of every tab in a Tab-Control control. The property is a list of four values that specify the width in pixels of the top, left, bottom and right border respectively. The border width is applicable only to Tab-Controls with the [Tab-Flat](../Styles/Tab-Flat) style and without the [Accordion](../Styles/Accordion) style.

Setting the property to -1 resets the borders.

Passing less than four values assumes that the remaining values are 0.

This property overrides the layout provided by the active Look & Feel for the control.

**Example** - Define a tab-control control where every tab has a huge bottom border

```cobol
screen section.
...
  03 screen-1-tb-1 Tab-Control
     line 2.8
     column 25.7
     size 34.6 cells
     lines 28.9 cells
     tab-border-width (1 1 5 1)
     id 19
     .
```
