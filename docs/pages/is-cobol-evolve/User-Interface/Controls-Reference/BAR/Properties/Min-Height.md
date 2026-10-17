## Min-Height

The control's minimum height. This setting will affect the Layout Manager’s behavior.

**Example -** Define a vertical bar, that allows X and Y resizing and will have a MIN-HEIGHT that limits how short it could be when resizing the window

```cobol
screen section.
...
  03 screen-1-br-3 Bar
     line 10.0
     column 5.0
     lines 22.0 cells
     id 3
     min-height 11.0
     layout-data 17 |*> To allow X and Y resizing
     .
```
