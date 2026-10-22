## Tab-Hint

This property specifies the hint text to be shown when the mouse hovers over the title of the page specified by the [Tab-Index](./Tab-Index) property.

**Example** - Specify the hint for the second page of a tab-control

```cobol
procedure division.
...
  modify screen-1-tc-1 tab-index 2 tab-hint "This is page 2"
...
```
