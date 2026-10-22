## Chips-Border-Width

This property allows you to set or retrieve the border width in pixels of the chips in the Chips-Box control. By default, chips have no border. Set this property to a value greater than zero to decorate chips with a border.

**Example** - Define a chips-box control with decorated chips

```cobol
screen section.
...
  03 screen-1-chip-1 Chips-Box
     line 35.5
     column 49.7
     size 13.1 cells
     lines 4.6 cells
     chips-border-width 1
     id 19
     .
```
