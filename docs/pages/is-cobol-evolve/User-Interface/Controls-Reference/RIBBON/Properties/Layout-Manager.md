## Layout-Manager

This property associates a Layout Manager with the Ribbon. Four types of Layout Managers (defined in the [isresize.def](../../../../Appendices/Copybooks/isresize.def) Copybook) are supported.

- [LM-RESIZE](../../../Working-With-UI-and-Controls/Creating-a-control/Layout-managers/LM-RESIZE)
- [LM-RESPONSIVE](../../../Working-With-UI-and-Controls/Creating-a-control/Layout-managers/LM-RESPONSIVE)
- [LM-SCALE](../../../Working-With-UI-and-Controls/Creating-a-control/Layout-managers/LM-SCALE)
- [LM-WRAP](../../../Working-With-UI-and-Controls/Creating-a-control/Layout-managers/LM-WRAP)

**Example** - Display a Ribbon control with layout manager

```cobol
procedure division.
...
  display ribbon
          tab-to-add ( "Ops 1" "Ops 2")
          bitmap-number ( 0 0)
          lines 4.4375
          color 134
          enabled 0
          id 6
          hint "Ribbon tool bar"
          collapse 1
          header-align 1
          layout-manager lm-resize
          bitmap-width 18
          bitmap-handle icon-png
          handle screen-1-rbn-1-hdl
          .
...
```
