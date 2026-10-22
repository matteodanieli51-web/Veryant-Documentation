## Exclude-Event-List

If this property is set to "1", then none of the events in the [Event-List](./Event-List) property are fired.  If this property is set to "0", then only the events listed in the [Event-List](./Event-List) property are fired. If it’s omitted, then all the events are fired. Preventing the runtime from generating some events may speed up performance in client/server environments.

**Note -** Excluding focus change events like CMD-GOTO and MSG-VALIDATE may avoid AFTER and BEFORE embedded procedures to be triggered.

**Example -** Define a combo-box in screen section and define a list of events to be excluded

```cobol
screen section.
...
03 screen-1-co-1 Combo-Box
   line 19.4
   column 23.2
   size 11.9 cells
   lines 11.1
   enabled 0
   id 13
   event-list ( cmd-dblclick msg-validate)
   exclude-event-list 1
   .
...
```
