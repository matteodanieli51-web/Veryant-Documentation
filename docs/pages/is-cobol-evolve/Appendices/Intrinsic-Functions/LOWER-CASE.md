## LOWER-CASE

The LOWER-CASE function returns the lower-case version of a text string.

### Syntax 1

```cobol
function lower-case (arg-1)
```

### Syntax 2

```cobol
$lower-case (arg-1)
```

### Arguments

- *arg-1* must be a alphanumeric data item or literal.

### Result

The function returns the lower-case version of arg-1.

### Examples

**Example -** Test if the provided user name is "admin" in a case-insensitive way.

```cobol
working-storage section.
77 w-user pic x(32).
...
procedure division.
...
if function lower-case(w-user) = "admin"
   |do something
else
   |do something else
end-if.
```
