## ANNUITY

The ANNUITY function returns ratio of annuity using a given rate.

### Syntax 1

```cobol
function annuity (arg-1, arg-2)
```

### Syntax 2

```cobol
$annuity (arg-1, arg-2)
```

### Arguments

- *arg-1* must be a numeric data item or literal whose value is greater than zero.
- *arg-2* must be a numeric data item or literal whose value is greater than zero.

### Result

If the value of arg-1 is zero, the value of the function is the approximation of *1 / arg-2*, else the value of the function is the approximation of *arg-1 / (1 - (1 + arg-1) \*\* (- arg-2))* .

### Examples

**Example -** Display the ratio of annuity of 2 periods with a interest rate of 0.5.

```cobol
display function annuity(2, 0.5).
```
