## Group

This numeric property assigns a Radio-Button control to a group. Every group has a different number. In a group, only one Radio-Button control can be selected at a time. When the user selects a Radio-Button control, all the others in the same group are automatically unselected.

The default GROUP value is 1.

Radio buttons with a GROUP value of 0 do not perform any checks to ensure that only one button is selected. Each one may be independently selected, like if they’re check boxes.

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
