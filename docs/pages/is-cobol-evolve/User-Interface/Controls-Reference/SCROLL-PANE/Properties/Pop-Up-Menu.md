## Pop-Up Menu

Use this property to associate a pop-up menu with the Scroll-Pane control by assigning a pop-up menu handle to it. The [MSG-INIT-MENU](../Events/MSG-INIT-MENU), [MSG-MENU-INPUT](../Events/MSG-MENU-INPUT) and [MSG-END-MENU](../Events/MSG-END-MENU) events may be generated.

**Example** - Define a scroll-pane with pop-up menu

```cobol
working-storage section.
77 hmenu pic s9(9) comp-4.
...
screen section.
...
  03 screen-1-sp-1 Scroll-Pane
     pop-up menu hmenu
     line 4.0
     column 41.5
     size 2.9 cells
     lines 39.7 cells
     color 229
     help-id 3029
     id 5
     .
...
procedure division.
...
*> Use w$menu in procedure division to build the pop-up menu
...
```
