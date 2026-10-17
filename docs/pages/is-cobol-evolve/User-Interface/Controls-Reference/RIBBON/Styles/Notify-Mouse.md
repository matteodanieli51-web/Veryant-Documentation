## Notify-Mouse

When this style is set, the Ribbon control fires the following events: [MSG-MOUSE-CLICKED](../Events/MSG-MOUSE-CLICKED), [MSG-MOUSE-DBLCLICK](../Events/MSG-MOUSE-DBLCLICK), [MSG-MOUSE-ENTER](../Events/MSG-MOUSE-ENTER), [MSG-MOUSE-EXIT](../Events/MSG-MOUSE-EXIT).

**Example** - Display a Ribbon control that notififes mouse events

```cobol
procedure division.
...
  display ribbon
          tab-to-add ( "Ops 1" "Ops 2" "Ops 3")
          bitmap-number ( 0 0 0)
          lines 4.4375
          color 134
          id 6
          hint "Ribbon tool bar"
          height-in-cells
          notify-mouse
          collapse 1
          header-align 1
          bitmap-width 18
          bitmap-handle icon-png
          handle screen-1-rbn-1-hdl
          .
...
```
