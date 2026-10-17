## Exception-Value

If a numeric value different from "0" is set for this property and the [Notify-Selchange](../Styles/Notify-Selchange) style is set, an exception condition for the active screen is generated when the value of the List-Box control is modified.

**Example** - Define a list-box with a exception-value

```cobol
screen section
...
  03 screen-1-lb-1 List-Box
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     id 1
     exception-value 201
     .
```
