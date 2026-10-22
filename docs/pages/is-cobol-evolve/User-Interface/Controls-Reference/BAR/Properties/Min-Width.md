## Min-Width

The control's minimum width. This setting will affect the Layout Manager’s behavior.

**Example -** Define an horizontal bar, that allows X resize only and will have a MIN-WIDTH that limits how narrow it could be when resizing the window

```cobol
screen section.
...
  03 screen-1-br-1 Bar
     line 5.0
     column 5.0
     size 46.0 cells
     id 1
     min-width 23.0
     layout-data 1 |*> To allow X resizing only
     .
```
