## BYTE-LENGTH

The BYTE-LENGTH function returns the size in bytes (not in characters) of a variable.

### Syntax 1

```cobol
function byte-length (arg-1)
```

### Syntax 2

```cobol
$byte-length (arg-1)
```

### Arguments

- *arg-1* must be a data-item.

### Result

The function returns the size in bytes of arg-1.

### Examples

**Example -** Display the size in bytes of a national data item.

```cobol
working-storage section.
77 unicode-var pic n(10).
...
procedure division.
...
display function byte-length(unicode-var).
```
