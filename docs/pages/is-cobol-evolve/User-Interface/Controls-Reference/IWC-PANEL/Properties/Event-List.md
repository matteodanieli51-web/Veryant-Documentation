## Event-List

This property specifies a list of events that may or may not be fired depending on the value of the [Exclude-Event-List](../../BAR/Properties/Exclude-Event-List) property. The property requires a sequence of numeric values. It’s suggested that you use the constant values defined in the [isgui.def](../../../../Appendices/Copybooks/isgui.def) copybook. Multiple values must be enclosed between parenthesis and separated by a space.

**Example -** Define an iwc-panel including event handling for ntf-iwc-event only

```cobol
screen section.
...
  03 screen-1-ip-1 Iwc-Panel
     line 15.8
     column 33.5
     size 63 pixels
     id 9
     js-name "f-map"
     event-list ( ntf-iwc-event )
     exclude-event-list 0
     .
```
