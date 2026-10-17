## LENGTH

The LENGTH function returns the size of a variable. When used on national items, it returns the number of characters, not the number of bytes; use [BYTE-LENGTH](./BYTE-LENGTH) in order to know the number of bytes.

### Syntax 1

```cobol
function length (arg-1)
```

### Syntax 2

```cobol
$length (arg-1)
```

### Arguments

- *arg-1* must be a data-item.

### Result

The function returns the size of arg-1.

### Examples

**Example -** Display the size in characters of a national data item.

```cobol
working-storage section.
77 unicode-var pic n(10).
...
procedure division.
...
display function length(unicode-var).
```
