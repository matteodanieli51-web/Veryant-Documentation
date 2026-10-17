## Notify-Mouse

When this style is set, the Date-Entry control fires the following events: [MSG-MOUSE-ENTER](../Events/MSG-MOUSE-ENTER), [MSG-MOUSE-EXIT](../Events/MSG-MOUSE-EXIT).

**Example** - Define a date-entry control that fires mouse events

```cobol
screen section.
...
  03 screen-1-de-2 Date-Entry
     line 28.5
     column 49.7
     size 13.6 cells
     lines 4.3 cells
     id 18
     century-date
     notify-mouse
     value-format davf-yyyymmdd
     calendar-font Default-Font
     .
```
