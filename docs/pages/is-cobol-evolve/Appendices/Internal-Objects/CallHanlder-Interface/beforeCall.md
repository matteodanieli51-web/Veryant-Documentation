### beforeCall

The beforeCall method is invoked by the runtime just before entering the called program.

#### General Format

```cobol
void beforeCall(Program, Params)
```

#### Syntax rules

1. *Program* is an instance of the com.iscobol.rts.IscobolCall class and identifies the called program that is returning.
2. *Params* is an instance of java.lang.Object[] and contains the Linkage parameters.

#### General rules

1. The called program must have been found and loaded for this method to be executed.
2. The CALL statement must not be used in the code of this method, otherwise an infinite call loop is generated, leading to a StackOverflow error.
3. This method may raise [MapCallException (com.iscobol.rts.MapCallException)](../MapCallException/MapCallException) to make the runtime call a different program or change the Linkage arguments.
