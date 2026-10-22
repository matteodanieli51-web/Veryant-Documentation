## TRIMR

The TRIMR function performs a right trim on a string.

### Syntax 1

```cobol
function trimr (arg-1)
```

### Syntax 2

```cobol
$trimr (arg-1)
```

### Arguments

- *arg-1* must be a alphanumeric data item or literal.

### Result

The function returns the value of arg-1 stripped of any trailing character whose hex value is less than 0x21.

### Examples

**Example -** Display a combined message after trimming the spaces from the variable part.

```cobol
working-storage section.
77 w-name pic x(32) value "John ".
...
procedure division.
...
display "Hello " function trimr(w-name) ", how are you?".
```
