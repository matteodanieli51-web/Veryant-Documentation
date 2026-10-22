## Tab-Text

This property defines the title of the page identified by the [Tab-Index](./Tab-Index) property.

When values are enclosed between parentheses, the [Tab-Index](./Tab-Index) property is ignored, the 1st value refers to the 1st Tab, the 2nd value refers to the 2nd Tab and so on.

**Example** - Get the text of the second page of a tab-control

```cobol
procedure division.
...
  inquire screen-1-tc-1 tab-index 2 tab-text w-page-title
...
```
