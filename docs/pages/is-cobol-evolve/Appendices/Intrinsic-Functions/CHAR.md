## CHAR

The CHAR function returns the character in the ASCII character set occupying the ordinal position of the argument.

### Syntax 1

```cobol
function char (arg-1)
```

### Syntax 2

```cobol
$char (arg-1)
```

### Arguments

- *arg-1* must be a numeric data item or literal greater than zero.

### Result

The function returns the character in the ASCII character set occupying the ordinal position of arg-1.

The ordinal position corresponds to the ASCII character's decimal value plus one.

### Examples

**Example -** Display the ASCII character at the ordinal position 66, that is the upper case letter "A".

```cobol
display function char(66).
```
