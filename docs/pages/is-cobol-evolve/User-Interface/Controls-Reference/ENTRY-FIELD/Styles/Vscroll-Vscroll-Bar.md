## \{ Vscroll | Vscroll-Bar \}

|  |  |
| --- | --- |
| Vscroll | The user can scroll the content of a multi line entry-field with the up/down arrows. In this way, the height of the entry-field can be lower than the number of lines it can display. |
| Vscroll-Bar | Same as the VSCROLL style, but here a vertical scroll bar is displayed on the right side of the entry-field. |

By setting either the VSCROLL style or the VSCROLL-BAR style, the [Multiline](./Multiline) style is implied.

**Example** - Define an entry-field with multiline style, that has more lines that can be visible and a vertical scroll-bar to scroll thru them

```cobol
screen section.
...
  03 screen-1-ef-4 Entry-Field
     line 40.6
     column 47.5
     size 22.2 cells
     lines 12.3 cells
     id 21
     multiline
     Vscroll-Bar
     3-d
     use-return
     use-tab
     max-lines 10
     .
```
