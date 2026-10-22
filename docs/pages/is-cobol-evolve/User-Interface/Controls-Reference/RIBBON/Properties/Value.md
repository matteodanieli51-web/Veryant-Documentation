## Value

This property represents the index of the tab on the Ribbon control.

When inquired, it returns the value of the currently represented tab.

When set, the tab with an index matching the value is activated.

**Example** - Retrieve the index of the currently selected tab

```cobol
procedure division.
...
  inquire screen-1-rbn-1-hdl value w-tab
...
```
