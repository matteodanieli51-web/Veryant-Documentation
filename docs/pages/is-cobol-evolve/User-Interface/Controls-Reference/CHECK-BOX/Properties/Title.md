## Title

The description shown in the Check-Box control. If the [Bitmap](../Styles/Bitmap) style is set, no text is shown and the title becomes the control hint. If the [Title-Position](./Title-Position) property is set, both text and graphics are shown.

Note - If the [Bitmap](../Styles/Bitmap) style is set, no [Title-Position](./Title-Position) has been specified and both [Title](./Title) and [Hint](./Hint) have been set, then the [Title](./Title) text is used for the tool-tip.

**Example -** Define a check-box in screen section with a title

```cobol
screen section.
...
  03 screen-1-cb-2 Check-Box
     line 27.0
     column 10.0
     size 116
     lines 31
     id 11
     title "E-mail Results?"
     title-position 2
     .
```
