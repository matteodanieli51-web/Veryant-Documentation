## Hint

This property allows you to define the text shown in the window that pops up when the mouse pointer is placed on the IWC-Panel control.

**Example** - Define an iwc-panel with hint text

```cobol
screen section.
...
  03 screen-1-ip-1 Iwc-Panel
     line 22.0
     column 10.0
     size 11.0 cells
     lines 3.0 cells
     id 10
     js-name "f-map"
     hint "Hint of IWC-Panel
     .
...
```
