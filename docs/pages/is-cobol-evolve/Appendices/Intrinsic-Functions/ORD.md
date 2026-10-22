## ORD

The ORD function returns the ordinal position in the ASCII character set of an alphanumeric value.

### Syntax 1

```cobol
function ord (arg-1)
```

### Syntax 2

```cobol
$ord (arg-1)
```

### Arguments

- *arg-1* must be a alphanumeric data item or literal.

### Result

The function returns a number that is the ordinal position in the ASCII character set of the character identified by arg-1.

The ordinal position corresponds to the ASCII character's decimal value plus one.

### Examples

**Example -** Display the ordinal position of the upper case letter "A" .

```cobol
display function ord("A").
```
