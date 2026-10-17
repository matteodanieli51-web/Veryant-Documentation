## Background-Color

This property allows you to set or retrieve the background color of the Window control.

The value set here is also the default background color of the controls created in the Window control.

See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Display a standard window with background and foreground colors

```cobol
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
          background-color 15
          foreground-color 1
          resizable
          modeless
          title-bar
          no wrap
          title "Screen"
          handle window-handle
          .
...
```
