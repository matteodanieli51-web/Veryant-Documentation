## Trunc-Value

When inquired, this property tells if the value of the Combo-Box is fully visible or if it was truncated by the Combo-Box width. The property value will be 0 if the content is fully visible or 1 if the content was truncated.

**Example -** Check if the combo-box value is fully visible

```cobol
working-storage section.
...
77 tc pic 9.
...
procedure division.
...
  inquire screen-1-co-1 trunc-value tc.
  if tc = 1
    display "combo box value not fully visible" upon sysout.
```
