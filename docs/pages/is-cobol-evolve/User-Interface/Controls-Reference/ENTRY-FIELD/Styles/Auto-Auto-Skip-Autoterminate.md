## \{ Auto  | Auto-Skip | Autoterminate \}

|  |  |
| --- | --- |
| Auto | This style causes the entry field to terminate as soon as it is filled by the user. A field is considered filled when the number of characters it contains equals its [Max-Text](../Properties/Max-Text) setting. |

**Example** - Define an entry-field that auto skips when it is full

```cobol
screen section.
...
  03 screen-1-ef-3 Entry-Field
     line 35.8
     column 49.7
     size 11.6 cells
     lines 3.5 cells
     id 20
     auto
     .
```
