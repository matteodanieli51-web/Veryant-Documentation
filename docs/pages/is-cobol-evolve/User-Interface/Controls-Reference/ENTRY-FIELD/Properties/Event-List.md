## Event-List

This property specifies a list of events that may or may not be fired depending on the value of the [Exclude-Event-List](./Exclude-Event-List) property. The property requires a sequence of numeric values. It’s suggested that you use the constant values defined in the [isgui.def](../../../../Appendices/Copybooks/isgui.def) copybook. Multiple values must be enclosed between parenthesis and separated by a space.

**Example** - Define an entry-field with a list of events to be excluded

```cobol
screen section.
...
  03 screen-1-ef-3 Entry-Field
     line 35.8
     column 49.7
     size 11.6 cells
     lines 3.5 cells
     id 20
     event-list ( msg-validate ntf-changed)
     exclude-event-list 1
     3-d
     .
```
