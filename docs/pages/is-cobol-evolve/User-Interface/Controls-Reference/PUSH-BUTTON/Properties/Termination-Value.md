## Termination-Value

If this property is set to a numeric value different from "0", a termination condition for the active screen is generated when the Push-Button control is clicked.

**Example** - Define a push-button with a specific termination value

```cobol
screen section.
...
  03 screen-1-pb-2 Push-Button
     termination-value 2055
     line 5.2
     column 18.3
     size 9.3 cells
     lines 2.4 cells
     id 2
     title "Disable"
     .
```
