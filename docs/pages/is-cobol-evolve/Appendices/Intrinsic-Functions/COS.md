## COS

The COS function returns the cosine of a value.

### Syntax 1

```cobol
function cos (arg-1)
```

### Syntax 2

```cobol
$cos (arg-1)
```

### Arguments

- *arg-1* must be a numeric data item or literal.

### Result

The function returns a number that is the cosine of arg-1.

### Examples

**Example -** Display the cosine of 1.048 radians.

```cobol
display function cos(1.048).
```
