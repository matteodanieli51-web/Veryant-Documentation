## Value

This property represents the value of the List-Box control.

When inquired, it returns the value that is currently represented.

When set, the List-Box control changes its look to represent it.

When set, the currently selected item is changed in order to match the value set.

**Example** - Define a list-box where the third item is selected

```cobol
screen section.
...
  03 screen-1-lb-1 List-Box
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     id 1
     item-to-add ("item 1", "item 2", "item 3")
     value "item 3"
     .
...
```
