## REM

The REM function returns the remainder of the division between two arguments.

### Syntax 1

```cobol
function rem (arg-1, arg-2)
```

### Syntax 2

```cobol
$rem (arg-1, arg-2)
```

### Arguments

- *arg-1* must be a numeric data item or literal.
- *arg-2* must be a numeric data item or literal.

### Result

The function returns the remainder of *arg-1 / arg-2*.

### Examples

**Example -** Check if a number is odd or even.

```cobol
working-storage section.
77 my-num pic 9(3).
...
procedure division.
...
if function rem(my-num, 2) = 0
   |the number is even
else
   |the number is odd
end-if.
```
