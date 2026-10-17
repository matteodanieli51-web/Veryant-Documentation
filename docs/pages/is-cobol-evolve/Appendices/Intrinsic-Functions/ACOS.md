## ACOS

The ACOS function returns the arccosine of a value.

### Syntax 1

```cobol
function acos (arg-1)
```

### Syntax 2

```cobol
$acos (arg-1)
```

### Arguments

- *arg-1* must be a numeric data item or literal.

### Result

The function returns a number that is the arccosine of arg-1.

### Examples

**Example -** Display the arccosine of a cosine.

```cobol
working-storage section.
77 wrk-cosine pic 9v999.
...
procedure division.
...
display function acos(wrk-cosine).
```
