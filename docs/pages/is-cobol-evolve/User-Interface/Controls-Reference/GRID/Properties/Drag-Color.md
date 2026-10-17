## Drag-Color

This property allows you to set or retrieve the color that will be used to paint the dynamic area defined when the user clicks and drags the mouse. Foreground and background color values are combined and therefore RGB colors are not supported. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

The purpose of this property is to provide a way of selecting cells without any programming effort. When the user releases the mouse button, the [MSG-END-DRAG](../Events/MSG-END-DRAG) event is fired.

**Example** - Define a Grid with Drag Color

```cobol
      screen section.
      ....
          03 screen-1-gr-1 Grid
             line 7.6
             column 5.8
             size 28.2 cells
             lines 19.8 cells
             id 1
             no-box
             column-headings
             row-dividers 1
             cursor-color 393
             drag-color 333
             divider-color 5
             heading-font Default-Font
             cursor-frame-width 3
             num-rows 5
             .
```
