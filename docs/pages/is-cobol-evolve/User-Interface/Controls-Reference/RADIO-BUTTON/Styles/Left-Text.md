## Left-Text

When this style is set, the title is displayed on the left side. You can set the alignment of the title text through the property [Left-Text-Alignment](../Properties/Left-Text-Alignment).

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
