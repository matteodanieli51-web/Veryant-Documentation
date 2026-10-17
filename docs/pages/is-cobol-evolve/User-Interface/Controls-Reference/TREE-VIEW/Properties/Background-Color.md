## Background-Color

This property allows you to set or retrieve the background color of the Tree-View control. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a tree-view with background and foreground color

```cobol
screen section.
...
          03 screen-1-tv-1 Tree-View
             line 2.7
             column 3.4
             size 23.6 cells
             lines 29.1 cells
             background-color 6
             foreground-color 7
             id 2
             no-box
             .
```
