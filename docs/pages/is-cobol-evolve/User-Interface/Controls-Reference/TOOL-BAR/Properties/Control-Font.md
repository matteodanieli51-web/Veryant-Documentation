## Control Font

Since the Tool-Bar control is a container, the controls it contains may inherit some peculiarities.

The font handle set to this property will be the default value of the FONT Property of the controls created in the Tool-Bar control.

This property also affects the way the cell size is calculated. See the [Cell Height](./Cell-Height), [Cell Size](./Cell-Size), and [Cell Width](./Cell-Width) properties for further details.

See [Font management](../../../Working-With-UI-and-Controls/Creating-a-control/Font-management/Font-management) for information on how to obtain a font handle for this property.

**Example** - Define a tool-bar with 3 buttons and default control font

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
          handle screen-1-tb-1-hdl
  .
  display screen-1-tb-1 upon screen-1-tb-1-hdl.
...
```
