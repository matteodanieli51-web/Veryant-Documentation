## Max-Width

The control's maximum width. This setting will affect the Layout Manager’s behavior.

**Example -** Define an horizontal bar, that allows X resize only and will have a MAX-WIDTH that limits how wide it could be when resizing the window

```cobol
screen section.
...
  03 screen-1-br-1 Bar
     line 5.0
     column 5.0
     size 46.0 cells
     id 1
     max-width 90.0
     layout-data 1 |*> To allow X resizing only
     .
```
