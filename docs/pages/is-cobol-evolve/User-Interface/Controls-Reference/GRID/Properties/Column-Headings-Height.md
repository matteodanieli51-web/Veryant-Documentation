## Column-Headings-Height

This property sets the height of each row in the column headings.

The value must be greater than 0 and can have decimals (e.g. 0,3).

By default rows in the column headings have an height of 1. It’s useful to increase this height when you need to display text on multiple lines in the column headings having "H" as [Alignment](./Alignment) or when you have vertical headings specified by [Column-Headings-Layout](./Column-Headings-Layout).

This property replaces Row-Heading-Line-Height that is no longer supported.

**Example** - Modify a grid to set the heading line height

```cobol
procedure division.
...
  modify screen-1-gr-1 column-headings-height 2
...
```
