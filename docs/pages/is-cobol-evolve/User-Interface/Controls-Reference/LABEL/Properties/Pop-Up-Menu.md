## Pop-Up Menu

With this property, it is possible to associate a pop-up menu with the Label control by assigning a pop-up menu handle to it. The [MSG-INIT-MENU](../Events/MSG-INIT-MENU), [MSG-MENU-INPUT](../Events/MSG-MENU-INPUT) and [MSG-END-MENU](../Events/MSG-END-MENU) events may be generated.

**Example** - Define a label with pop-up menu

```cobol
working-storage section.
77 hmenu pic s9(9) comp-4.
...
screen section.
...
  03 screen-1-la-1 Label
     line 4.3
     column 36.7
     size 12.4 cells
     lines 2.9 cells
     id 4
     pop-up menu hmenu
     title "R-Click Menu"
     .
...
*> Use w$menu in procedure division to build the pop-up menu
...
```
