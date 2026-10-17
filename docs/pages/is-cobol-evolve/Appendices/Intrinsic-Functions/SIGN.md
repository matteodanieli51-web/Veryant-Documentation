## SIGN

The SIGN function returns +1, 0, or -1 depending on the sign of the argument.

### Syntax 1

```cobol
function sign (arg-1)
```

### Syntax 2

```cobol
$sign (arg-1)
```

### Arguments

- *arg-1* must be a numeric data item or literal.

### Result

The function returns +1, 0, or -1 depending on the sign of arg-1.

### Examples

**Example -** Check if a value is positive or negative.

```cobol
working-storage section.
77 var pic s9(9).
...
procedure division.
...
evaluate function sign(var)
when -1
   display "var contains a negative value"
when 0
   display "var contains zero"
when 1
   display "var contains a positive value"
end-evaluate.
```
