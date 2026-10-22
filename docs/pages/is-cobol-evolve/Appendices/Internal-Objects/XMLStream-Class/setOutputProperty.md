### setOutputProperty

Puts the content of the data item associated with an XMLStream object into an XML stream or file.

#### General format

```cobol
void setOutputProperty ( Key-Name, Key-Value )
```

#### Syntax rules

1. *Key-Name* is a field of the java class javax.xml.transform.OutputKeys. Please refer to the javax.xml.transform.OutputKeys api reference for further details. At the time this document is written, the following fields are available:
   - CDATA_SECTION_ELEMENTS
   - DOCTYPE_PUBLIC
   - DOCTYPE_SYSTEM
   - ENCODING
   - INDENT
   - MEDIA_TYPE
   - METHOD
   - OMIT_XML_DECLARATION
   - STANDALONE
   - VERSION

**Note:** The ENCODING property specifies the encoding that must be used to read the XML file. This information is for the programs that will read the file and doesn’t affect the way the COBOL program writes data into it. To write data with a particular encoding into the XML file, you need to set the *file.encoding* Java property. For example, in order to make TEST_PROG write UTF-8 data into the XML file, you will launch it in this way:

```shell
iscrun -J-Dfile.encoding=UTF-8 TEST_PROG
```

#### Code example

```cobol
...
configuration section.
repository.
    class xmlStream  as "com.iscobol.rts.XMLStream"
    class outputKeys as "javax.xml.transform.OutputKeys"
    .
...
working-storage section.
...
77 objXmlStream object reference xmlStream.
...
procedure division.
...
objXmlStream:>setOutputProperty (outputKeys:>ENCODING "ISO-8859-1")
...
```
