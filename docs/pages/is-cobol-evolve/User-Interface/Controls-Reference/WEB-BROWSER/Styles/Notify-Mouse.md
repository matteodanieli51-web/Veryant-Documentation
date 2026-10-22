## Notify-Mouse

When this style is set, the Web-Browser control fires the following events: [MSG-MOUSE-ENTER](../Events/MSG-MOUSE-ENTER), [MSG-MOUSE-EXIT](../Events/MSG-MOUSE-EXIT).

**Example** - Define a web-browser control that notifies mouse events

```cobol
screen section.
...
  03 screen-1-wb-1 Web-Browser
     line 23.9
     column 2.2
     size 62.2 cells
     lines 25.6 cells
     id 15
     notify-mouse
     value "https://www.veryant.com"
     .
```
