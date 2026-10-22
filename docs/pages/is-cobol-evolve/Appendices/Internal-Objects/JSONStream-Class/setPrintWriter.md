### setPrintWriter

Associates a PrintWriter to the JSONStream object. It will be used by the [write](./write) method.

#### General format

```cobol
void setPrintWriter ( Print-Writer )
```

#### Syntax rules

1. *Print-Writer is an object reference to java.io.PrintWriter*.

#### Code example

```cobol
...
configuration section.
repository.
    class jsonStream  as "com.iscobol.rts.JSONStream"
    .
...
working-storage section.
...
77 objJsonStream object reference jsonStream.
...
procedure division.
...
objJsonStream:>setPrintWriter("out.json")
...
```
