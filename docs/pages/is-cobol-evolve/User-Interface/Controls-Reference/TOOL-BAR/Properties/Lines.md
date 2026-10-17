## Lines

This property allows you to specify the height of the Tool-Bar control. Decimal values are allowed.

**Example** - Define a tool-bar with 3 buttons and lines 4

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
          color 232
          lines 4.0
          layout-manager lm-resize
          handle screen-1-tb-1-hdl
          .
```
