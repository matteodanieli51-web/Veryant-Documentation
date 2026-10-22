## Enabled

This property assumes a value of "0" if the Bitmap control is disabled, "1" if it is enabled.

**Example -** Define a bitmap that is initially disabled, enabled it later in procedure division

```cobol
screen section.
...
  03 screen-1-bi-2 Bitmap
     line 23.3
     column 51.4
     size 83 pixels
     lines 97 pixels
     enabled 0
     id 8
     .
...
procedure division.
...
  modify screen-1-bi-2 enabled 1.
...
```
