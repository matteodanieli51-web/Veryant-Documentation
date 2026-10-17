## Exclude-Event-List

If this property is set to "1", then none of the events in the [Event-List](./Event-List) property are fired. If this property is set to "0", then only the events listed in the [Event-List](./Event-List) property are fired. If it’s omitted, then all the events are fired. Preventing the runtime from generating some events may speed up performance in client/server environments.

**Example** - Define a web-browser control with a list of excluded events

```cobol
screen section.
...
  03 screen-1-wb-1 Web-Browser
     line 23.1
     column 2.0
     size 62.2 cells
     lines 28.0 cells
     id 15
     event-list ( cmd-goto cmd-help )
     exclude-event-list 1
     value "https://www.veryant.com"
     .
```
