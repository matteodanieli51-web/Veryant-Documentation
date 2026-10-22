## LOG10

The LOG10 function returns the base-10 logarithm of a number.

### Syntax 1

```cobol
function log10 (arg-1)
```

### Syntax 2

```cobol
$log10 (arg-1)
```

### Arguments

- *arg-1* must be a data-item.

### Result

The function returns the base-10 logarithm of arg-1.

### Examples

**Example -** Display the base-10 logarithm of the number 100.

```cobol
display function log10(100).
```
