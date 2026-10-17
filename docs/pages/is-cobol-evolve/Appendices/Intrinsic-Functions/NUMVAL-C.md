## NUMVAL-C

The NUMVAL-C function returns the numbers found in a given alphanumeric value. Use this function when the argument includes a currency symbol or comma or both.

Any optional currency sign specified by the second argument and any optional commas preceding the decimal point are ignored.

### Syntax 1

```cobol
function numval-c (arg-1 [, arg-2])
```

### Syntax 2

```cobol
$numval-c (arg-1 [, arg-2])
```

### Arguments

- *arg-1* must be a alphanumeric data item or literal.
- *arg-2* must be a alphanumeric data item or literal. It must not contain any of the digits 0 through 9, any leading or trailing spaces, or any of the special characters '+', '-', '.', or ','. If not specified, the character used for currency symbol is the one specified for the program.

### Result

The function returns the numbers found in arg-1.

### Examples

**Example -** Display the price value.

```cobol
working-storage section.
77 w-price pic x(20) value "$1,234.99".
...
procedure division.
...
display function numval-c(w-price).
```
