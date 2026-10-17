## Pop-Up Menu

Use this property to associate a pop-up menu with the Slider control by assigning a pop-up menu handle to it. The [MSG-INIT-MENU](../Events/MSG-INIT-MENU), [MSG-MENU-INPUT](../Events/MSG-MENU-INPUT) and [MSG-END-MENU](../Events/MSG-END-MENU) events may be generated.

**Example** - Define a slide-bar with pop-up menu

```cobol
working-storage section.
77 hmenu pic s9(9) comp-4.
...
screen section.
...
  03 screen-1-sl-1 Slider
     pop-up menu hmenu
     line 34.2
     column 4.6
     size 26.3 cells
     lines 4.9 cells
     id 7
     horizontal
     .
...
*> Use w$menu in procedure division to build the pop-up menu
...
```
