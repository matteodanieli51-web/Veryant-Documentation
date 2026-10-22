## Vtop

When this style is not set, the default, the title is vertically centered. When it is set, the title is aligned to the top.

**Example -** Define a check-box in screen section with title aligned at the top of the vertical space

```cobol
screen section.
...
 03 screen-1-cb-2 Check-Box
 line 27.0
 column 10.0
 size 116
 lines 30
 id 11
 title "Sugar for you coffee?"
 vtop
     .
```
