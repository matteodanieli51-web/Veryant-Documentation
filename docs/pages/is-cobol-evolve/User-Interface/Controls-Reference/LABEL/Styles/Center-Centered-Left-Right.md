## \{ [ Center | Centered ] | Left | Right \}

|  |  |
| --- | --- |
| Center, Centered | The title is centered |
| Left | The title is left aligned. |
| Right | The title is right-aligned. When used in conjunction with the [Vertical](./Vertical) style, the label is rotated 90 degrees right instead of left. |

The title text is trimmed before being aligned in the Label’s area.

**Example** - Define a centered title label

```cobol
screen section.
...
  03 screen-1-la-1 Label
     line 3.5
     column 16.9
     size 26.5 cells
     lines 3.2 cells
     id 25
     center
     title "This is the main Title"
     .
```
