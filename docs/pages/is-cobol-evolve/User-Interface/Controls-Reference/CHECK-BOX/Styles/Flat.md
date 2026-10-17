## Flat

When this style is set, the Check-Box control has no 3-D effect. When the mouse pointer is moved over the Check-Box control, it is highlighted.

**Example -** Define a check-box in screen section with style flat

```cobol
screen section.
...
  03 screen-1-cb-2 Check-Box
     line 27.0
     column 10.0
     size 116
     lines 31
     id 11
     title "Sugar for you coffee?"
     flat
     .
```
