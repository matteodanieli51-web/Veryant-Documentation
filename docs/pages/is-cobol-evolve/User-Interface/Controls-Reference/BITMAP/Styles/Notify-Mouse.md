## Notify-Mouse

When this style is set, the Bitmap control fires the following events: [MSG-MOUSE-CLICKED](../Events/MSG-MOUSE-CLICKED), [MSG-MOUSE-DBLCLICK](../Events/MSG-MOUSE-DBLCLICK), [MSG-MOUSE-ENTER](../Events/MSG-MOUSE-ENTER), [MSG-MOUSE-EXIT](../Events/MSG-MOUSE-EXIT).

**Example -** Define a bitmap that fires mouse events using this style

```cobol
screen section.
...
  03 screen-1-bi-3 Bitmap
     line 15.0
     column 33.0
     size 63
     lines 68
     height-in-cells
     width-in-cells
     id 9
     notify-mouse
     visible 0
     .
```
