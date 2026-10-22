## Text-Orientation

This property specifies the text orientation adopted while the user is typing text into the field. Possible values are:

|  |  |
| --- | --- |
| 0 (or omitted) | default |
| 1 | left to right |
| 2 | right to left |

**Example** - Define an entry-field control with right-to-left text orientation

```cobol
screen section.
...
  03 screen-1-ef-3 Entry-Field
     line 35.8
     column 49.7
     size 11.6 cells
     lines 3.5 cells
     id 20
     3-d
     text-orientation 2
     .
```
