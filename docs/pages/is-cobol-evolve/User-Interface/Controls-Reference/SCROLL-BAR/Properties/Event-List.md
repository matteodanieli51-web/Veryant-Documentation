## Event-List

This property specifies a list of events that may or may not be fired depending on the value of the [Exclude-Event-List](./Exclude-Event-List) property. The property requires a sequence of numeric values. It’s suggested that you use the constant values defined in the [isgui.def](../../../../Appendices/Copybooks/isgui.def) copybook. Multiple values must be enclosed between parenthesis and separated by a space.

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
