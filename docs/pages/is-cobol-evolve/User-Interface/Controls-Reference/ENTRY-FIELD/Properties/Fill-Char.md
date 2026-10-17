## Fill-Char

This property is used to specify what character is used to fill the empty places of an entry-field formatted with the [Format-String](./Format-String) property.

**Example** - Define an entry-field control with a fill char of underscores and a format-string

```cobol
screen section.
...
  03 screen-1-ef-2 Entry-Field
     line 29.0
     column 49.5
     size 13.1 cells
     lines 4.6 cells
     id 19
     3-d
     fill-char "_"
     format-string "###-?????-###"
     .
```
