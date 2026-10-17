## Bitmap-Number

This property identifies which bitmap (among the ones in the bitmap strip referenced by the [Bitmap-Handle](./Bitmap-Handle) property) is to be displayed on the tab identified by the [Tab-Index](./Tab-Index) property.

When the values are enclosed between parentheses, the [Tab-Index](./Tab-Index) property is ignored, the 1st value refers to the 1st Tab, the 2nd value refers to the 2nd Tab and so on.

The bitmap is shown before the page title.

**Example** - Modify a tab-control to assign a bitmap number to each page

```cobol
procedure division.
...
  modify screen-1-tc-1
         tab-to-add ( "Page-1" "Page-2")
         bitmap-number ( 3 2)
         .
...
```
