## Hint

This property allows you to define the text shown in the window that pops up when the mouse pointer is placed on the Push-Button control.

Note - If the [Bitmap](../Styles/Bitmap) style is set, no [Title-Position](./Title-Position) has been specified and both [Title](./Title) and [Hint](./Hint) have been set, then the [Title](./Title) text is used for the tool-tip.

**Example** - Define a push-button with a hint text

```cobol
screen section.
...
  03 screen-1-pb-1 Push-Button
     line 4.5
     column 8.1
     size 12.5 cells
     lines 4.8 cells
     hint "Press this button to accept changes"
     id 1
     title "Accept"
     .
```
