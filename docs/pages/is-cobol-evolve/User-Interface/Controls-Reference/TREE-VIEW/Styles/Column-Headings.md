## Column-Headings

When this style is set, a heading is shown at the top of the Tree-View area. The content of the column headings cannot be changed by the user. Column headings may have a different color (see the [Heading-Background-Color](../Properties/Heading-Background-Color), [Heading-Color](../Properties/Heading-Color) and [Heading-Foreground-Color](../Properties/Heading-Foreground-Color) properties), a different font (see the [Heading-Font](../Properties/Heading-Font) property) and are not scrolled.

The heading text can be changed by the program by setting [Item](../Properties/Item) to -1 and [Item-Text](../Properties/Item-Text) to the desired text.

This style has effect only in conjunction with the [Table-View](./Table-View) style.

**Example** - Define a tree table view with 3 columns and column headings:

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
     table-view
     column-headings
     tiled-headings
     cenered-headings
     display-columns (1, 10, 15)
     .
```
