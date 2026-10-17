## Rollover-Background-Color

This property allows you to set or retrieve the background color of the Push-Button control when the mouse pointer hovers over it. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a push-button with different background and foreground colors during mouseover

```cobol
screen section.
...
  03 screen-1-pb-1 Push-Button
     line 4.5
     column 8.1
     size 12.5 cells
     lines 4.8 cells
     background-color 3
     foreground-color 4
     rollover-background-color 5
     rollover-foreground-color 6
     id 1
     title "Accept"
     .
```

**Note -** Using the Windows Look and Feel, the background color is shown only if the button has the [Flat](../Styles/Flat) style.
