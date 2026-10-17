## OCT2DEC

The OCT2DEC function converts a octal value in its decimal format.

### Syntax 1

```cobol
function oct2dec (arg-1)
```

### Syntax 2

```cobol
$oct2dec (arg-1)
```

### Arguments

- *arg-1* must be a numeric data item or literal.

### Result

The function returns a number that is the decimal representation of arg-1.

### Examples

**Example -** Display the decimal representation of 123 .

```cobol
display function oct2dec(123).
```
