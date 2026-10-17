## Bitmap-Handle

This property identifies the bitmap strip handle to be used for the button that opens the calendar.

If this property points to an animated GIF, then the button renders the animation.

**Example -** Define a date-entry control with specific bitmap image for the calendar button

```cobol
working-storage section.
77 icon-png1 pic s9(9) comp-4.
...
screen section.
...
  03 screen-1-de-1 Date-Entry
     line 21.2
     column 49.5
     size 14.5 cells
     lines 3.1 cells
     id 17
     century-date
     value-format davf-yyyymmdd
     bitmap-number 11
     bitmap-width 18
     bitmap-handle icon-png1.
...
procedure division.
...
  call "w$bitmap" using wbitmap-load "icon.png" giving
  icon-png1.
...
```
