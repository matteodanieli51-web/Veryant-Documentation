## Border-Color

This property allows you to set or retrieve the border color of the Push-Button control. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details. This property has effect only on buttons with the [Flat](../Styles/Flat) style.

**Example** - Define a push-button control with red border

```cobol
screen section.
...
  03 screen-1-pb-1 Push-Button
     line 4.5
     column 8.1
     size 70
     lines 48
     id 1
     flat
     border-color 5
     bitmap-handle icon-png
     square
     bitmap-default 21
     bitmap-disabled 18
     bitmap-rollover 19
     bitmap-pressed 20
     bitmap-width 18
     .
```
