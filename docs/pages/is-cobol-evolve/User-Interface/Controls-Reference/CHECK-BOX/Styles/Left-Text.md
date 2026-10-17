## Left-Text

When this style is set, the title is displayed on the left side. You can set the alignment of the title text through the property [Left-Text-Alignment](../Properties/Left-Text-Alignment).

**Example -** Define a check-box in screen section with text on the left side

```cobol
screen section.
...
  03 screen-1-cb-2 Check-Box
     line 27.0
     column 10.0
     size 116
     lines 30
     id 11
     title "Sugar for you coffee?"
     left-text
     .
```
