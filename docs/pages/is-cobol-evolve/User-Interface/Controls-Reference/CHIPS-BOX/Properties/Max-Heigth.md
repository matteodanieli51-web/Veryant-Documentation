## Max-Heigth

The control's maximum height. This setting will affect the Layout Manager’s behavior.

**Example -** Define a chips-box in screen section with a maximum height when the control gets resized by the layout manager

```cobol
screen section.
...
03 screen-1-chip-1 Chips-Box
   line 19.0
   column 23.0
   size 12.0 cells
   lines 11.0
   id 13
   max-height 20.0
   layout-data 17
   .
```
