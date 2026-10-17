## Notify-Mouse

When this style is set, the IWC-Panel control fires the following events: [MSG-MOUSE-ENTER](../Events/MSG-MOUSE-ENTER), [MSG-MOUSE-EXIT](../Events/MSG-MOUSE-EXIT).

**Example** - Define an iwc-panel that notififes mouse events

```cobol
screen section.
...
  03 screen-1-ip-1 iwc-panel
     line 5.1
     column 4.5
     size 33.5 cells
     lines 25.1 cells
     notify-mouse
     id 1
     js-name "f-map"
     .
...
```
