## Exception-Value

If a numeric value different from "0" is set for this property and the [Notify](../Styles/Notify) style is set, an exception condition for the active screen is generated when the value of the Radio-Button control is modified.

**Example** - Define a radio button with an exception value to be evaluated on an exception paragraph

```cobol
screen section.
...
  03 screen-1-rb-2 Radio-Button
     exception-value 4001
     line 20.6
     column 21.7
     size 10.9 cells
     lines 5.4 cells
     id 5
     title "Option 2"
     .
```
