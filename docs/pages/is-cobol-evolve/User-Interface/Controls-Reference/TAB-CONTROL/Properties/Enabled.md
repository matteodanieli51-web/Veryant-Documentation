## Enabled

This property assumes a value of "0" if the Tab-Control control is disabled, "1" if it is enabled.

If either the [Accordion](../Styles/Accordion) style or the [Allow-Container](../Styles/Allow-Container) style is set, the following rules apply:

- When the Tab-Control is disabled, all the enabled controls inside are disabled as well.
- When the Tab-Control is enabled, all the controls inside that don't have their [Enabled](../../../../Appendices/Graphical-Control-List) property set to 0 are enabled as well.

**Example** - Define a tab-control initially disabled

```cobol
screen section.
...
  03 screen-1-tc-1 Tab-Control
     line 2.8
     column 25.7
     size 34.6 cells
     lines 28.9 cells
     enabled 0
     id 10
     bitmap-width 18
     bitmap-handle icon-png
     .
```
