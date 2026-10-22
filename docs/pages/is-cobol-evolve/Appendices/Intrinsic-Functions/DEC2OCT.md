## DEC2OCT

The DEC2OCT function converts a decimal value in its octal format.

### Syntax 1

```cobol
function dec2oct (arg-1)
```

### Syntax 2

```cobol
$dec2oct (arg-1)
```

### Arguments

- *arg-1* must be a numeric data item or literal.

### Result

The function returns a string that is the octal representation of arg-1.

### Examples

**Example -** Display the octal representation of the number 15.

```cobol
display function dec2oct(15).
```
