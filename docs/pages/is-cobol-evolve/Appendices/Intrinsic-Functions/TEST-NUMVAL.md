## TEST-NUMVAL

The TEST-NUMVAL function verifies that the argument conforms to the argument rules for the NUMVAL function.

### Syntax 1

```cobol
function test-numval (arg-1)
```

### Syntax 2

```cobol
$test-numval (arg-1)
```

### Arguments

- *arg-1* must be an alphanumeric data item or literal.

### Result

The function returns 0 if the argument conforms to the argument rules for the NUMVAL function. Otherwise, the function returns the position of the first character in error.

### Examples

**Example -** Test if a string is suitable for the NUMVAL function.

```cobol
working-storage section.
77 wrk-str pic x(20) value "$1,234.99".
...
procedure division.
...
if function test-numval(wrk-str) = 0
   display wrk-str " is suitable for the numval function"
else
   display wrk-str " is not suitable for the numval function"
end-if.
```
