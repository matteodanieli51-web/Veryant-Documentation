## Exception-Value

If a numeric value different from "0" is set for this property and the [Notify](../Styles/Notify) style is set, an exception condition for the active screen is generated when the value of the Check-Box control is modified.

**Example -** Define a check-box in screen section that raises an exception when it is clicked

```cobol
screen section.
...
  03 screen-1-cb-2 Check-Box
    exception-value 2090
    line 27.7
    column 10.6
    size 116
    lines 31
    id 11
    notify
    .
```
