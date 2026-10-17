## Collapse

This property indicates if the Ribbon tabs will be shown collapsed or expanded. If the property is set to "1", then the tabs are collapsed. If the property is set to "0", then the tabs are expanded.

**Example** - Display a Ribbon control initially collapsed

```cobol
procedure division.
...
  display ribbon
          tab-to-add ( "Page-1" "Page-2")
          bitmap-number ( 0 0)
          lines 4.4375
          color 134
          id 6
          collapse 1
          bitmap-width 16
          handle screen-1-rbn-1-hdl
          .
...
```
