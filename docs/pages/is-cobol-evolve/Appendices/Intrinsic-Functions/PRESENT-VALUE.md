## PRESENT-VALUE

The PRESENT-VALUE function returns a value that approximates the present value of a series of future period-end amounts specified by the second argument at a discount rate specified by the first argument.

### Syntax 1

```cobol
function present-value (arg-1, arg2)
```

### Syntax 2

```cobol
$present-value (arg-1, arg2)
```

### Arguments

- *arg-1* must be a numeric data item or literal and must not be negative.
- *arg-2* must be a numeric data item or literal.

### Result

The function returns a value that approximates the present value of a series of future period-end amounts specified by arg-2 at a discount rate specified by arg-1.

### Examples

**Example -** Display the present value of an amount of 5000 with a discount rate of 0.10.

```cobol
display function present-value(0.10, 5000)
```
