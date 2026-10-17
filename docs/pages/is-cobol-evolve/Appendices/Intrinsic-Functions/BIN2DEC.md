## BIN2DEC

The BIN2DEC function converts a binary value in its decimal format.

### Syntax 1

```cobol
function bin2dec (arg-1)
```

### Syntax 2

```cobol
$bin2dec (arg-1)
```

### Arguments

- *arg-1* must be a alphanumeric data item or literal.

### Result

The function returns a number that is the decimal representation of arg-1.

### Examples

**Example -** Display the decimal representation of "0101" .

```cobol
display function bin2dec("0101").
```
