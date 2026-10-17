## Max-Height

The control's maximum height. This setting will affect the Layout Manager’s behavior.

**Example** - Define a radio button that allows resize in X and Y when the layout-manager requests it, having a maximum and minimum size

```cobol
screen section.
...
  03 screen-1-rb-2 Radio-Button
     line 20.6
     column 21.7
     size 10.9 cells
     lines 5.4 cells
     id 5
     max-width 40.0
     min-width 10.0
     min-height 5.0
     max-height 20.0
     layout-data 17
     title "Option 2"
     .
```
