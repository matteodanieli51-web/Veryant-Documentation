## Cell Size

This property defines the size (both height and width) of the cell used for positioning the various controls inside the Window control.

The value must comply with the following specification:

```cobol
{ ControlType FONT [FontHandle] [SEPARATE]   }
{                               [OVERLAPPED] }
```

The cell size is the space the ControlType needs to show the character "0" without truncating it. ControlType can be LABEL, the default, or ENTRY-FIELD. When ENTRY-FIELD is specified, the cell is larger.

FontHandle is the font used to calculate the cell size. If not specified, the font set in the [Control Font](./Control-Font) property will be used.

When the SEPARATE clause is specified, the cell size is increased, so that controls placed on contiguous lines or columns are not too close to each other.

When the OVERLAPPED clause is specified, the cell size is left unchanged and controls placed on contiguous lines or columns look joint. This is the default setting.

**Example** - Display a standard window with cell size in one property only

```cobol
working-storage section.
77 window-handle usage handle of window.
procedure division.
...
  display standard  window background-low
          screen line 41
          screen column 91
          size 64.0
          lines 55.8
          label-offset 20
          control font Default-Font
          background-color 15
          foreground-color 1
          resizable
          modeless
          title-bar
          no wrap
          title "Screen"
          cell size 10
          handle window-handle
          .
```
