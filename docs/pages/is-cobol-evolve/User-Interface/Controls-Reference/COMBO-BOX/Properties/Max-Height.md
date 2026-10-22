## Max-Height

The control's maximum height. This setting will affect the Layout Manager’s behavior.

**Example -** Define a combo-box in screen section with a maximum height when the control gets resized by the layout manager

```cobol
screen section.
...
03 screen-1-co-1 Combo-Box
   line 19.0
   column 23.0
   size 12.0 cells
   lines 11.0
   id 13
   max-height 20.0
   layout-data 17
   3-d
   drop-down
   .
```
