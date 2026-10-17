## HEX-OF

The HEX-OF function converts a value in its hexadecimal format.

### Syntax 1

```cobol
function hex-of (arg-1)
```

### Syntax 2

```cobol
$hex-of (arg-1)
```

### Arguments

- *arg-1* can be any data item or literal.

### Result

The function returns an alphanumeric character string consisting of the bytes of arg-1 converted to a hexadecimal representation.

### Examples

**Example -** Display the hex representation of the character "A".

```cobol
display function hex-of("A").
```
