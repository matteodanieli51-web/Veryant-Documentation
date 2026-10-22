## Event-List

This property specifies a list of events that may or may not be fired depending on the value of the [Exclude-Event-List](./Exclude-Event-List) property. The property requires a sequence of numeric values. It’s suggested that you use the constant values defined in the [isgui.def](../../../../Appendices/Copybooks/isgui.def) copybook. Multiple values must be enclosed between parenthesis and separated by a space.

**Example -** Define a check-box in screen section and exclude events to prevent them firing

```cobol
screen section.
...
  03 screen-1-cb-2 Check-Box
     line 27.0
     column 10.0
     size 116
     lines 31
     id 11
     event-list ( cmd-clicked msg-validate)
     exclude-event-list 1
     flat
     title "My Check Box"
     .
```
