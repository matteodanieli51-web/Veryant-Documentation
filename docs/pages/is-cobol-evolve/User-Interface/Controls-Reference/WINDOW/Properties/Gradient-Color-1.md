## Gradient-Color-1

This property allows you to set or retrieve the start color of the gradient effect of the Window control.

If this property is not set, but [Gradient-Color-2](./Gradient-Color-2) is set, then the start color of the gradient effect is black.

The gradient effect overrides the color set by [Background-Color](./Background-Color).

See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Note -** the gradient effect is supported only on graphical screens. If the window includes character based attributes like ERASE or BLANK, or if character based UI is displayed over it, then the gradient effect is not supported.

**Example** - Display a standard window whose background color goes from gray to white

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
          gradient-color-1 rgb x#c0c0c0
          gradient-color-2 rgb x#ffffff
          gradient-orientation gradient-northeast-to-southwest
          resizable
          title "Screen"
          handle window-handle
          .
...
```
