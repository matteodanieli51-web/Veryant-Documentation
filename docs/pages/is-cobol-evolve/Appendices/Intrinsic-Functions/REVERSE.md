## REVERSE

The REVERSE function returns the content of the argument.

### Syntax 1

```cobol
function reverse (arg-1)
```

### Syntax 2

```cobol
$reverse (arg-1)
```

### Arguments

- *arg-1* must be a alphanumeric data item or literal.

### Result

The function returns the content of arg-1 with bytes in the opposite order.

### Examples

**Example -** Discover an hidden message.

```cobol
display function reverse ("looc si LOBOCsi").
```
