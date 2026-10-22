## Pop-Up Menu

Use this property to associate a pop-up menu with the Window control by assigning a pop-up menu handle to it. The [MSG-INIT-MENU](../Events/MSG-INIT-MENU), [MSG-MENU-INPUT](../Events/MSG-MENU-INPUT) and [MSG-END-MENU](../Events/MSG-END-MENU) events may be generated.

**Example** - Display a window with pop-up menu

```cobol
working-storage section.
77 window-handle usage handle of window.
77 hmenu pic s9(9) comp-4.
...
procedure division.
...
*> Use w$menu to build the pop-up menu prior to display the window
...
           display standard  window background-low
              screen line 41
              screen column 91
              size 64.0
              lines 48.0
              cell width 10
              cell height 10
              label-offset 20
              control font Default-Font
              color 257
              modeless
              title-bar
              no wrap
              title "Screen"
              handle window-handle
              pop-up menu hmenu
           .
...
```
