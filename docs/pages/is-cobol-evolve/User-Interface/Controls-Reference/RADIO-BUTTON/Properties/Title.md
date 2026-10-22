## Title

The description shown in the Radio-Button control. If the [Bitmap](../Styles/Bitmap) style is set, no text is shown and the title becomes the control hint. If the [Title-Position](./Title-Position) property is set, both text and graphics are shown.

Note - If the [Bitmap](../Styles/Bitmap) style is set, no [Title-Position](./Title-Position) has been specified and both [Title](./Title) and [Hint](./Hint) have been set, then the [Title](./Title) text is used for the tool-tip.

**Example** - Define a radio button with a title

```cobol
screen section.
...
  03 screen-1-rb-2 Radio-Button
     line 20.6
     column 21.7
     size 10.9 cells
     lines 5.4 cells
     id 5
     title "Option 2"
     .
```
