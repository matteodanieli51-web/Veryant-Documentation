## Cell Size

This property defines the size (both height and width) of the cell used for positioning the various controls inside the Tool-Bar control.

The value must comply with the following specification:

```cobol
{ ControlType FONT [FontHandle] [SEPARATE]   }
{                               [OVERLAPPED] }
```

The cell size is the space the ControlType needs to show the character "0" without truncating it. ControlType can be LABEL, the default, or ENTRY-FIELD. When ENTRY-FIELD is specified, the cell is larger.

FontHandle is the font used to calculate the cell size. If not specified, the font set in the [Control Font](./Control-Font) property will be used.

When the SEPARATE clause is specified, the cell size is increased, so that controls placed on contiguous lines or columns are not too close to each other.

When the OVERLAPPED clause is specified, the cell size is left unchanged and controls placed on contiguous lines or columns look joint. This is the default setting.

**Example** - Define a tool-bar with 3 buttons and cell size

```cobol
screen section.
...
  01 screen-1-tb-1.
     03 screen-1-pb-4 Push-Button
        line 1.7
        column 2.4
        size 5.2 cells
        lines 2.6 cells
        id 11
        title "Exit"
        .
     03 screen-1-pb-5 Push-Button
        line 1.7
        column 13.0
        size 5.2 cells
        lines 2.6 cells
        id 12
        title ">"
        .
     03 screen-1-pb-6 Push-Button
        line 1.7
        column 20.1
        size 5.2 cells
        lines 2.6 cells
        id 13
        title "<"
        .
...
procedure division.
...
  display tool-bar
          cell size 12
          control font Default-Font
          background-color 6
          foreground-color 7
          lines 4.0
          handle screen-1-tb-1-hdl
  .
  display screen-1-tb-1 upon screen-1-tb-1-hdl.
...
```
