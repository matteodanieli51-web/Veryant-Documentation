## Enabled

This property assumes a value of "0" if the Ribbon control is disabled, "1" if it is enabled.

When the Ribbon is disabled, all the enabled controls inside are disabled as well.

When the Ribbon is enabled, all the controls inside that don't have their [Enabled](../../../../Appendices/Graphical-Control-List) property set to 0 are enabled as well.

**Example** - Display a Ribbon control initially disabled

```cobol
procedure division.
...
  display ribbon
  tab-to-add ( "Page-1" "Page-2")
  bitmap-number ( 0 0)
  lines 4.4375
  color 134
  enabled 0
  id 6
  collapse 1
  bitmap-width 18
  bitmap-handle icon-png
  handle screen-1-rbn-1-hdl
  .
...
```
