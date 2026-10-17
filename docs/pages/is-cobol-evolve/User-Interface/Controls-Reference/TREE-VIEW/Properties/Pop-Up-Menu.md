## Pop-Up Menu

Use this property to associate a pop-up menu with the Tree-View control by assigning a pop-up menu handle to it. The [MSG-INIT-MENU](../Events/MSG-INIT-MENU), [MSG-MENU-INPUT](../Events/MSG-MENU-INPUT) and [MSG-END-MENU](../Events/MSG-END-MENU) events may be generated.

**Example** - Define a tree-view with pop-up menu

```cobol
working-storage section.
77 hmenu pic s9(9) comp-4.
...
screen section.
...
  03 screen-1-tv-1 Tree-View
     pop-up menu hmenu
     line 32.5
     column 5.2
     size 23.3 cells
     lines 11.6 cells
     id 9
     no-box
     .
...
*> Use w$menu in procedure division to build the pop-up menu
...
```
