## Md-Label

This property specifies the text of the floating label displayed over Entry-Fields with a Material Design layout when they get the focus and when they are filled with some text. If the [Placeholder](./Placeholder) property is not set, the value of this property is also used as placeholder text.

**Example** - Define an entry-field control with a boxed Material Design layout and floating label

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
     id 19
     .
```
