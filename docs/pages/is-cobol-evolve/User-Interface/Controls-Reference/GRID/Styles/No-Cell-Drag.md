## No-Cell-Drag

When this style is set, the following events are not fired: [MSG-BEGIN-DRAG](../Events/MSG-BEGIN-DRAG), [MSG-GOTO-CELL-DRAG](../Events/MSG-GOTO-CELL-DRAG) and [MSG-END-DRAG](../Events/MSG-END-DRAG). This style overrides the [iscobol.gui.grid.no_cell_drag (boolean) \*](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) configuration property.

**Example** - Define a grid with no-cell-drag style

```cobol
screen section.
...
  03 screen-1-gr-1 Grid
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     id 1
     event procedure screen-1-gr-1-evt-proc
     boxed
     no-cell-drag
     centered-headings
     column-headings
     adjustable-rows
     adjustable-columns
     hscroll
     reordering-columns
     lm-on-columns 1
     row-dividers 1
     end-color 9
     heading-color 200
     heading-divider-color 12
     cursor-frame-width 3
     num-col-headings 1
     num-rows 5
     .
```
