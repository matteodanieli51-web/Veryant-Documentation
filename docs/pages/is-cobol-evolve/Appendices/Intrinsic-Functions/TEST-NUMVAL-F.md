## TEST-NUMVAL-F

The TEST-NUMVAL-F function verifies that the argument conforms to the argument rules for the NUMVAL-F function.

### Syntax 1

```cobol
function test-numval-f (arg-1)
```

### Syntax 2

```cobol
$test-numval-f (arg-1)
```

### Arguments

- *arg-1* must be an alphanumeric data item or literal.

### Result

The function returns 0 if the argument conforms to the argument rules for the NUMVAL-F function. Otherwise, the function returns the position of the first character in error.

### Examples

**Example -** Test if a string is suitable for the NUMVAL-F function.

```cobol
working-storage section.
77 wrk-str pic x(20) value "+ 12.345678E+2".
...
procedure division.
...
if function test-numval-f(wrk-str) = 0
   display wrk-str " is suitable for the numval-f function"
else
   display wrk-str " is not suitable for the numval-f function"
end-if.
```
