## Tab-Rollover-Color

This property is supported only along with the [Accordion](../Styles/Accordion) style. It allows you to set or retrieve the foreground color that the page title takes when the mouse hovers over it. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define an accordion whose page titles have background black and foreground white. The titles foreground will become red on mouseover

```cobol
...
screen section.
...
  03 screen-1-tc-1 Tab-Control
     accordion
     line 2.8
     column 25.7
     size 34.6 cells
     lines 28.9 cells
     tab-flat
     tab-background-color 0
     tab-foreground-color 15
     tab-rollover-color 13
     id 10
     bitmap-width 16
     .
...
```
