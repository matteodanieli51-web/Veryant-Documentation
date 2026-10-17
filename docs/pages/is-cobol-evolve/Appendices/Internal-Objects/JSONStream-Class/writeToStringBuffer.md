### writeToStringBuffer

Puts the content of the data item associated with an JSONStream object into an StringBuffer object.

#### General format

```cobol
void writeToStringBuffer ( Json-Destination )
```

#### Syntax rules

1. *Json-Destination is an object reference to java.lang.StringBuffer*.

#### General rules

1. When the write method is invoked, the whole content of the data item associated with the JSONStream object is put into *Json-Destination*.

      NOTE - If the number of occurrences of a JSON fields is not known at the time the program is written, specifying the DYNAMIC phrase of the [OCCURS clause](../../../Language-Reference/Data-Division/Data-Description/OCCURS-clause) is recommended.

#### Code example

```cobol
...
configuration section.
repository.
    class jsonStream  as "com.iscobol.rts.JSONStream"
    class strBuffer  as "java.lang.StringBuffer"
    .
...
working-storage section.
...
77 objJsonStream object reference jsonStream.
77 objStrBuffer object reference strBuffer.
...
procedure division.
...
set objStrBuffer to strBuffer:>new()
objJsonStream:>writeToStringBuffer(objStrBuffer)
...
```
