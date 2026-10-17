## Visible

This property assumes a value of "0" if the Bar control is not visible, "1" if it is visible.

**Example -** Make a bar invisible and visible during runtime

```cobol
procedure division.
...
  if bars-invisible |*> Any 88 condition name
     modify screen-1-br-2 visible 0  |*> Making it invisible
  else
     modify screen-1-br-2 visible 1  |*> Making it visible
  end-if
```
