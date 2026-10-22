## Hscroll-Pos

This numeric property contains the number of the leftmost column currently visible.

**Example** - Get the number of the leftmost column currently visible on a grid

```cobol
procedure division.
...
  inquire screen-1-gr-1 hscroll-pos ws-hsp
...
```
