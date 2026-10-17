## \{ Bottom | Top \}

|  |  |
| --- | --- |
| Bottom | The label title is bottom-aligned. |
| Top | The label title is top-aligned. |

Setting one of the styles mentioned above implies that the [Vertical](./Vertical) style is set.

**Example** - Define a vertical label aligned to the bottom

```cobol
screen section.
...
  03 screen-1-la-2 Label
     line 5.9
     column 2.6
     size 6.1 cells
     lines 16.0 cells
     font Berlin-Sans-FB-9v0
     id 26
     bottom
     vertical
     label-offset 300
     title "Sub title"
     .
```
