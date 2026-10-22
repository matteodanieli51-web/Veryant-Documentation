## Disabled-Foreground-Color

This property allows you to set or retrieve the foreground color of the Push-Button control when it is disabled. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a push-button with background and foreground colors when disabled

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
     disabled-background-color 5
     disabled-foreground-color 6
     id 1
     title "Accept"
     .
```
