## Termination-Value

If this property is set to a numeric value different from "0" and the [Notify](../Styles/Notify) style is set, a termination condition for the active screen is generated when the value of the Radio-Button control is modified.

**Example** - Define a radio button with a termination value

```cobol
screen section.
...
  03 screen-1-rb-2 Radio-Button
     termination-value 4001
     line 20.6
     column 21.7
     size 10.9 cells
     lines 5.4 cells
     id 5
     max-width 40.0
     min-width 10.0
     min-height 5.0
     max-height 20.0
     layout-data 17
     title "Option 2"
     .
```
