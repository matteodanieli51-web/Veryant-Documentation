## COMPILED-INFO

The COMPILED-INFO function returns information about the current class.

### Syntax 1

```cobol
function compiled-info
```

### Syntax 2

```cobol
$compiled-info
```

### Result

The function returns a text string that includes the compiler build number, the compile flags and the date and time when the class was compiled.

### Examples

**Example -** Display details about the compilation of the current class.

```cobol
display function compiled-info.
```
