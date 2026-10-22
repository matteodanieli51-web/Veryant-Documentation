## Value

This property represents the value of the Check-Box control.

When inquired, it returns the value that is currently represented. The value is returned according to the [Check-Off-Value](./Check-Off-Value) property (whose default is 0) and the [Check-On-Value](./Check-On-Value) property (whose default is 1).

When set, the Check-Box control changes its look to represent it. When set to the same value of the [Check-Off-Value](./Check-Off-Value) property, or 0 if that property is not set, the Check-Box control is unchecked. When set to any other value, the Check-Box control is checked.

**Example -** Define a check-box in screen section with an initial value of not selected

```cobol
screen section.
...
  03 screen-1-cb-2 Check-Box
     line 27.0
     column 10.0
     size 116
     lines 31
     id 11
     title "E-mail Results?"
     value 0
     .
```
