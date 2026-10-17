## Left-Text-Alignment

This property works in conjunction with the [Left-Text](../Styles/Left-Text) style and controls the alignment of the text in the area on the left of the Radio-Button. Set this property to 0 to have the text right aligned or to 1 to have the text left aligned. If this property is not set, then the text is right aligned.

**Example** - Define a radio button with left text alignment

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
     left-text
     left-text-alignment 1
     .
```
