## Pop-Up Menu

Use this property to associate a pop-up menu with the Ribbon control by assigning a pop-up menu handle to it. The [MSG-INIT-MENU](../Events/MSG-INIT-MENU), [MSG-MENU-INPUT](../Events/MSG-MENU-INPUT) and [MSG-END-MENU](../Events/MSG-END-MENU) events may be generated.

**Example** - Display a Ribbon control with pop-up menu

```cobol
working-storage section.
77 hmenu pic s9(9) comp-4.
...
procedure division.
...
*> Use w$menu to build the pop-up menu before displaying the Ribbon control
...
  display ribbon
          tab-to-add ( "Page-1" "Page-2")
          bitmap-number ( 0 0)
          lines 4.4375
          id 7
          bitmap-width 16
          handle screen-1-rbn-1-hdl
          pop-up menu hmenu
          .
...
```
