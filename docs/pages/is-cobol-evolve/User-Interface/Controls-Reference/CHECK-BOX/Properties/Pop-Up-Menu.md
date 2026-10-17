## Pop-Up Menu

Use this property to associate a pop-up menu with the Check-Box control by assigning a pop-up menu handle to it. The [MSG-INIT-MENU](../Events/MSG-INIT-MENU), [MSG-MENU-INPUT](../Events/MSG-MENU-INPUT) and [MSG-END-MENU](../Events/MSG-END-MENU) events may be generated.

**Example -** Define a check-box with pop-up menu

```cobol
working-storage section.
77 hmenu pic s9(9) comp-4.
...
screen section.
...
  03 screen-1-cb-1 Check-Box
     pop-up menu hmenu
     line 4.6
     column 9.0
     size 10.0 cells
     lines 3.7 cells
     id 2
     title "Check-Box"
     .
...
*> Use w$menu in procedure division to build the pop-up menu
...
```
