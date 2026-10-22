## Exclude-Event-List

If this property is set to "1", then none of the events listed in the [Event-List](./Event-List) property are fired. If this property is set to "0", then only the events listed in the [Event-List](./Event-List) property are fired. If it’s omitted, then all the events are fired. Preventing the runtime from generating some events may speed up performance in client/server environments.

**Note -** Excluding focus change events like CMD-GOTO and MSG-VALIDATE may avoid AFTER and BEFORE embedded procedures to be triggered.

**Example** - Define a tree-view with a excluded event list

```cobol
screen section.
...
  03 screen-1-tv-1 Tree-View
     line 2.7
     column 3.4
     size 20.8 cells
     lines 29.1 cells
     color 144
     id 2
     event-list ( cmd-goto cmd-help )
     exclude-event-list 1
     no-box
     .
```
