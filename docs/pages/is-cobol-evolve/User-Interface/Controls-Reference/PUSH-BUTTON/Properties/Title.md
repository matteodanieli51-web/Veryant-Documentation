## Title

The description shown in the Push-Button control. If the [Bitmap](../Styles/Bitmap) style is set, no text is shown and the title becomes the [Hint](./Hint) of the control. If the [Title-Position](./Title-Position) property is set, both text and graphics are shown.

Note - If the [Bitmap](../Styles/Bitmap) style is set, no [Title-Position](./Title-Position) has been specified and both [Title](./Title) and [Hint](./Hint) have been set, then the [Title](./Title) text is used for the tool-tip.

**Example** - Define a push-button with a text title

```cobol
screen section.
...
  03 screen-1-pb-2 Push-Button
     termination-value 2055
     line 5.2
     column 18.3
     size 9.3 cells
     lines 2.4 cells
     id 2
     title "Disable"
     .
```
