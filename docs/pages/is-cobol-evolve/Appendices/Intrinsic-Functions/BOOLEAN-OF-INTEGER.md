## BOOLEAN-OF-INTEGER

The BOOLEAN-OF-INTEGER function returns a boolean item of usage bit representing the binary value of the first argument. The second argument specifies the length of the boolean data item that is returned.

### Syntax 1

```cobol
function boolean-of-integer (arg-1, arg-2)
```

### Syntax 2

```cobol
$boolean-of-integer (arg-1, arg-2)
```

### Arguments

- *arg-1* must be a positive integer
- *arg-2* must be a positive integer greater than 0

### Result

The function returns a boolean item of usage bit representing the binary value of arg-1.

### Examples

**Example -** Convert integer to boolean.

```cobol
working-storage section.
77 bool-var pic 1(4) usage bit.
77 int-var  pic 9(2).
...
procedure division.
...
move function boolean-of-integer(int-var, 4) to bool-var.
```
