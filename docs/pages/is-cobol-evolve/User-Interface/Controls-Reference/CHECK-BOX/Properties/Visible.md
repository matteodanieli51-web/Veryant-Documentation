## Visible

This property assumes a value of "0" if the Check-Box control is not visible, "1" if it is visible.

**Example -** Define a check-box in screen section that is not visible and will appear during procedure division

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
 visible 0
     .
...
procedure division.
...
 if drinking-coffee
 modify screen-1-cb-2 visible 1
 end-if.
...
```
