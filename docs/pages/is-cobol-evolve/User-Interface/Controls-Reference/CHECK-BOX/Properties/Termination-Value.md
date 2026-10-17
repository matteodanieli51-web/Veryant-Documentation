## Termination-Value

If this property is set to a numeric value different from "0" and the [Notify](../Styles/Notify) style is set, a termination condition for the active screen is generated when the value of the Check-Box control is modified.

**Example -** Define a check-box in screen section that raises a termination value when it is clicked

```cobol
screen section.
...
  03 screen-1-cb-2 Check-Box
    termination-value 2090
    line 27.7
    column 10.6
    size 116
    lines 31
    id 11
    notify
    .
```
