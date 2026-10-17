## Pop-Up Menu

Use this property to associate a pop-up menu with the Radio-Button control by assigning a pop-up menu handle to it. The [MSG-INIT-MENU](../Events/MSG-INIT-MENU), [MSG-MENU-INPUT](../Events/MSG-MENU-INPUT) and [MSG-END-MENU](../Events/MSG-END-MENU) events may be generated.

**Example** - Define a radio button with pop-up menu

```cobol
working-storage section.
77 hmenu pic s9(9) comp-4.
...
screen section.
...
  03 screen-1-rb-1 Radio-Button
     pop-up menu hmenu
     line 25.9
     column 5.1
     size 14.3 cells
     lines 3.4 cells
     id 6
     title "R-Click Menu"
     .
...
*> Use w$menu in procedure division to build the pop-up menu
...
```
