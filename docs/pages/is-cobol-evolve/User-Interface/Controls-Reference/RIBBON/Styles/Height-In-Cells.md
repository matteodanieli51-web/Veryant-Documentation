## Height-In-Cells

This style implies that the value specified for the [Lines](../Properties/Lines) property, the one setting the Ribbon control’s height, is expressed in CELLS. It is possible to get the same result writing: "[Lines](../Properties/Lines) *value* CELLS".

**Example** - Display a Ribbon control with height-in-cells

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
          bitmap-width 18
          bitmap-handle icon-png
          handle screen-1-rbn-1-hdl
          .
...
```
