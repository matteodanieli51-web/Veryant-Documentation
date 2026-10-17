## Exclude-Event-List

If this property is set to "1", then none of the events in the [Event-List](./Event-List) property are fired. If this property is set to "0", then only the events listed in the [Event-List](./Event-List) property are fired. If it’s omitted, then all the events are fired. Preventing the runtime from generating some events may speed up performance in client/server environments.

**Note -** Excluding focus change events like CMD-GOTO and MSG-VALIDATE may avoid AFTER and BEFORE embedded procedures to be triggered.

**Example** - Define a scroll-bar with excluded event list

```cobol
screen section.
...
          03 screen-1-sb-1 Scroll-Bar
             line 4.0
             column 41.5
             size 2.9 cells
             lines 39.7 cells
             color 229
             id 5
             event-list ( cmd-goto cmd-help )
             exclude-event-list 1
             .
...
```
