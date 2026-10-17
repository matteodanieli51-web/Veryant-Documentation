## CAPACITY

The CAPACITY function returns the current capacity of a dynamic capacity table.

It is useful to know the capacity of a table for which the CAPACITY clause was not specified, but even more useful to know the capacity of nested dynamic capacity tables.

### Syntax 1

```cobol
function capacity (arg-1)
```

### Syntax 2

```cobol
$capacity (arg-1)
```

### Arguments

- *arg-1* must be an item of type OCCURS DYNAMIC.

### Result

The function returns capacity of arg-1.

### Examples

**Example -** Display the capacity of a table that stores 2 elements.

```cobol
working-storage section.
77 var pic x(10) occurs dynamic.
...
procedure division.
...
move "xxx" to var(1).
move "yyy" to var(2).
display function capacity(var).
```

**Example -** Display the capacity of nested tables.

```cobol
 working-storage section.
 01 nested-tbl.
    03 tbl-1 occurs dynamic capacity tbl-1-cap.
       05 tbl-2 occurs dynamic capacity tbl-2-cap.
          07 tbl-item pic x(10).
 ...
 procedure division.
 ...
 move "xxx" to tbl-item(1, 1).
 move "yyy" to tbl-item(2, 1).
 move "zzz" to tbl-item(2, 2).
* tbl-2-cap can't be subscripted so it holds the maximum capacity
 display tbl-2-cap. | it will display '2'
* the below statement displays the capacity of tbl-2 in tbl-1(1)
 display function capacity(tbl-2(1)). | it will display '1'
* the below statement displays the capacity of tbl-2 in tbl-1(1)
 display function capacity(tbl-2(2)). | it will display '2'
 ...
```
