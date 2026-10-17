## Disabled-Color

This property allows you to set or retrieve the color of the Push-Button control when it is disabled. Foreground and background color values are combined and therefore RGB colors are not supported. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a push-button with different background and foreground color when disabled

```cobol
screen section.
...
  03 screen-1-pb-2 Push-Button
     line 5.2
     column 18.3
     size 9.3 cells
     lines 2.4 cells
     color 164
     disabled-color 512
     id 2
     title "Accept"
     .
```

**Note -** Using the Windows Look and Feel, the background color is shown only if the button has the [Flat](../Styles/Flat) style.
