## Layout-Manager

This property associates a Layout Manager with the Window. The following Layout Managers (defined in the [isresize.def](../../../../Appendices/Copybooks/isresize.def) Copybook) are supported.

- [LM-RESIZE](../../../Working-With-UI-and-Controls/Creating-a-control/Layout-managers/LM-RESIZE)
- [LM-RESPONSIVE](../../../Working-With-UI-and-Controls/Creating-a-control/Layout-managers/LM-RESPONSIVE)
- [LM-SCALE](../../../Working-With-UI-and-Controls/Creating-a-control/Layout-managers/LM-SCALE)
- [LM-ZOOM](../../../Working-With-UI-and-Controls/Creating-a-control/Layout-managers/LM-ZOOM)

**Example** - Display a window with a layout manager

```cobol
working-storage section.
77 window-handle usage handle of window.
...
procedure division.
...
  display standard  window background-low
          screen line 41
          screen column 91
          size 64.0
          lines 55.8
          cell width 10
          cell height 10
          label-offset 20
          control font Default-Font
          color 260
          resizable
          modeless
          title-bar
          no wrap
          title "Screen"
          layout-manager lm-resize
          handle window-handle
          .
```
