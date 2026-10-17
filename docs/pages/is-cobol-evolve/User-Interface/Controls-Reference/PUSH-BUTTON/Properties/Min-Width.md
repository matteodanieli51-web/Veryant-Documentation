## Min-Width

The control's minimum width. This setting will affect the Layout Manager’s behavior.

**Example** - Define a push-button with a layout-data that allows you to resize in X and Y and with height and width upper and lower limits when resizing

```cobol
screen section.
...
  03 screen-1-pb-2 Push-Button
     line 5.2
     column 18.3
     size 9.3 cells
     lines 2.4 cells
     id 2
     max-width 60.0
     min-width 15.0
     min-height 5.0
     max-height 20.0
     layout-data 17
     title "Disable"
     .
```
