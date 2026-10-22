## HEX-TO-CHAR

The HEX-TO-CHAR function returns a character string consisting of bytes that correspond to the hexadecimal digit characters in the input argument.

### Syntax 1

```cobol
function hex-to-char (arg-1)
```

### Syntax 2

```cobol
$hex-to-char (arg-1)
```

### Arguments

- *arg-1* must be an alphanumeric data item or literal.

### Result

The function returns a character string consisting of bytes that correspond to the hexadecimal digit characters in arg-1.

### Examples

**Example -** Decode 0x5A to the corresponding ASCII character.

```cobol
display function hex-to-char("5A").
```
