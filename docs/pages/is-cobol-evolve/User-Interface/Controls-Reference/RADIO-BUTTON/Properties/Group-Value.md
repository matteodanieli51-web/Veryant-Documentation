## Group-Value

This property sets the value that makes a Radio-Button control selected.

When the Radio-Button control is displayed, it is selected if the value of the GROUP-VALUE property is the same as the value of the [Value](./Value) property.

When the user selects a Radio-Button control, the value of the [Value](./Value) property is set to the value of the GROUP-VALUE property.

The value can be either numeric or alphanumeric.

**Example** - Define a radio button in one group and make it the selected in the group

```cobol
screen section.
...
  03 screen-1-rb-2 Radio-Button
     line 20.6
     column 21.7
     size 10.9 cells
     lines 5.4 cells
     id 5
     title "Option 2"
     group 1
     group-value 2
     value 2
     .
```
