## Tab-Hint

This property specifies the hint text to be shown when the mouse hovers over the title of the page specified by the [Tab-Index](./Tab-Index) property.

**Example** - Specify the hint for the second page of a Ribbon control

```cobol
procedure division.
...
  modify screen-1-rbn-1-hdl tab-index 2 tab-hint "This is page 2"
...
```
