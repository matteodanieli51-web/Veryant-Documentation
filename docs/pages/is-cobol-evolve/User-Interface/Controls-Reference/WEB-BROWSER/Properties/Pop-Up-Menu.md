## Pop-Up Menu

Use this property to associate a pop-up menu with the Web-Browser control by assigning a pop-up menu handle to it. The [MSG-INIT-MENU](../../WINDOW/Events/MSG-INIT-MENU), [MSG-MENU-INPUT](../../WINDOW/Events/MSG-MENU-INPUT) and [MSG-END-MENU](../../WINDOW/Events/MSG-END-MENU) events may be generated.

This property is ignored by the [SWTWebBrowser](../WEB-BROWSER) the [JXWebBrowser](../WEB-BROWSER) implementations, and the default browser’s menu will display instead.

There are three possibilities with the [JFXWebBrowser](../WEB-BROWSER) implementation:

- if the property is set to a valid menu handle, the menu indicated by the handle is shown,
- if the property is set to zero, no menu is shown,
- if the property is not set, the default browser’s menu is shown.

**Example** - Define a web-browser with pop-up menu

```cobol
working-storage section.
77 hmenu pic s9(9) comp-4.
...
screen section.
...
  03 screen-1-wb-1 Web-Browser
     pop-up menu hmenu
     line 32.5
     column 5.2
     size 23.3 cells
     lines 11.6 cells
     id 9
     .
...
*> Use w$menu in procedure division to build the pop-up menu
...
```
