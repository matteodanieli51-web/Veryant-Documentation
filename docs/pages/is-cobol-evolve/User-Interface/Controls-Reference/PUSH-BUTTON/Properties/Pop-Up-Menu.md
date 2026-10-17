## Pop-Up Menu

Use this property to associate a pop-up menu with the Push-Button control by assigning a pop-up menu handle to it. The [MSG-INIT-MENU](../Events/MSG-INIT-MENU), [MSG-MENU-INPUT](../Events/MSG-MENU-INPUT) and [MSG-END-MENU](../Events/MSG-END-MENU) events may be generated.

**Example** - Define a push-button with pop-up menu

```cobol
working-storage section.
77 hmenu pic s9(9) comp-4.
...
screen section.
...
  03 screen-1-pb-1 Push-Button
     pop-up menu hmenu
     line 13.7
     column 38.1
     size 11.7 cells
     lines 3.6 cells
     id 5
     title "R-Click Menu"
     .
...
*> Use w$menu in procedure division to build the pop-up menu
...
```
