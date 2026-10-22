## Grip

When this style is set, a triangle is displayed in the lower right corner of the Status-Bar control. This is usually done to notify the user that the window is resizable and that he can resize it by dragging the rightmost part of the Status-Bar control.

The grip icon can be customized by providing a custom GIF file as described in [Default icons](../../../Working-With-UI-and-Controls/Default-Icons).

**Note:** the triangle is shown only if the Window has the [Resizable](../../WINDOW/Styles/Auto-Resize-Resizable) style.

**Example** - Display a status-bar with grip style

```cobol
working-storage section.
77 screen-1-st-2-hdl handle of status-bar.
...
procedure division.
...
*> Display a Window first to display the status-bar upon it
...
  display status-bar
          grip
          font Default-Font
          background-color 7
          foreground-color 3
          panel-widths ( 30 50)
          panel-style ( 1 2)
          panel-alignment ( "U" "U")
          panel-bitmap ( icon-png2 icon-png2)
          panel-bitmap-width ( 18 18)
          panel-bitmap-number ( 4 5)
          panel-bitmap-alignment ( "U" "U")
          handle screen-1-st-2-hdl
          .
  modify screen-1-st-2-hdl
     panel-index 1
     panel-text "Date: "
     panel-hint "This is the current system date"
     panel-color 516
     panel-index 2
     panel-text "Screen Status: "
     panel-hint "This is the status of the program"
  .
```
