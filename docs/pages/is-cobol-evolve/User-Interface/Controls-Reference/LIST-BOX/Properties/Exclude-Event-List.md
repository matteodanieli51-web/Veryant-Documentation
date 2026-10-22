## Exclude-Event-List

If this property is set to "1", then none of the events in the [Event-List](./Event-List) property are fired.  If this property is set to "0", then only the events listed in the [Event-List](./Event-List) property are fired. If it’s omitted, then all the events are fired. Preventing the runtime from generating some events may speed up performance in client/server environments.

**Note -** Excluding focus change events like CMD-GOTO and MSG-VALIDATE may avoid AFTER and BEFORE embedded procedures to be triggered.

**Example** - Define a list-box with a list of events to be excluded

```cobol
...
  03 screen-1-lb-1 List-Box
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     id 1
     event-list ( cmd-goto cmd-help )
     exclude-event-list 1
     event procedure screen-1-lb-1-evt-proc
     .
```
