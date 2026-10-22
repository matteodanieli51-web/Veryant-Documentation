## Foreground-Color

This property allows you to set or retrieve the foreground color of the Tool-Bar control.

The value set here is also the default foreground color of the controls created in the Tool-Bar control.

See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a tool-bar with 3 buttons and foreground and background color

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
          cell width 10
          cell height 10
          control font Default-Font
          background-color 6
          foreground-color 7
          lines 4.0
          handle screen-1-tb-1-hdl
  .
  display screen-1-tb-1 upon screen-1-tb-1-hdl.
...
```
