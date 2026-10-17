## Exclude-Event-List

If this property is set to "1", then none of the events in the [Event-List](./Event-List) property are fired.  If this property is set to "0", then only the events listed in the [Event-List](./Event-List) property are fired. If it’s omitted, then all the events are fired. Preventing the runtime from generating some events may speed up performance in client/server environments.

**Note -** Excluding focus change events like CMD-GOTO and MSG-VALIDATE may avoid AFTER and BEFORE embedded procedures to be triggered.

**Example** - Define a slide-bar with a list of events to be excluded

```cobol
screen section.
...
  03 screen-1-sl-1 Slider
     line 33.1
     column 12.8
     size 38.2 cells
     lines 3.0 cells
     color 135
     id 9
     event-list ( cmd-goto cmd-help )
     exclude-event-list 1
     horizontal
     .
```
