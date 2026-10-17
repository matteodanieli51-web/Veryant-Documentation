## Hint

This property allows you to define the text shown in the window that pops up when the mouse pointer is placed on the Ribbon control.

**Example** - Display a Ribbon control with Hint text

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
          hint "Ribbon tool bar"
          collapse 1
          header-align 1
          bitmap-width 18
          bitmap-handle icon-png
          handle screen-1-rbn-1-hdl
          .
...
```
