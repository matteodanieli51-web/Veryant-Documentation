## Value

This property represents the value of the Entry-Field control.

When inquired, it returns the value that is currently represented.

When set, the Entry-Field control changes its look to represent it.

You may use the VALUE IS MULTIPLE option with [Multiline](../Styles/Multiline) entry fields. The value data item should be a one-dimensional OCCURS with no subscript specified. The effect of the MULTIPLE phrase is to match each line of the entry field to occurrences in the OCCURS. The first line is matched to the first occurrence, the second line with the second occurrence, and so on. Occurrences that are larger than the number of lines in the entry field are set to spaces when the entry field is accepted. If the [Max-Lines](./Max-Lines) property is omitted, it’s automatically set to the capacity of the associated OCCURS.

**Example** - Define an entry-field with initial value

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
     value "Initial value"
     .
```
