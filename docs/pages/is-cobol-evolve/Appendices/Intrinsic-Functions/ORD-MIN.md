## ORD-MIN

The ORD-MIN function returns the ordinal position of minimum argument.

### Syntax 1

```cobol
function ord-min (arg-1[, arg2 ...,arg-n])
```

### Syntax 2

```cobol
$ord-min (arg-1[, arg2 ...,arg-n])
```

### Arguments

- *arg-1* can be either a numeric or a alphanumeric data item or literal. Other arguments, if any, must be of the same type.

### Result

The function returns the ordinal position of the minimum value between the passed arguments.

### Examples

**Example -** Display the minimum ordinal value between 1, 2 and 3.

```cobol
display function ord-min(1, 2, 3)
```
