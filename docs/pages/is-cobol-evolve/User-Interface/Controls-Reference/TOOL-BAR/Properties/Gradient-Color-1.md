## Gradient-Color-1

This property allows you to set or retrieve the start color of the gradient effect of the Tool-Bar control.

If this property is not set, but [Gradient-Color-2](./Gradient-Color-2) is set, then the start color of the gradient effect is black.

The gradient effect overrides the color set by [Background-Color](./Background-Color).

See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a tool-bar whose background color goes from gray to white

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
          gradient-color-1 rgb x#c0c0c0
          gradient-color-2 rgb x#ffffff
          gradient-orientation gradient-northeast-to-southwest
          lines 4.0
          handle screen-1-tb-1-hdl
  .
  display screen-1-tb-1 upon screen-1-tb-1-hdl.
...
```
