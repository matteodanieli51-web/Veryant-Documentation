### writeToFile

Puts the content of the data item associated with a JSONStream object into a file.

#### Format 1

```cobol
void writeToFile( Json-Destination )
```

#### Format 2

```cobol
void writeToFile( JSon-Destination, encoding )
```

#### Syntax rules

1. *Json-Destination* can be either a [Data Item](../../../Language-Reference/Preface/Definitions) or a [Nonnumeric Literal](../../../Language-Reference/Preface/Definitions).
2. *encoding* is a string literal or data item that specifies the character set to be used while writing the JSON stream. All the canonical names listed in the following Java documentation can be used as value for this property: [http://java.sun.com/javase/6/docs/technotes/guides/intl/encoding.doc.html.](http://java.sun.com/javase/6/docs/technotes/guides/intl/encoding.doc.html)

#### General rules

1. *Json-Destination* refers to a regular disk file.
2. When the write method is invoked, the whole content of the data item associated with the JSONStream object is put into *Json-Destination*.

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
objJsonStream:>writeToFile("Sample.json")
...
```
