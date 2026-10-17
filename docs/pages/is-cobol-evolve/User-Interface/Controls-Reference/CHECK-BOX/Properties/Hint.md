## Hint

This property allows you to define the text shown in the window that pops up when the mouse pointer is placed on the Check-Box control.

Note - If the [Bitmap](../Styles/Bitmap) style is set, no [Title-Position](./Title-Position) has been specified and both [Title](./Title) and [Hint](./Hint) have been set, then the [Title](./Title) text is used for the tool-tip.

**Example -** Define a check-box with a hint text

```cobol
screen section.
...
  03 screen-1-cb-2 Check-Box
     line 27.0
     column 10.0
     size 156
     lines 31
     hint "Press this check box to accept the above terms"
     id 11
     .
```
