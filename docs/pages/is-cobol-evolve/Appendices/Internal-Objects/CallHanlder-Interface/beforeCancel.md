### beforeCancel

The beforeCancel method is invoked by the runtime before cancelling a program due to a CANCEL statement.

#### General Format

```cobol
void beforeCancel(Program)
```

#### Syntax rules

1. *Program* is an instance of the com.iscobol.rts.IscobolCall class and identifies the cancelled program.
