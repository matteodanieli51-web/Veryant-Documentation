## Exclude-Event-List

If this property is set to "1", then none of the events in the [Event-List](./Event-List) property are fired. If this property is set to "0", then only the events listed in the [Event-List](./Event-List) property are fired. If it’s omitted, then all the events are fired. Preventing the runtime from generating some events may speed up performance in client/server environments.

**Example -** Define a label including event handling for mouse-enter and mouse-exit only

```cobol
screen section.
...
  03 screen-1-la-1 Label
     line 15.8
     column 33.5
     size 63 pixels
     id 9
     notify-mouse
     event-list ( msg-mouse-enter msg-mouse-exit)
     exclude-event-list 0
     .
```
