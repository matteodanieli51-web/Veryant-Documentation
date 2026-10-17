## Multiline

When this style is set, the title can be displayed on multiple lines. This happens when the title does not fit the size of the Check-Box control or when it contains a LineFeed character (x"0A").

**Example -** Define a check-box in screen section with text on multiple lines

```cobol
screen section.
...
  03 screen-1-cb-2 Check-Box
     line 27.0
     column 10.0
     size 116
     lines 30
     id 11
     title "Are you sure you would like some extra sugar for you coffee?"
     multiline
     .
```
