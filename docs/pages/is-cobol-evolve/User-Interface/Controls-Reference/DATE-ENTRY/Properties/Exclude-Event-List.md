## Exclude-Event-List

If this property is set to "1", then none of the events in the [Event-List](./Event-List) property are fired.  If this property is set to "0", then only the events listed in the [Event-List](./Event-List) property are fired. If it’s omitted, then all the events are fired. Preventing the runtime from generating some events may speed up performance in client/server environments.

**Note -** Excluding focus change events like CMD-GOTO and MSG-VALIDATE may avoid AFTER and BEFORE embedded procedures to be triggered.

**Example -** Define a date-entry control with an event list to be excluded

```cobol
screen section.
...
  03 screen-1-de-1 Date-Entry
     line 21.2
     column 49.5
     size 14.5 cells
     lines 3.1 cells
     enabled 0
     id 17
     event-list ( msg-validate ntf-changed)
     exclude-event-list 1
     century-date
     value-format davf-yyyymmdd
     .
```
