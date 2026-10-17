### IS IDENTIFIED clause

The IS IDENTIFIED clause specifies that a data item belongs to an XD entry, an XML structure, a JSON structure or HTTP parameters.

XD entries in FILE SECTION are supported for compatibility with other COBOLs.

XML structures in WORKING-STORAGE SECTION represent XML streams or XML files. Refer to the [XMLStream Class (com.iscobol.rts.XMLStream)](\) documentation for details about how to handle XML streams or XML files.

JSON structures in WORKING-STORAGE SECTION represent JSON streams. Refer to [JSONStream Class (com.iscobol.rts.JSONStream)](\) documentation for details about how to handle JSON streams.

HTTP parameters are used to exchange information between a COBOL program and a HTTP client in the EIS environment. Refer to [isCOBOL Evolve: EIS](../../../../is-cobol-EIS/Key-Topics) for details about HTTP parameters.

#### General format

```cobol
  IS IDENTIFIED { BY    } Xml-Field [IS { ATTRIBUTE    }        ] [IS NULLABLE ]
                { USING }               { ELEMENT BASE64BINARY }
                                        { ELEMENT BOOLEAN      }
                                        { ELEMENT HEXBINARY    }
                                        { ELEMENT RAW          }
  [ NAMESPACE IS NameSpace-Data ]
  [ COUNT IN Count-Item ]
```

#### Syntax rules

1. *Xml-Field* is a [Nonnumeric Literal](../../Preface/Definitions#nonnumeric-literal) or [Data Item](../../Preface/Definitions#data-item), as defined in the [Definitions](../../Preface/Definitions) section in the Preface of this document. If *Xml-Field* is a data item, this clause must appear on a group item and *Xml-Field* must be defined directly within that group item.
2. *NameSpace-Data* is a [Nonnumeric Literal](../../Preface/Definitions#nonnumeric-literal) or [Data Item](../../Preface/Definitions#data-item) as defined in the [Definitions](../../Preface/Definitions) section in the Preface of this document.
3. *Count-Item* is a [Numeric Data Item](../../Preface/Definitions#numeric-data-item) as defined in the [Definitions](../../Preface/Definitions) section in the Preface of this document. If not explicitly defined, the runtime defines it internally.

#### General rules

1. If the IS IDENTIFIED clause is specified for a subordinate item, the IS IDENTIFIED clause must be specified in the first entry of the record description the item belongs to.
2. When the IS ATTRIBUTE phrase is not specified,

a. the data item identifies a field in the XML structure and *Xml-Field* represents the name of the field;

b. the [PICTURE clause](./PICTURE-clause) cannot be specified, the value of the field in the stream of the file will be the content of subordinate data items;

c. subordinate items cannot have the IS IDENTIFIED phrase specified, unless the IS ATTRIBUTE phrase is specified.

3. When the IS ATTRIBUTE phrase is specified,

a. the data item must be a subordinate item of an item for which the IS IDENTIFIED clause without the IS ATTRIBUTE phrase is specified;

b. the data item identifies an attribute of the field in the XML structure it belongs to;

c. if the [PICTURE clause](./PICTURE-clause) is specified, the value of the attribute will be the content of the data item;

d. if the [PICTURE clause](./PICTURE-clause) is not specified, the value of the attribute will be the content of the subordinate data items.

4. When BASE64BINARY is used, the data is coded in Base64 upon write and decoded in Base64 upon read.
5. When BOOLEAN is used, the data is considered a boolean value. This clause has effect only in JSON streams.

During the write of a JSON stream, if the data item is numeric and contains a value greater than 0, the boolean value true is written, else the boolean value false is written; if the data item is alphanumeric and contains the word “true” (evaluated in case insensitive way), the boolean value true is written, else the boolean value false is written.

During the read of a JSON stream, the boolean value true and the word “true” (evaluated in case insensitive way) are considered as true, any other value is considered as false. If the data item is numeric, it’s filled with 1 for true and 0 for false. If the data item is alphanumeric, it’s filled with the word “true” (lower case) for true and the word “false” (lower case) for false.

6. When HEXBINARY is used, the data is coded in hexadecimal upon write and decoded in hexadecimal upon read.
7. When RAW is used, special XML characters do not need to be escaped. This allows you to write everything in a tag, including new XML tags.
8. When BASE64BINARY, BOOLEAN, HEXBINARY or RAW are used, the data item may not be [USAGE CDATA](./USAGE-clause).
9. When NULLABLE is used, an empty value is replaced by the word 'null'. A numeric data item is considered empty when set to zero, spaces or low-values; an alphanumeric data item is considered empty when set to spaces or low-values. This clause has effect only in JSON streams.
10. The NAMESPACE clause specifies the value of the xmlns attribute of the field. The namespace URL must be provided. For example, the following XML element:

```cobol
<MyElement xmlns:p="http://www.awebsite.com/app/elements/v1.0">
```

is described as follows in the COBOL program:

```cobol
01 MyElement identified by "MyElement"
             namespace "http://www.awebsite.com/app/elements/v1.0". 
```

11. The namespace of an item is applied to all the sub items unless a different namespace is specified for them. If the value of the NAMESPACE clause is an empty string, then no namespace is used.
12. *Count-Item* is not updated automatically and is evaluated by the classes that handle XML documents.
13. If *Xml-Field* is a data item, its content is evaluated at the moment XML structure is used by the runtime system.
