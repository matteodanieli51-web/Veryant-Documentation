## Self-Act

When this style is set, all events that the Date-Entry control fires are trapped and no Event Procedure is started.

**Example** - Define a date-entry control that fires no events

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
     value-format davf-yyyymmdd
     calendar-font Default-Font
     self-act
     .
```
