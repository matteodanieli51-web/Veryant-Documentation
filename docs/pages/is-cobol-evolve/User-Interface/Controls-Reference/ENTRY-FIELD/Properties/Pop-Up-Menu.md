## Pop-Up Menu

Use this property to associate a pop-up menu with the Entry-Field control by assigning a pop-up menu handle to it. The [MSG-INIT-MENU](../Events/MSG-INIT-MENU), [MSG-MENU-INPUT](../Events/MSG-MENU-INPUT) and [MSG-END-MENU](../Events/MSG-END-MENU) events may be generated.

**Example** - Define an entry-field with pop-up menu

```cobol
working-storage section.
77 hmenu pic s9(9) comp-4.
...
screen section.
...
  03 screen-1-ef-3 Entry-Field
     pop-up menu hmenu
     line 35.8
     column 49.7
     size 11.6 cells
     lines 3.5 cells
     id 20
     3-d
     proposal-delay 400
     .
...
*> Use w$menu in procedure division to build the pop-up menu
...
```
