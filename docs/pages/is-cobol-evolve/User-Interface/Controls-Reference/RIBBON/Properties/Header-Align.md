## Header-Align

This property specifies the alignment of the header of the RIBBON control. Possible values are:

|  |  |
| --- | --- |
| 0 | Centered (default) |
| 1 | Left |
| 2 | Right |

**Example** - Display a Ribbon control with left header align

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
          header-align 1
          bitmap-width 18
          bitmap-handle icon-png
          handle screen-1-rbn-1-hdl
          .
...
```
