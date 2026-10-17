## Check-List

When this style is set, check boxes or radio buttons are automatically shown before the List-Box items, allowing the user to easily select one or more rows.

Only one column is allowed, so [Display-Columns](../Properties/Display-Columns) is ignored.

The [Selection-Mode](../Properties/Selection-Mode) property allows you to switch between single selection and multiple selection.

**Example** - Define a list-box checked:

```cobol
screen section.
...
  03 screen-1-lbc-1 List-Box
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     id 1
     check-list
     .
```
