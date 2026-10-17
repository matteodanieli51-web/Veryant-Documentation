## Pop-Up Menu

With this property, it is possible to associate a pop-up menu with the IWC-Panel control by assigning a pop-up menu handle to it. The [MSG-INIT-MENU](../Events/MSG-INIT-MENU), [MSG-MENU-INPUT](../Events/MSG-MENU-INPUT) and [MSG-END-MENU](../Events/MSG-END-MENU) events may be generated.

**Example** - Define an iwc-panel with pop-up menu

```cobol
working-storage section.
77 hmenu pic s9(9) comp-4.
...
screen section.
...
  03 screen-1-ip-1 iwc-panel
     line 5.1
     column 4.5
     size 33.5 cells
     lines 25.1 cells
     background-color 8
     foreground-color 3
     id 1
     js-name "f-map"
     pop-up menu hmenu
     .
...
*> Use w$menu in procedure division to build the pop-up menu
...
```
