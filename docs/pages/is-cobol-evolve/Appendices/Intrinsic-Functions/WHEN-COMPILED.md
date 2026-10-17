## WHEN-COMPILED

The WHEN-COMPILED function returns the compilation date and time of the program.

### Syntax 1

```cobol
function when-compiled ()
```

### Syntax 2

```cobol
$when-compiled ()
```

### Result

The function returns a number that is the compilation date and time in the format YYYYMMDDHHNNSSCC.

### Examples

**Example -** Set a timestamp field to the compilation date and time of the program.

```cobol
working-storage section.
01 w-date-time.
   03 w-date.
      05 w-year  pic 9(4).
      05 w-month pic 9(2).
      05 w-day   pic 9(2).
   03 w-time.
      05 w-hour  pic 9(2).
      05 w-min   pic 9(2).
      05 w-sec   pic 9(2).
      05 w-cent  pic 9(2).
...
procedure division.
...
move function when-compiled() to w-date-time.
```
