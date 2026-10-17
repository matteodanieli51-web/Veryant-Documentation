## \{ Lower | Upper \}

|  |  |
| --- | --- |
| Lower | When this style is set, all the items are converted to lower-case characters. |
| Upper | When this style is set, all the items are converted to upper-case characters. |

**Example -** Define a combo-box in screen section with uppercase style

```cobol
screen section.
...
  03 screen-1-co-1 Combo-Box
     line 19.0
     column 23.0
     size 12.0 cells
     lines 11.0
     id 13
     upper
     3-d
     drop-down
     .
```
