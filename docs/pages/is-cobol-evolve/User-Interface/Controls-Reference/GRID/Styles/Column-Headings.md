## Column-Headings

When this style is set, the first row of the Grid control is treated as a heading. The content of the column headings cannot be changed by the user. Column headings may have a different color (see the [Heading-Background-Color](../Properties/Heading-Background-Color), [Heading-Color](../Properties/Heading-Color) and [Heading-Foreground-Color](../Properties/Heading-Foreground-Color) properties), a different font (see the [Heading-Font](../Properties/Heading-Font) property) and are not scrolled. See also the [Num-Col-Headings](../Properties/Num-Col-Headings) property.

**Example** - Define a grid with column-headings

```cobol
screen section.
...
  03 screen-1-gr-1 Grid
     background-low
     bold
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     id 1
     event procedure screen-1-gr-1-evt-proc
     boxed
     centered-headings
     column-headings
     adjustable-rows
     adjustable-columns
     hscroll
     reordering-columns
     lm-on-columns 1
     row-dividers 1
     end-color 9
     heading-color 200
     heading-divider-color 12
     heading-font Calibri-10v0
     cursor-frame-width 3
     num-col-headings 1
     num-rows 5
     .
```
