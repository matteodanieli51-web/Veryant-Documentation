## Exclude-Event-List

If this property is set to "1", then none of the events in the [Event-List](./Event-List) property are fired.  If this property is set to "0", then only the events listed in the [Event-List](./Event-List) property are fired. If it’s omitted, then all the events are fired. Preventing the runtime from generating some events may speed up performance in client/server environments.

**Example -** Define a chips-box in screen section and define a list of events to be excluded

```cobol
screen section.
...
03 screen-1-chip-1 Chips-Box
   line 19.4
   column 23.2
   size 11.9 cells
   lines 11.1
   enabled 0
   id 13
   event-list ( msg-menu-input, msg-end-menu, msg-init-menu )
   exclude-event-list 1
   .
...
```
