## Id

This property allows you to assign a unique ID to the Ribbon control.

This is the information the variables *event-control-id* and *control-id* refer to. Both variables are defined in [iscrt.def](../../../../Appendices/Copybooks/iscrt.def).

**Example** - Display a Ribbon control with Id property

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
