## Pop-Up Menu

Use this property to associate a pop-up menu with the Tab-Control control by assigning a pop-up menu handle to it. The [MSG-INIT-MENU](../Events/MSG-INIT-MENU), [MSG-MENU-INPUT](../Events/MSG-MENU-INPUT) and [MSG-END-MENU](../Events/MSG-END-MENU) events may be generated.

**Example** - Define a tab-control with pop-up menu

```cobol
working-storage section.
77 hmenu pic s9(9) comp-4.
...
screen section.
...
  03 screen-1-tc-1 Tab-Control
     pop-up menu hmenu
     line 26.8
     column 32.4
     size 20.4 cells
     lines 12.8 cells
     id 8
     bitmap-width 16
     .
...
*> Use w$menu in procedure division to build the pop-up menu
...
```
