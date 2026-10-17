## Enabled

This property assumes a value of "0" if the Scroll-Pane control is disabled, "1" if it is enabled.

When the Scroll-Pane is disabled, all the enabled controls inside are disabled as well.

When the Scroll-Pane is enabled, all the controls inside that don't have their [Enabled](../../../../Appendices/Graphical-Control-List) property set to 0 are enabled as well.

**Example** - Modify a scroll pane to disable it

```cobol
procedure division.
...
  modify screen-1-sp-1 enabled 0
...
```
