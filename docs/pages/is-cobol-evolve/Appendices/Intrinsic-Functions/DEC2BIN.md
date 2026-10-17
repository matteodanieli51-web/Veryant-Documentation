## DEC2BIN

The DEC2BIN function converts a decimal value in its binary format.

### Syntax 1

```cobol
function dec2bin (arg-1)
```

### Syntax 2

```cobol
$dec2bin (arg-1)
```

### Arguments

- *arg-1* must be a numeric data item or literal.

### Result

The function returns a string literal containing 0s and 1s that represents arg-1 in binary form grouped into nibbles, minimizing the number of groups and applying zero-padding on the most significant side when required.

**Note -** If the result of this function is moved into a variable that is too small, it will be right-truncated, causing the least significant digits to be lost. As a result, moving the value "0001" into a 3-byte variable produces "000" instead of "001", and the numeric value 1 is therefore lost.

### Examples

**Example -** Display the binary representation of the number 15.

```cobol
display function dec2bin(15).
```
