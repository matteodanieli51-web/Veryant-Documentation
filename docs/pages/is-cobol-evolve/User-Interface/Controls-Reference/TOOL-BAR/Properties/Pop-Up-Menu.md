## Pop-Up Menu

Use this property to associate a pop-up menu with the Tool-Bar control by assigning a pop-up menu handle to it. The [MSG-INIT-MENU](../Events/MSG-INIT-MENU), [MSG-MENU-INPUT](../Events/MSG-MENU-INPUT) and [MSG-END-MENU](../Events/MSG-END-MENU) events may be generated.

**Example** - Display a tool-bar with a pop-up menu

```cobol
working-storage section.
77 hmenu pic s9(9) comp-4.
...
procedure division.
...
  display tool-bar
          cell width 10
          cell height 10
          control font Default-Font
          color 232
          lines 4.0
          pop-up menu hmenu
          handle screen-1-tb-1-hdl
          .
```
