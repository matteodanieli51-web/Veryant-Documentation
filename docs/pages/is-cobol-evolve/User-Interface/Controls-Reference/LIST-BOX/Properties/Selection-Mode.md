## Selection-Mode

This property activates the ability to select multiple rows in a List-Box.

The possible values, defined in [isgui.def](../../../../Appendices/Copybooks/isgui.def), are:

|  |  |
| --- | --- |
| lssm-single-selection (value 1) | Only one row can be selected. |
| lssm-single-interval-selection (value 2) | A block of rows can be selected. |
| lssm-multiple-interval-selection (value 4) | Multiple non-contiguous rows can be selected. |

If the [Check-List](../Styles/Check-List) style is set, radio buttons and check boxes are shown before the List-Box items.

The list of the selected items can be retrieved by inquiring the property [Rows-Selected](./Rows-Selected).

**Example** - Define a list-box checked where multiple rows can be selected:

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
     selection-mode 4
     .
```
