## YEAR-TO-YYYY

The YEAR-TO-YYYY function converts 2 digits year into 4 digits year.

### Syntax 1

```cobol
function year-to-yyyy (arg-1)
```

### Syntax 2

```cobol
$year-to-yyyy (arg-1)
```

### Arguments

- *arg-1* must be a numeric data item or literal, two bytes in size.

### Result

The function returns the four digits version of the two digits year specified by arg-1.

### Examples

**Example -** Convert a two digits year to a four digits year.

```cobol
working-storage section.
77 w-year-yy   pic 99 value 17.
77 w-year-yyyy pic 9(4).
...
procedure division.
...
move function year-to-yyyy(w-year-yy) to w-year-yyyy.
```
