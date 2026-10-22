## Pop-Up Menu

Use this property to associate a pop-up menu with the Bitmap control by assigning a pop-up menu handle to it. The [MSG-INIT-MENU](../Events/MSG-INIT-MENU), [MSG-MENU-INPUT](../Events/MSG-MENU-INPUT) and [MSG-END-MENU](../Events/MSG-END-MENU) events may be generated.

**Example -** Define a bitmap with pop-up menu

```cobol
working-storage section.
77 hmenu pic s9(9) comp-4.
...
screen section.
...
  03 screen-1-bi-1 Bitmap
     pop-up menu hmenu
     line 15.0
     column 33.5
     size 63 pixels
     lines 68 pixels
     font Arial-0v00
     id 9
     .
...
*> Use w$menu in procedure division to build the pop-up menu
...
```
