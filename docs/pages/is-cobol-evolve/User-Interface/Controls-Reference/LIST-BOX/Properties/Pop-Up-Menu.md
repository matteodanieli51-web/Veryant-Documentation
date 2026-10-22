## Pop-Up Menu

Use this property to associate a pop-up menu with the List-Box control by assigning a pop-up menu handle to it. The [MSG-INIT-MENU](../Events/MSG-INIT-MENU), [MSG-MENU-INPUT](../Events/MSG-MENU-INPUT) and [MSG-END-MENU](../Events/MSG-END-MENU) events may be generated.

**Example** - Define a list-box with pop-up menu

```cobol
working-storage section.
77 hmenu pic s9(9) comp-4.
...
screen section.
...
  03 screen-1-lb-1 List-Box
     pop-up menu hmenu
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     id 1
     .
...
*> Use w$menu in procedure division to build the pop-up menu
...
```
