## Hint

This property allows you to define the text shown in the window that pops up when the mouse pointer is placed on the Radio-Button control.

Note - If the [Bitmap](../Styles/Bitmap) style is set, no [Title-Position](./Title-Position) has been specified and both [Title](./Title) and [Hint](./Hint) have been set, then the [Title](./Title) text is used for the tool-tip.

**Example** - Define a radio button with a hint text

```cobol
screen section.
...
  03 screen-1-rb-2 Radio-Button
     line 20.6
     column 21.7
     size 10.9 cells
     lines 5.4 cells
     id 5
     hint "Select this as alternative option"
     title "Option 2"
     .
```
