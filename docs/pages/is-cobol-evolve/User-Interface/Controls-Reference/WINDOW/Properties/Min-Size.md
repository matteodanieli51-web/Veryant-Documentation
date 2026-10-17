## Min-Size

The value set here establishes the minimum width of the window. This property is used in conjunction with either the [RESIZABLE](../Styles/Auto-Resize-Resizable) style or the [AUTO-RESIZE](../Styles/Auto-Resize-Resizable) style.

**Example** - Display a window with resizable style and maximum and minimum dimensions when resizing

```cobol
working-storage section.
77 window-handle1 usage handle of window.
...
procedure division.
...
  display standard  window background-low
          screen line 41
          screen column 91
          size 22.1
          lines 18.1
          cell width 10
          cell height 10
          label-offset 20
          control font Default-Font
          color 257
          resizable
          modeless
          title-bar
          no wrap
          title "Screen"
          max-size 50.0
          min-size 5.0
          min-lines 5.0
          max-lines 30.0
          handle window-handle
          .
```
