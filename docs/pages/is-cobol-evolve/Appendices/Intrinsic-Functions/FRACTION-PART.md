## FRACTION-PART

The FRACTION-PART function returns the fraction portion of the argument.

### Syntax 1

```cobol
function fraction-part (arg-1)
```

### Syntax 2

```cobol
$fraction-part (arg-1)
```

### Arguments

- *arg-1* must be a numeric data item or literal.

### Result

The function returns a number that is the fraction portion of arg-1.

### Examples

**Example -** Display the decimal part of a data item with virtual.

```cobol
working-storage section.
77 price pic 9(5)v99.
...
procedure division.
...
move 134.99 to price.
display function fraction-part(price)
```
