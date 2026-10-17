## Pop-Up Menu

With this property, it is possible to associate a pop-up menu with the Grid control by assigning a pop-up menu handle to it. The [MSG-INIT-MENU](../Events/MSG-INIT-MENU), [MSG-MENU-INPUT](../Events/MSG-MENU-INPUT) and [MSG-END-MENU](../Events/MSG-END-MENU) events may be generated.

**Example** - Define a grid with pop-up menu

```cobol
working-storage section.
77 hmenu pic s9(9) comp-4.
...
screen section.
...
  03 screen-1-gr-1 Grid
     pop-up menu hmenu
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     id 1
     event procedure screen-1-gr-1-evt-proc
     no-box
     column-headings
     hscroll
     row-headings
     lm-on-columns 1
     row-dividers 1
     end-color 9
     cursor-frame-width 3
     num-rows 5
     .
...
*> Use w$menu in procedure division to build the pop-up menu
...
```
