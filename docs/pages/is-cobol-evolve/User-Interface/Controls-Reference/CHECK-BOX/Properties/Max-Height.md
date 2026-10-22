## Max-Height

The control's maximum height. This setting will affect the Layout Manager’s behavior

**Example -** Define a check-box with a maximum height if getting resized by layout manager

```cobol
screen section.
...
03 screen-1-cb-1 Check-Box
   line 22.0
   column 10.0
   size 11.0 cells
   lines 3.0 cells
   id 10
   max-width 20.0
   min-width 12.0
   min-height 1.0
   max-height 4.0
   .
```
