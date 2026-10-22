## Validation-Errmsg

This property specifies the text of the message shown by the runtime when the Entry-Field content doesn’t match with the regular expression specified by [Validation-Regexp](./Validation-Regexp).

**Example** - Define an entry-field that accepts digits only, validating with regular expression and defining particular error message when the value is incorrect

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
     .
```
