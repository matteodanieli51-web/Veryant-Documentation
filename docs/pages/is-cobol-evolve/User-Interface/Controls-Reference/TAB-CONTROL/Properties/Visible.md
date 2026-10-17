## Visible

This property assumes a value of "0" if the Tab-Control control is not visible, "1" if it is visible. The visibility is applied to the whole control, it’s not possible to hide and show the individual pages.

If either the [Accordion](../Styles/Accordion) style or the [Allow-Container](../Styles/Allow-Container) style is set, the following rules apply:

- When the Tab-Control is hidden, all the visible controls inside are hidden as well.
- When the Tab-Control is made visible, all the controls inside that don't have their [Visible](../../../../Appendices/Graphical-Control-List) property set to 0 are made visible as well.

**Example** - Modify a tab-control to make it invisible

```cobol
...
procedure division.
...
  modify screen-1-tc-1 visible 0
...
```
