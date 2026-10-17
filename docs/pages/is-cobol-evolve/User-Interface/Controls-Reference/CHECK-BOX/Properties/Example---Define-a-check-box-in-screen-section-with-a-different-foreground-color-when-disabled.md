## Example - Define a check-box in screen section with a different foreground color when disabled

```cobol
screen section.
...
  03 screen-1-cb-1 Check-Box
     line 22.0
     column 10.0
     size 11.0 cells
     lines 3.0 cells
     foreground-color 3
     disabled-foreground-color 4
     id 10
     title "Sugar with the coffee?"
     .
```
