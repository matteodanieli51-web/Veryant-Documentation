### writeToPrintWriter

Puts the content of the data item associated with an JSONStream object into a PrintWriter object.

#### General format

```cobol
void writeToPrintWriter ( Json-Destination )
```

#### Syntax rules

1. *Json-Destination is an object reference to java.io.PrintWriter*.

#### General rules

1. When the write method is invoked, the whole content of the data item associated with the JSONStream object is put into *Json-Destination*.

      NOTE - If the number of occurrences of a JSON fields is not known at the time the program is written, specifying the DYNAMIC phrase of the [OCCURS clause](../../../Language-Reference/Data-Division/Data-Description/OCCURS-clause) is recommended.

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
objJsonStream:>writeToPrintWriter(objJsonStream:>getPrintWriter)
...
```
