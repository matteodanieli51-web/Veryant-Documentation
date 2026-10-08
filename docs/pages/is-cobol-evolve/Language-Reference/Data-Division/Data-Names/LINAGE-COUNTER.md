### LINAGE-COUNTER

A separate LINAGE-COUNTER special register is generated for each FD entry containing a LINAGE clause.

#### General Format

```cobol
LINAGE-COUNTER
```

#### General Rules

1. The value in LINAGE-COUNTER at any given time is the line number at which the device is positioned within the current page. LINAGE-COUNTER may be referred to in Procedure Division statements; it cannot be modified by them.
2. LINAGE-COUNTER is initialized to 1 when an OPEN statement for this file is executed.
3. LINAGE-COUNTER is automatically modified by any WRITE statement for this file.
