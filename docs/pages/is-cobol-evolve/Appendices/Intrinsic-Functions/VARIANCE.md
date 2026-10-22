## VARIANCE

The VARIANCE function returns an approximation of the variance of its arguments.

### Syntax 1

```cobol
function standard-deviation (arg-1[, arg2 ...,arg-n])
```

### Syntax 2

```cobol
$standard-deviation (arg-1[, arg2 ...,arg-n])
```

### Arguments

- *arg-1* can be either a numeric data item or literal. Other arguments, if any, must be of the same type.
- A table can be referenced by specifying the data-name and any qualifiers that identify the table, followed immediately by subscripting where one or more of the subscripts is the word ALL. When ALL is specified as a subscript, the effect is as if each table element associated with that subscript position were specified. The order of the implicit specification of each occurrence is from left to right, with the first (or leftmost) specification being the identifier with each subscript specified by the word ALL replaced by one, the next specification being the same identifier with the rightmost subscript specified by the word ALL incremented by one. For example, "function variance (tbl-item(all))" is equivalent to "function variance (tbl-item(1), tbl-item(2),...,tbl-item(n))".

### Result

The function returns a number value that approximates the variance of the passed arguments. If only arg-1 is passed or all the arguments have the same value, then the returned value is zero.

### Examples

**Example -** Display the variance between 1 and 3.

```cobol
display function variance(1, 3)
```
