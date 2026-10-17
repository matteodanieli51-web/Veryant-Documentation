## Tab-Text

This property defines the title of the page identified by the [Tab-Index](./Tab-Index) property.

When values are enclosed between parentheses, the [Tab-Index](./Tab-Index) property is ignored, the 1st value refers to the 1st Tab, the 2nd value refers to the 2nd Tab and so on.

**Example** - Modify a Ribbon control to change the tab title

```cobol
procedure division.
...
  modify screen-1-rbn-1-hdl
         tab-index 3 tab-text "Ops 3 (disabled)"
...
```
