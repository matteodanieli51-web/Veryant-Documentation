## BIT-OF

The BIT-OF function returns the bit pattern of the binary value of the argument.

### Syntax 1

```cobol
function bit-of (arg-1)
```

### Syntax 2

```cobol
$bit-of (arg-1)
```

### Arguments

- *arg-1* can be any data item or literal.

### Result

The function returns an alphanumeric character string consisting of the bytes of arg-1 converted to the bit pattern corresponding to the binary value of each byte in arg-1.

### Examples

**Example -** Display the bits of the character "A".

```cobol
display function bit-of("A").
```
