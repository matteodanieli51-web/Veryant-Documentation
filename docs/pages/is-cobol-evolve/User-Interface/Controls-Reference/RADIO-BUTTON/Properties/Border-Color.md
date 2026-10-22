## Border-Color

This property allows you to set or retrieve the border color of the Radio-Button control with the [Bitmap](../Styles/Bitmap) style. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a radio button control with red border

```cobol
screen section.
...
  03 screen-1-rb-1 Radio-Button
     line 20.9
     column 5.4
     size 112
     lines 45
     id 4
     title "Option 1"
     bitmap-handle icon-png1
     square
     bitmap-number 1
     bitmap-disabled 6
     bitmap-rollover 3
     bitmap-pressed 2
     bitmap-width 18
     title-position 2
     bitmap-selected 5
     bitmap-rollover-selected 4
     border-color 5
     .
```
