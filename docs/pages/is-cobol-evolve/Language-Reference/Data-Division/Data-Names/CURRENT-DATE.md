### CURRENT-DATE

The CURRENT-DATE function returns the current date as a eigth characters string. It can always be used where a string literal is allowed. It requires [-cv](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) compiler option.

#### General Format

```cobol
CURRENT-DATE
```

#### General Rules

1. The date is returned in the format "MM/DD/YY", where MM is the month number (1-12), DD is the day number (1-31) and YY is the year number stripped of the century (0-99).
