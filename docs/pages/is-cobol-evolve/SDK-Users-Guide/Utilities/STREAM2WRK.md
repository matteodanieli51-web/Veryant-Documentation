## STREAM2WRK

The STREAM2WRK utility opens JSON, XML, WSDL and XSD files and generates the corresponding COBOL record description to be used by runtime classes like XMLStream, JSONStream and HTTPClient or in an XD record definition.

### Usage 1 (JSON):

```cobol
stream2wrk json jsonFile [-o outputfile] [-p prefix] [-d] [-r rootname] [-anyescape]
```

Where:

- *jsonFile* is the name of the JSON file to parse. It can be either a disk file or a URL. Note that the utility is not able to read a file over the HTTPS protocol. In those cases, the file should be downloaded to disc using third party utilities (e.g. a web browser) and then processed as a disc file.
- *outputFile* is the name of the file that will contain the record definition corresponding to jsonFile. If omitted, a file named jsonFile.wrk is created.
- *prefix* defines a string to be put in front of every data name in the record definition.
  - When set to "0" or omitted, data-names are generated with no prefix.
  - When set to "1", the prefix will be the name of the JSON file.
  - Any other value represents the prefix to be used, without any conversion.
- *-d* activates or deactivates names ambiguity check
  - When -d is omitted, field names are generated without control.
  - When -d is used, field names are adapted if necessary in order to avoid ambiguous identifiers.
- When processing a JSON without root element or with an array as root element, Stream2Wrk generates a 01 level named "json2wrk". This name can be changed via -r command line option.
- *-anyescape* allows you to process JSON streams that include backslashes among item values. Use this option if you encounter the error *Internal error:org.xml.sax.SAXException: Unxpected character*.

### Usage 2 (WSDL):

```cobol
stream2wrk wsdl wsdlFile [-o outputfile] [v1.1]
```

Where:

- *wsdlFile* is the name of the WSDL file to parse. It can be either a disk file or a URL. Note that the utility is not able to read a file over the HTTPS protocol. In those cases, the file should be downloaded to disc using third party utilities (e.g. a web browser) and then processed as a disc file.

If the WSDL file includes a XSD, then the utility parses the XSD and the result is more accurate. If no XSD is available, then the utility guesses the fields characteristics according to the WSDL content.

- *outputFile* is the name of the file that will contain the record definition corresponding to *wsdlFile*. Multiple copy files are generated, one for each method described in the WSDL. The copy file is named by appending the method name to *outputfile*.

If outputfile is omitted, then the generated code is printed on the console.

- *-v.1.1* should be used to process WSDL files of version 1.1. By default the utility expects WSDL files of version 2.0.

### Usage 3 (XML):

```cobol
stream2wrk xml xmlFile [-o outputfile] [-p prefix] [-d] [-e] [-se enumeration-suffix] [-sa attribute-suffix] [-c] [-sc count-suffix] [-scp capacity-suffix] [-sd data-suffix] [-iu] [-l[=len]] [-nc]
```

Where:

- *xmlFile* is the name of the XML file to parse. It can be either a disk file or a URL. Note that the utility is not able to read a file over the HTTPS protocol. In those cases, the file should be downloaded to disc using third party utilities (e.g. a web browser) and then processed as a disc file.
If the XML file includes a XSD, then the utility parses the XSD and the result is more accurate. If no XSD is available, then the utility guesses the fields characteristics according to the XML content.
- *outputFile* is the name of the file that will contain the record definition corresponding to *xmlFile*. If omitted, a file named *xmlFile*.wrk is created.
- *prefix* defines a string to be put in front of every data name in the record definition.
  - When set to "0" or omitted, data-names are generated with no prefix.
  - When set to "1", the prefix will be the name of the XML file.
  - Any other value represents the prefix to be used, without any conversion.
- *-d* activates or deactivates names ambiguity check
  - When -d is omitted, field names are generated without control.
  - When -d is used, field names are adapted if necessary in order to avoid ambiguous identifiers.
- *-e* generates 88 level representing 'enumeration' tags.
- *-se* specifies an alternate suffix for the enumeration data-items.
- *-sa* specifies an alternate suffix for the 'attribute' data-items.
- *-c* generate 'count' data-items.
- *-sc* specifies an alternate suffix for the 'count' data-items.
- *-scp* specifies an alternate suffix for the 'capacity' data-items when OCCURS DYNAMIC is used.
- *-sd* specifies an alternate suffix for the 'data' data-items.
- *-iu* doesn't generate OCCURS when 'maxOccurs=unbounded' is found in the XSD.
- *-l* generates alphanumeric data-items with fixed size instead of using 'pic x any length'. The size is equal to the value of the 'maxLength' attribute in the XSD, if present, otherwise it is equal to *len*; if *len* was not specified, then 'len=80' is assumed.
- *-nc* doesn’t generate comment lines.

### Usage 4 (XSD):

```cobol
stream2wrk xsd xsdFile [-o outputfile] [-p prefix] [-d] [-e] [-se enumeration-suffix] [-sa attribute-suffix] [-c] [-sc count-suffix] [-scp capacity-suffix] [-sd data-suffix] [-iu] [-l[=len]] [-nc]
```

Where:

- *xsdFile* is the name of the XSD file to parse. It can be either a disk file or a URL. Note that the utility is not able to read a file over the HTTPS protocol. In those cases, the file should be downloaded to disc using third party utilities (e.g. a web browser) and then processed as a disc file.
- *outputFile* is the name of the file that will contain the record definition corresponding to *xsdFile*. If omitted, a file named *xsdFile*.wrk is created.
- *prefix* defines a string to be put in front of every data name in the record definition.
  - When set to "0" or omitted, data-names are generated with no prefix.
  - When set to "1", the prefix will be the name of the XSD file.
  - Any other value represents the prefix to be used, without any conversion.
- *-d* activates or deactivates names ambiguity check
  - When -d is omitted, field names are generated without control.
  - When -d is used, field names are adapted if necessary in order to avoid ambiguous identifiers.
- *-e* generates 88 level representing 'enumeration' tags.
- *-se* specifies an alternate suffix for the enumeration data-items.
- *-sa* specifies an alternate suffix for the 'attribute' data-items.
- *-c* generate 'count' data-items.
- *-sc* specifies an alternate suffix for the 'count' data-items.
- *-scp* specifies an alternate suffix for the 'capacity' data-items when OCCURS DYNAMIC is used.
- *-sd* specifies an alternate suffix for the 'data' data-items.
- *-iu* doesn't generate OCCURS when 'maxOccurs=unbounded' is found in the XSD.
- *-l* generates alphanumeric data-items with fixed size instead of using 'pic x any length'. The size is equal to the value of the 'maxLength' attribute in the XSD, if present, otherwise it is equal to *len*; if *len* was not specified, then 'len=80' is assumed.
- *-nc* doesn’t generate comment lines.

### Thin Client

STREAM2WRK can’t be launched directly by the isCOBOL Client.
