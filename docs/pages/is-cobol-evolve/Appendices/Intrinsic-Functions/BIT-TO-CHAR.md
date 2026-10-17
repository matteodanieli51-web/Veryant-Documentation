## BIT-TO-CHAR

The BIT-TO-CHAR converts a bit pattern to a character string.

### Syntax 1

```cobol
function bit-to-char (arg-1)
```

### Syntax 2

```cobol
$bit-to-char (arg-1)
```

### Arguments

- *arg-1* must be an alphanumeric data item or literal.

### Result

The function returns a character string consisting of bytes that correspond to the bit pattern indicated by the sequence of "0" and "1" characters in arg-1.

### Examples

**Example -** Decode a bit pattern to the corresponding character.

```cobol
display function bit-to-char("01000001").
```
