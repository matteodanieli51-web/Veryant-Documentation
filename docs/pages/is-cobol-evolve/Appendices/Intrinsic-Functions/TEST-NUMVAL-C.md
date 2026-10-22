## TEST-NUMVAL-C

The TEST-NUMVAL-C function verifies that the argument conforms to the argument rules for the NUMVAL-C function. Use this function when the argument includes a currency symbol or comma or both.

Any optional currency sign specified by the second argument and any optional commas preceding the decimal point are ignored.

### Syntax 1

```cobol
function test-numval-c (arg-1 [, arg-2])
```

### Syntax 2

```cobol
$test-numval-c (arg-1 [, arg-2])
```

### Arguments

- *arg-1* must be an alphanumeric data item or literal.
- *arg-2* must be a alphanumeric data item or literal. It must not contain any of the digits 0 through 9, any leading or trailing spaces, or any of the special characters '+', '-', '.', or ','. If not specified, the character used for currency symbol is the one specified for the program.

### Result

The function returns 0 if the argument conforms to the argument rules for the NUMVAL-C function. Otherwise, the function returns the position of the first character in error.

### Examples

**Example -** Test if a string is suitable for the NUMVAL-C function.

```cobol
working-storage section.
77 wrk-str pic x(20) value "$1,234.99".
...
procedure division.
...
if function test-numval-c(wrk-str) = 0
   display wrk-str " is suitable for the numval-c function"
else
   display wrk-str " is not suitable for the numval-c function"
end-if.
```
