## \{ Lower | Upper \}

|  |  |
| --- | --- |
| Lower | When this style is set, any value entered in the entry-filed is automatically converted to lower-case characters. |
| Upper | When this style is set, any value entered in the entry-filed is automatically converted to upper-case characters. |

If [Format-String](../Properties/Format-String) is set, these styles have no effect.

**Example** - Define an entry-field control with upper style to convert all entry to uppercase

```cobol
screen section.
...
  03 screen-1-ef-5 Entry-Field
     line 50.1
     column 19.9
     size 10.7 cells
     lines 3.0
     id 23
     3-d
     upper
     .
```
