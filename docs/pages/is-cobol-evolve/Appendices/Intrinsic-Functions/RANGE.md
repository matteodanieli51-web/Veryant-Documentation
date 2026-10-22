## RANGE

The RANGE function returns the difference between the maximum value and the minimum value in a series of arguments.

### Syntax 1

```cobol
function range (arg-1[, arg2 ...,arg-n])
```

### Syntax 2

```cobol
$range (arg-1[, arg2 ...,arg-n])
```

### Arguments

- *arg-1* can be either a numeric or a alphanumeric data item or literal. Other arguments, if any, must be of the same type.
- A table can be referenced by specifying the data-name and any qualifiers that identify the table, followed immediately by subscripting where one or more of the subscripts is the word ALL. When ALL is specified as a subscript, the effect is as if each table element associated with that subscript position were specified. The order of the implicit specification of each occurrence is from left to right, with the first (or leftmost) specification being the identifier with each subscript specified by the word ALL replaced by one, the next specification being the same identifier with the rightmost subscript specified by the word ALL incremented by one. For example, "function range (tbl-item(all))" is equivalent to "function range (tbl-item(1), tbl-item(2),...,tbl-item(n))".

### Result

The function returns the difference between the maximum value and the minimum between the passed arguments.

### Examples

**Example -** Display a range between 1, 2 and 3.

```cobol
display function range(1, 2, 3)
```
