## Md-Supporting-Text

This property specifies the supporting text displayed below Entry-Fields with a Material Design layout.

**Note -** this text is displayed over the area specified by the [Lines](./Lines) property, so it increases the field height on screen.

**Example** - Define an entry-field control with a boxed Material Design layout and supporting text

```cobol
screen section.
...
  03 screen-1-ef-2 Entry-Field
     line 35.5
     column 49.7
     size 13.1 cells
     lines 4.6 cells
     material-design 1
     md-label "Name"
     md-supporting-text "Insert you name here"
     id 19
     .
```
