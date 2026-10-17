## Exclude-Event-List

If this property is set to "1", then none of the events in the Event-List property are fired. If this property is set to "0", then only the events listed in the [Event-List](./Event-List) property are fired. If it’s omitted, then all the events are fired. Preventing the runtime from generating some events may speed up performance in client/server environments.

**Example** - Display a Ribbon without firing the cmd-tabchanged event

```cobol
procedure division.
...
  display ribbon
          tab-to-add ( "Page-1" "Page-2")
          bitmap-number ( 0 0)
          lines 4.4375
          color 134
          id 6
          bitmap-width 16
          event-list ( cmd-tabchanged )
          exclude-event-list 1
          handle screen-1-rbn-1-hdl
          .
...
```
