## \{ Lower | Upper \}

|  |  |
| --- | --- |
| Lower | When this style is set, all the items are converted to lower-case characters. |
| Upper | When this style is set, all the items are converted to upper-case characters. |

**Example** - Define a list-box where all items will be upper-case

```cobol
screen section.
...
  03 screen-1-lb-1 List-Box
     upper
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     id 1
     .
```
