## TRIM

The TRIM function trims a string.

### Syntax 1

```cobol
function trim (arg-1)
```

### Syntax 2

```cobol
$trim (arg-1)
```

### Arguments

- *arg-1* must be a alphanumeric data item or literal.

### Result

The function returns the value of arg-1 stripped of any leading and trailing character whose hex value is less than 0x21.

### Examples

**Example -** Display a combined message after removing the spaces from the variable part.

```cobol
working-storage section.
77 w-name pic x(32) value " John ".
...
procedure division.
...
display "Hello " function trim(w-name) ", how are you?".
```
