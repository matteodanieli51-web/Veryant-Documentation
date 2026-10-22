## HEX2DEC

The HEX2DEC function converts an hexadecimal value in its decimal format.

### Syntax 1

```cobol
function hex2dec (arg-1)
```

### Syntax 2

```cobol
$hex2dec (arg-1)
```

### Arguments

- *arg-1* must be a alphanumeric data item or literal.

### Result

The function returns a number that is the decimal representation of arg-1.

### Examples

**Example -** Display the decimal representation of 0xFF.

```cobol
display function hex2dec("FF").
```
