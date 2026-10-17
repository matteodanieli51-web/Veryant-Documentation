## VPadding

This numeric property affects the height of the items, indicating extra vertical space to be applied to each item. It is expressed as a percentage of the control’s font. Its default value is 20; this makes the item’s height 1.2 times the height of the font of the Tree-View control.

**Example** - Modify a tree-view to set the vpadding percentage

```cobol
procedure division.
...
  modify screen-1-tv-1 vpadding 40
...
```
