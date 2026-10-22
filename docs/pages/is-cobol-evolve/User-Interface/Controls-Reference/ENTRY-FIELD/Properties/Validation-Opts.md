## Validation-Opts

This numeric property specifies how the Entry-Field content will be compared with the regular expression specified by [Validation-Regexp](./Validation-Regexp). The value of this property is the sum between one or more of the following values:

| Value | Description |
| --- | --- |
| 1 | case insensitive |
| 2 | left trimmed |
| 4 | right trimmed |

For example, if you want a case insensitive comparison with the value right trimmed, set this property to 5.

**Example** - Define an entry-field control that allows digits only, but the left side may contain spaces

```cobol
screen section.
...
  03 screen-1-ef-3 Entry-Field
     line 35.8
     column 49.7
     size 11.6 cells
     lines 3.5 cells
     id 20
     3-d
     validation-regexp "[0-9]*"
     validation-errmsg "Please enter a valid value: digits only"
     validation-opts 2
     .
```
