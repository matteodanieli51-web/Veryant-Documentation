## Cell Width

This property defines the width of the cell used for positioning the various controls inside the Window control.

The value must comply with the following specification:

```cobol
{ Pixels                                     }
{ ControlType FONT [FontHandle] [SEPARATE]   }
{                               [OVERLAPPED] }
```

Refer to the [Cell Size](./Cell-Size) property for a more detailed explanation.

**Example** - Display a standard window with cell height and width

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
          background-color 15
          foreground-color 1
          resizable
          modeless
          title-bar
          no wrap
          title "Screen"
          handle window-handle
          .
```
