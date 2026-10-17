## Vscroll-Pos

This numeric property contains the number of the topmost row currently visible.

**Example** - Inquire a grid to get its topmost row currently visible

```cobol
working-storage section.
77 ws-vs-pos   pic 9(3).
...
procedure division.
...
  inquire screen-1-gr-1 vscroll-pos ws-vs-pos
...
```
