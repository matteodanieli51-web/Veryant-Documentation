## Notify-Mouse

When this style is set, the Scroll-Bar control fires the following events: [MSG-MOUSE-ENTER](../Events/MSG-MOUSE-ENTER), [MSG-MOUSE-EXIT](../Events/MSG-MOUSE-EXIT).

**Example** - Define a horizontal scroll-bar that fires mouse events

```cobol
screen section.
...
  03 screen-1-sb-2 Scroll-Bar
     line 39.1
     column 12.8
     size 38.4
     lines 3.8
     id 10
     horizontal
     notify-mouse
     .
```
