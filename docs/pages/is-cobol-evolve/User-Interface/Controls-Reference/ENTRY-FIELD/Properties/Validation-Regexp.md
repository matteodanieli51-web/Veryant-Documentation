## Validation-Regexp

This property allows you to specify a regular expression for the validation of the Entry-Field content. When the user leave the field, if the content doesn’t match with the regular expression, then a message box is shown and the focus is kept on the field. The message box text is controlled by the property [Validation-Errmsg](./Validation-Errmsg). The validation is performed according to the settings specified by [Validation-Opts](./Validation-Opts).

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
