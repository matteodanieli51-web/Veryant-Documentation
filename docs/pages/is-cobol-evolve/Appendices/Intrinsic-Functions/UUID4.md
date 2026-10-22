## UUID4

The UUID4 function returns a 36-character alphanumeric string that is a version 4 universally unique identifier(UUID).

### Syntax 1

```cobol
function uuid4 ()
```

### Syntax 2

```cobol
$uuid4 ()
```

### Result

The function returns a version 4 UUID generated based on random numbers.

### Examples

**Example** - Generate a version 4 UUID.

```cobol
procedure division.
...
display function uuid4().
*will display something like: 4ed161b5-0d3c-4f06-8381-5f14678e13da
```
