## RANDOM

The RANDOM function returns a random value between 0 and 1.

### Syntax 1

```cobol
function random ([arg-1])
```

### Syntax 2

```cobol
$random ([arg-1])
```

### Arguments

- *arg-1*, if specified, must be zero or a positive integer. It is used as the seed value to generate a sequence of pseudo-random numbers.

### Result

The function returns a random value between 0 and 1.

### Examples

**Example -** Display a random value between 0 and 1.

```cobol
display function random()
```
