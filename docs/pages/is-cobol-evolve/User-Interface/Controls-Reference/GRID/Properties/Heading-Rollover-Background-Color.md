## Heading-Rollover-Background-Color

This property allows you to set or retrieve the background color that both column and row headings assume when the mouse pointer hovers over them. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a grid whose heading colors change on mouseover

```cobol
screen section.
...
  03 screen-1-gr-1 Grid
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     id 1
     event procedure screen-1-gr-1-evt-proc
     no-box
     column-headings
     row-dividers 1
     end-color 9
     heading-rollover-background-color 3
     heading-rollover-foreground-color 7
     heading-font Default-Font
     cursor-frame-width 3
     num-rows 5
     .
...
```
