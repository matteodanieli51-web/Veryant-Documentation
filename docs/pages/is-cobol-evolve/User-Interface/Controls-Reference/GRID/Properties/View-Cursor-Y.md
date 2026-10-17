## View-Cursor-Y

When inquired, this property allows you to retrieve which row the cursor is placed in the grid represented on video. This kind of information is useful after a sort, when the order of the rows on video doesn’t match with the order of the rows for the program.

**Example** - Inquire the View cursor Y position from a grid

```cobol
working-storage section.
77 ws-vc-y    pic 9(3).
...
procedure division.
...
  inquire screen-1-gr-1 view-cursor-y ws-vc-y
...
```
