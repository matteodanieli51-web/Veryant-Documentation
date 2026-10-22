## Notify-Change

This style causes an [NTF-CHANGED](../Events/NTF-CHANGED) event to be fired each time the user changes the content of the Date-Entry control. Without this style, no event is generated under this circumstance.

**Example** - Define a date-entry control that fires notifies when its value changes

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
     notify-change
     value-format davf-yyyymmdd
     calendar-font Default-Font
     .
```
