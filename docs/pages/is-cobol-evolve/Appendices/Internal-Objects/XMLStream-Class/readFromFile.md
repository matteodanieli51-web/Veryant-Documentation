### readFromFile

Reads an XML file and puts its content in the data item associated with the XMLStream object.

#### Format 1

```cobol
void readFromFile ( Xml-Source )
```

#### Format 2

```cobol
void readFromFile ( Xml-Source, encoding )
```

#### Syntax rules

1. *Xml-Source* can be either a [Data Item](../../../Language-Reference/Preface/Definitions) or a [Nonnumeric Literal](../../../Language-Reference/Preface/Definitions).
2. *encoding* is a string literal or data item that specifies the character set to be used while parsing the JSON stream. All the canonical names listed in the following Java documentation can be used as value for this property: [http://java.sun.com/javase/6/docs/technotes/guides/intl/encoding.doc.html.](http://java.sun.com/javase/6/docs/technotes/guides/intl/encoding.doc.html)

#### General rules

1. *Xml-Source* refers to a regular disk file.
2. When the read method is invoked, the whole content of *Xml-Source* is read and the data item associated with the XMLStream object is updated.

      NOTE - If the number of occurrences of an XML field is not known at the time the program is written, specifying the DYNAMIC phrase of the [OCCURS clause](../../../Language-Reference/Data-Division/Data-Description/OCCURS-clause) in the data item associated with the XMLStream object is recommended.

#### Code example

```cobol
...
configuration section.
repository.
    class xmlStream  as "com.iscobol.rts.XMLStream"
    .
...
working-storage section.
...
77 objXmlStream object reference xmlStream.
...
procedure division.
...
objXmlStream:>readFromFile("Sample.xml")
...
```
