## DEC2HEX

The DEC2HEX function converts a decimal value in its hexadecimal format.

The value is converted to hexadecimal using a fixed-width representation. Each byte is represented by two hexadecimal digits, with leading zeros added as required.

### Syntax 1

```cobol
function dec2hex (arg-1)
```

### Syntax 2

```cobol
$dec2hex (arg-1)
```

### Arguments

- *arg-1* must be a numeric data item or literal.

### Result

The function returns a string that is the hexadecimal representation of arg-1.

The resulting string size is multiple of 2.

### Examples

**Example -** Display the hex representation of the number 15.

```cobol
display function dec2hex(15).
```
