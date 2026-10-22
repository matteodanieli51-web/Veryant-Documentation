## Pop-Up Menu

Use this property to associate a pop-up menu with the Combo-Box control by assigning a pop-up menu handle to it. The [MSG-INIT-MENU](../Events/MSG-INIT-MENU), [MSG-MENU-INPUT](../Events/MSG-MENU-INPUT) and [MSG-END-MENU](../Events/MSG-END-MENU) events may be generated.

**Example -** Define a combo-box with pop-up menu

```cobol
working-storage section.
77 hmenu pic s9(9) comp-4.
...
screen section.
...
  03 screen-1-co-1 Combo-Box
     pop-up menu hmenu
     line 19.0
     column 23.0
     size 12.0 cells
     lines 11.0
     id 13
     max-width 20.0
     layout-data 17
     3-d
     drop-down
     .
...
*> Use w$menu in procedure division to build the pop-up menu
...
```
