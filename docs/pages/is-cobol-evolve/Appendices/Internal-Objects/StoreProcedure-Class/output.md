### output

Defines an output parameter for the subroutine.

#### General format

```cobol
StoreProcedure output (parm)
```

#### Syntax rules

1. *parm* is any COBOL data item
2. *StoreProcedure* is an object reference to com.iscobol.lib.StoreProcedure

#### General rules

An output parameter can be modified but not read by the COBOL subroutine.
