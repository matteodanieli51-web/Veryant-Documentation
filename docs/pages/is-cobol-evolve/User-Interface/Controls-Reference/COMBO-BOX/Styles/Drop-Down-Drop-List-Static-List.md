## \{ Drop-Down | Drop-List | Static-List \}

|  |  |
| --- | --- |
| Drop-Down | This style should be used when space for the Combo-Box is limited, for example when the combo box is part of a toolbar. With this style, the list, part of the Combo-Box, is normally hidden and shown only when the user clicks the button on the right of the entry area. The user can pick a value from the list or enter any value in the entry area. |
| Drop-List | This style has the same effect as the DROP-DOWN style, with the exception that the entry area is read-only. |
| Static-List | This syntax is compiled for compatibility reasons, however, isCOBOL does not support Static-List Combo Boxes. |

**Example -** Define a combo-box with drop-down style

```cobol
screen section.
...
  03 screen-1-co-1 Combo-Box
     line 19.0
     column 23.0
     size 12.0 cells
     lines 11.0
     id 13
     3-d
     drop-down
     .
```
