### Condition-name condition

A condition-name condition tests a conditional variable to determine whether its value is equal to any values that are associated with the condition-name.

A condition-name is used in conditions as an abbreviation for the relation condition. The rules for comparing a conditional variable with a condition-name value are the same as those specified for relation conditions.

If condition-name-1 has been associated with a range of values (or with several ranges of values), the conditional variable is tested to determine whether its value falls within the ranges, including the end values. The result of the test is true if one of the values that corresponds to the condition-name equals the value of its associated conditional variable.

The following example illustrates the use of conditional variables and condition-names:

```cobol
01  FILE-STATUS      PIC  XX.
    88  SUCCESS  VALUE "00" THRU "09".
    88  FAILED   VALUE "10" THRU "99".
```

FILE-STATUS is the conditional variable; SUCCESS and FAILED are condition-names.

For individual records in the file, only one of the values specified in the condition-name entries can be present.

The following IF statements can be added to the above example to determine the file status:

IF SUCCESS... (Tests for values "00" through "09")

IF FAILED... (Tests for values "10" through "99")

Depending on the evaluation of the condition-name condition, alternative paths of execution are taken by the object program.
