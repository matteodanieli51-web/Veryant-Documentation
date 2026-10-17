## Notify-Mouse

When this style is set, the Slider control fires the following events: [MSG-MOUSE-ENTER](../Events/MSG-MOUSE-ENTER), [MSG-MOUSE-EXIT](../Events/MSG-MOUSE-EXIT).

**Example** - Define a horizontal slide-bar that notifies mouse events

```cobol
screen section.
...
  03 screen-1-sl-2 Slider
     line 39.1
     column 12.8
     size 38.4 cells
     lines 3.8 cells
     id 10
     horizontal
     inverted
     notify-mouse
     show-labels
     min-val 10
     max-val 100
     page-size 5
     labels-increment 15
     .
```
