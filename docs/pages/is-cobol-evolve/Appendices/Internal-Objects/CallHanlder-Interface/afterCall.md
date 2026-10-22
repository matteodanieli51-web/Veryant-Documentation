### afterCall

The afterCall method is invoked by the runtime when the called program returns, before resuming the execution of the caller program.

#### General Format

```cobol
void afterCall(Program, Params)
```

#### Syntax rules

1. *Program* is an instance of the com.iscobol.rts.IscobolCall class and identifies the called program that is returning.
2. *Params* is an instance of java.lang.Object[] and contains the Linkage parameters.
