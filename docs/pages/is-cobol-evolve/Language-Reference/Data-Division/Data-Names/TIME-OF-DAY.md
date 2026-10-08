### TIME-OF-DAY

The TIME-OF-DAY function returns the current time as a six digit number. It can always be used where a numeric literal is allowed. It requires [-cv](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) compiler option.

#### General Format

```cobol
TIME-OF-DAY
```

#### General Rules

1. The time is returned in the format HHNNSS, where HH is the number of hours (0-23), NN is the number of minutes (0-59) and SS is the number of seconds (0-59).
