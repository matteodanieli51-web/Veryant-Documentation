## Value

This property represents the value of a group of Radio-Buttons.

When inquired, it returns the value that is currently represented in the group. For example, having these three buttons:

```cobol
  03 rb1 radio-button group 1, group-value 1.
  03 rb2 radio-button group 1, group-value 2.
  03 rb3 radio-button group 1, group-value 3.
```

if the third one is selected, any of these three statements:

```cobol
inquire rb1 value dst-item.
inquire rb2 value dst-item.
inquire rb3 value dst-item.
```

will set *dst-item* to "3".

To make a Radio-Button control selected, it must be set to the value of its [Group-Value](./Group-Value) property. For example, considering the above group of buttons, if you want to activate the second one, use:

```cobol
modify rb2 value 2.
```

if you want to activate the third one, instead, use:

```cobol
modify rb3 value 3.
```

**Example** - Define a radio button in one group and make it the selected in the group with the value equal to the group-value

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
