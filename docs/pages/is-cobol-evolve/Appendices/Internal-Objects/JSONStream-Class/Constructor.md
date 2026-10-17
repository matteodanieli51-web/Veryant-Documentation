### Constructor

Creates a new instance of the JSONStream class.

#### Format 1

```cobol
JSONStream ( Record-Definition )
```

#### Format 2

```cobol
JSONStream ( Record-Definition, hasDummyRoot )
```

#### Format 3

```cobol
JSONStream ( Record-Definition, hasDummyRoot, encoding )
```

#### Syntax rules

1. *Record-Definition* is a level 01 group data item for which the [IS IDENTIFIED clause](../../../Language-Reference/Data-Division/Data-Description/IS-IDENTIFIED-clause) has been specified.
2. *hasDummyRoot* is an alphanumeric data item or literal hosting a boolean value (e.g. "0", "1", "true", "false", "yes", "no", "on" or "off"). If the boolean value is TRUE, then the top level item of Record-Definition is discarded and will not appear in the JSON stream . This parameter can be NULL, in such case, FALSE is assumed.
3. *encoding* is an alphanumeric data item or literal that specifies the character set of the JSON stream. All the canonical names listed in the following Java documentation can be used as value for this property: [http://java.sun.com/javase/6/docs/technotes/guides/intl/encoding.doc.html.](http://java.sun.com/javase/6/docs/technotes/guides/intl/encoding.doc.html)

#### General rules

1. When a new instance of JSONStream is created, the data item identified by *Record-Definition* is associated with the new object.

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
01 Record-Definition identified by "Record-Definition".
   (JSON fields)
...
procedure division.
...
set objJsonStream to jsonStream:>new(Record-Definition)
...
```
