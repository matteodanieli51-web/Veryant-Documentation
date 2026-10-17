## Item-Rollover-Background-Color

This property allows you to set or retrieve the background color of the items when the mouse pointer hovers over them. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example -** Define a list box whose items become white-on-black on mouseover

```cobol
screen section.
...
  03 screen-1-lb-1 List-Box
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     item-rollover-background-color x#303030
     item-rollover-foreground-color x#FFFFFF
     id 16
     .
...
```
