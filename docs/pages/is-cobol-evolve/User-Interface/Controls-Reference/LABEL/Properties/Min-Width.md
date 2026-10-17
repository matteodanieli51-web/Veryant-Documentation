## Min-Width

The control's minimum width. This setting will affect the Layout Manager’s behavior.

**Example** - Define a label that allows resize in X and Y if required by the layout manager and have limits in max and min width and height

```cobol
screen section.
...
  03 screen-1-la-1 Label
     line 3.5
     column 16.9
     size 26.5 cells
     lines 3.2 cells
     font Berlin-Sans-FB-9v0
     id 25
     max-width 30.0
     min-width 10.0
     min-height 2.0
     max-height 5.0
     layout-data 17
     title "This is the main Title"
     .
```
