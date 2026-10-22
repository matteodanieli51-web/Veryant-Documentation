## Max-Height

The control's maximum height. This setting will affect the Layout Manager’s behavior.

**Example -** Define a vertical bar, that allows X and Y resizing and will have a MAX-HEIGHT that limits how large it could be when resizing the window

```cobol
screen section.
...
  03 screen-1-br-3 Bar
     line 10.0
     column 5.0
     lines 22.0 cells
     id 3
     max-height 44.0
     layout-data 17 |*> To allow X and Y resizing
     .
```
