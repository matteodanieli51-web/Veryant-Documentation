## \{ [ Center | Centered ] | Left | Right \}

|  |  |
| --- | --- |
| Center, Centered | The content of the entry-field is centered |
| Left | The content of the entry-field is left aligned |
| Right | The content of the entry-field is right aligned |

**Note -** these styles have no effect on Entry-Fields with the [Multiline](./Multiline) style.

**Example** - Define an entry-field control with centered content

```cobol
screen section.
...
  03 screen-1-ef-5 Entry-Field
     line 50.1
     column 19.9
     size 10.7 cells
     lines 3.0 cells
     id 23
     3-d
     center
     .
```
