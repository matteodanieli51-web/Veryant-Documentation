## HANDLE-TYPE

The HANDLE-TYPE function returns the resource type pointed by a handle or zero if the handle is invalid.

### Syntax 1

```cobol
function handle-type (arg-1)
```

### Syntax 2

```cobol
$handle-type (arg-1)
```

### Arguments

- *arg-1* must be a USAGE HANDLE item.

### Result

The function returns a number from 0 to 9. The [isgui.def](../Copybooks/isgui.def) copybook includes constants that describe these values:

```cobol
78  handle-is-invalid                            value 0.
78  handle-of-window                             value 1.
78  handle-of-subwindow                          value 2.
78  handle-of-font                               value 3.
78  handle-of-thread                             value 4.
78  handle-of-menu                               value 5.
78  handle-of-control                            value 6.
78  handle-of-bitmap                             value 7.
78  handle-is-unknown                            value 9.
```

### Examples

**Example -** Test if a handle is invalid.

```cobol
working-storage section.
77 my-handle usage handle.
...
procedure division.
...
if function handle-type(my-handle) = 0
 display "my-handle points to nothing!"
end-if.
```
