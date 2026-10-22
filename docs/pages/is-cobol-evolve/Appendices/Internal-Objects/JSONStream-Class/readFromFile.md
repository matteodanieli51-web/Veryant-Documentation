### readFromFile

Reads a JSON file and puts its content in the data item associated with the JSONStream object.

#### Format 1

```cobol
void readFromFile ( Json-Source )
```

#### Format 2

```cobol
void readFromFile ( Json-Source, encoding )
```

#### Syntax rules

1. *Json-Source* can be either a [Data Item](../../../Language-Reference/Preface/Definitions) or a [Nonnumeric Literal](../../../Language-Reference/Preface/Definitions).
2. *encoding* is a string literal or data item that specifies the character set to be used while parsing the JSON stream. All the canonical names listed in the following Java documentation can be used as value for this property: [http://java.sun.com/javase/6/docs/technotes/guides/intl/encoding.doc.html.](http://java.sun.com/javase/6/docs/technotes/guides/intl/encoding.doc.html)

#### General rules

1. *Json-Source* refers to a regular disk file.
2. When the read method is invoked, the whole content of *Json-Source* is read and the data item associated with the JSONStream object is updated.

      NOTE - If the number of occurrences of an JSON field is not known at the time the program is written, specifying the DYNAMIC phrase of the [OCCURS clause](../../../Language-Reference/Data-Division/Data-Description/OCCURS-clause) in the data item associated with the JSONStream object is recommended.

3. The following escapes are allowed: \b, \f, \n, \r, \t, \" and \\. Any other character preceeded by a backslash is considered invalid and makes the read fail unless you set [iscobol.jsonstream.allow_backslash_escaping_any_character (boolean)](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) to true in the configuration.

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
objJsonStream:>readFromFile("Sample.json")
...
```
