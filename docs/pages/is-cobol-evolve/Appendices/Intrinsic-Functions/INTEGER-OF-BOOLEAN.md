## INTEGER-OF-BOOLEAN

The INTEGER-OF-BOOLEAN function returns the numeric value of the boolean string in the argument.

### Syntax 1

```cobol
function integer-of-boolean (arg-1)
```

### Syntax 2

```cobol
$integer-of-boolean (arg-1)
```

### Arguments

- *arg-1* must be a boolean data item.

### Result

The function returns the numeric value of the boolean string in arg-1.

### Examples

**Example -** Convert boolean to integer.

```cobol
working-storage section.
77 bool-var pic 1(4) usage bit.
77 int-var  pic 9(2).
...
procedure division.
...
move function integer-of-boolean(bool-var) to int-var.
```
