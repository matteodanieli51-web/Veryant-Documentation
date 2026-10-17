## Rollover-Border-Color

This property allows you to set or retrieve the border color of the Push-Button control when the mouse pointer hovers over it. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

The border color is applicable only to buttons with the [Flat](../Styles/Flat) style.

**Example** - Define a flat push-button with red border color during mouseover

```cobol
screen section.
...
  03 screen-1-pb-1 Push-Button
     line 4.5
     column 8.1
     size 12.5 cells
     lines 4.8 cells
     rollover-border-color 5
     flat
     id 1
     title "Accept"
     .
```
