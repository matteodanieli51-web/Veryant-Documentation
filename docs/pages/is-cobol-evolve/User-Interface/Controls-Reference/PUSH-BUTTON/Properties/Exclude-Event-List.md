## Exclude-Event-List

If this property is set to "1", then none of the events in the [Event-List](./Event-List) property are fired. If this property is set to "0", then only the events listed in the [Event-List](./Event-List) property are fired. If it’s omitted, then all the events are fired. Preventing the runtime from generating some events may speed up performance in client/server environments.

**Note -** Excluding focus change events like CMD-GOTO and MSG-VALIDATE may avoid AFTER and BEFORE embedded procedures to be triggered.

**Example** - Define a list of events that will be not fired for a push button

```cobol
screen section.
...
  03 screen-1-pb-2 Push-Button
     line 5.2
     column 18.3
     size 9.3 cells
     lines 2.4 cells
     id 2
     event-list ( cmd-goto msg-validate )
     exclude-event-list 1
     title "Accept"
     .
```
