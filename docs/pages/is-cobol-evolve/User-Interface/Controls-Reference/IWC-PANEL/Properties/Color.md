## Color

This property allows you to set or retrieve the color of the IWC-Panel control. Foreground and background color values are combined and therefore RGB colors are not supported. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example -** Define an iwc-panel in screen section with a specific color

```cobol
screen section.
...
  03 screen-1-ip-1 iwc-panel
     line 22.0
     column 10.0
     size 11.0 cells
     lines 3.0 cells
     color 260
     id 10
     js-name "f-map"
     .
```
