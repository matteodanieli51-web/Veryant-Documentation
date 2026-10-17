## Label-Offset

This property allows you to adjust the vertical position of the Label control.

The unit specified here is one hundredth of line.

The default value 20 (20 hundredths of line) makes the labels aligned to the interior text of the 3-D entry-fields.

**Example** - Define 2 labels on same line and column but second label will appear below given a label offset

```cobol
screen section.
...
  03 screen-1-la-1 Label
     line 3.5
     column 16.9
     size 26.5 cells
     lines 3.2 cells
     font Berlin-Sans-FB-9v0
     id 25
     title "This is the main Title"
     .
  03 screen-1-la-2 Label
     line 3.5
     column 16.9
     size 26.5 cells
     lines 3.2 cells
     font Berlin-Sans-FB-9v0
     id 26
     label-offset 300
     title "Sub title"
     .
```
