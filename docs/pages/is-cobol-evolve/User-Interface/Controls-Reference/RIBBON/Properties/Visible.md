## Visible

This property assumes a value of "0" if the Ribbon control is not visible, "1" if it is visible. The visibility is applied to the whole control, it’s not possible to hide and show the individual pages.

When the Ribbon is hidden, all the visible controls inside are hidden as well.

When the Ribbon is made visible, all the controls inside that don't have their [Visible](../../../../Appendices/Graphical-Control-List) property set to 0 are made visible as well.

**Example** - Modify a Ribbon control to make it invisible

```cobol
procedure division.
...
  modify screen-1-rbn-1-hdl visible 0
...
```
