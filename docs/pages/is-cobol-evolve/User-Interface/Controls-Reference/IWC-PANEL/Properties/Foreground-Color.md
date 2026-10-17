## Foreground-Color

This property allows you to set or retrieve the foreground color of the IWC-Panel control. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example -** Define an iwc-panel in screen section with a foreground color

```cobol
screen section.
...
  03 screen-1-ip-1 Iwc-Panel
     line 22.0
     column 10.0
     size 11.0 cells
     lines 3.0 cells
     foreground-color 5
     id 10
     js-name "f-map"
     .
```
