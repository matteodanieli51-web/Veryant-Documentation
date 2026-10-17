### afterCancel

The afterCancel method is invoked by the runtime after a called program has been cancelled by a CANCEL statement.

#### General Format

```cobol
void afterCancel(Program)
```

#### Syntax rules

1. *Program* is an instance of the com.iscobol.rts.IscobolCall class and identifies the cancelled program.
