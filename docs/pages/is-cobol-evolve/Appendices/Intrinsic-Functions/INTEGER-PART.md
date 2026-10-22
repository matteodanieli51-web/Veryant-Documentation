## INTEGER-PART

The INTEGER-PART function returns the integer portion of a numeric value.

### Syntax 1

```cobol
function integer-part (arg-1)
```

### Syntax 2

```cobol
$integer-part (arg-1)
```

### Arguments

- *arg-1* must be a numeric data item or literal.

### Result

The function returns a number that is the integer portion of arg-1.

### Examples

**Example -** Display the integer part of a data item with virtual.

```cobol
working-storage section.
77 price pic 9(5)v99.
...
procedure division.
...
move 134.99 to price.
display function integer-part(price)
```
