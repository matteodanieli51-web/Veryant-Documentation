## Chips-Type

This numeric property allows you to set or retrieve the type of chips in the Chips-Box control. The table below shows the type related to each value:

|  |  |
| --- | --- |
| 1 | Basic action chip.<br>It includes just text and an optional leading bitmap.<br>This is the default type. |
| 2 | Entry chip.<br>It includes text, an optional leading bitmap and a clickable X button after the text. If the user clicks the X button, the chip is removed from the Chips-Box. |

**Example** - Define a chips-box control with entry chips

```cobol
screen section.
...
  03 screen-1-chip-1 Chips-Box
     line 35.5
     column 49.7
     size 13.1 cells
     lines 4.6 cells
     chips-type 2
     id 19
     .
```
