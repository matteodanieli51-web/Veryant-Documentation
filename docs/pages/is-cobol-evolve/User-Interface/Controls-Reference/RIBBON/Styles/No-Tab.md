## No-Tab

Controls with this style set are skipped when the user navigates the screen using the Tab and the Backtab keys.

**Note -** Ribbons are skipped by default when the user navigates the screen using the Tab and the Backtab keys, so setting this style or not doesn’t make any difference.

**Example -** Display a ribbon that would be skipped when tab is pressed

```cobol
procedure division.
...
  display ribbon
          tab-to-add ( "Ops 1" "Ops 2" "Ops 3")
          bitmap-number ( 0 0 0)
          lines 4.4375
          color 134
          id 6
          hint "Ribbon tool bar"
          height-in-cells
          collapse 1
          header-align 1
          no-tab
          bitmap-width 18
          bitmap-handle icon-png
          handle screen-1-rbn-1-hdl
          .
...
```
