### writeToStringBuffer

Puts the content of the data item associated with an XMLStream object into an StringBuffer object.

#### Format 1

```cobol
void writeToStringBuffer ( Xml-Destination )
```

#### Format 2

```cobol
void writeToStringBuffer ( Xml-Destination,  writeQualifiedTagNames )
```

#### Syntax rules

1. *Xml-Destination is an object reference to java.lang.StringBuffer*.
2. *writeQualifiedTagNames* is an alphanumeric data item or literal hosting a boolean value (e.g. "0", "1", "true", "false", "yes", "no", "on" or "off").

#### General rules

1. When the write method is invoked, the whole content of the data item associated with the XMLStream object is put into *Xml-Destination*.

      NOTE - If the number of occurrences of an XML fields is not known at the time the program is written, specifying the DYNAMIC phrase of the [OCCURS clause](../../../Language-Reference/Data-Division/Data-Description/OCCURS-clause) is recommended.

2. The XMLStream write method will indent the output according to the value of the property [iscobol.xmlstream.indent_number](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties). The default is -1 which disables indentation. For example, to indent each level 2 columns set this property as follows:

```ini
iscobol.XMLStream.indent_number=2
```

3. To omit empty elements from the XML output, set the property [iscobol.xmlstream.omit_empty_elements (boolean)](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) to true. The default value of this property is false, that means empty elements are generated.
4. If *writeQualifiedTagNames* is TRUE, namespaces are generated as prefix of the element name, in the form "ns#" where # is a progressive number. If *writeQualifiedTagNames* is FALSE or omitted, namespaces are generated as attribute of the element, in the form "xmlns=url".

#### Code example

```cobol
...
configuration section.
repository.
    class xmlStream  as "com.iscobol.rts.XMLStream"
    class strBuffer  as "java.lang.StringBuffer"
    .
...
working-storage section.
...
77 objXmlStream object reference xmlStream.
77 objStrBuffer object reference strBuffer.
...
procedure division.
...
set objStrBuffer to strBuffer:>new()
objXmlStream:>writeToStringBuffer(objStrBuffer)
...
```
