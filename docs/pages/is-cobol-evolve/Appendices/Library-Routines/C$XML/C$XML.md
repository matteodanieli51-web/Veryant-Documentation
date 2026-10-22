## C$XML

The C$XML routine enables you to work with XML documents. You can use C$XML to parse documents and change their content, as well as to create new documents from scratch.

When parsing the XML document, referenced DTD (Document Type Definition) and XSD (XML Schema definition) are considered. If the referenced DTD can’t be found due to invalid or unreachable location, then it’s ignored.

When writing content to the XML document, the following data conversion rules are applied:

- Trailing spaces in alphanumeric parameters are trimmed
- Leading zeros are kept in numeric values

### Syntax:

```cobol
 CALL "C$XML" USING opCode
                    parameters
             GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *opCode* | The function to be executed. Valid values, defined in [iscobol.def](../../Copybooks/iscobol.def), are: |  |
|  | [CXML-PARSE-FILE](./CXML-PARSE-FILE) | Opens a XML file and returns the XML tree |
|  | [CXML-RELEASE-PARSER](./CXML-RELEASE-PARSER) | Releases memory used by the XML tree |
|  | [CXML-GET-FIRST-CHILD](./CXML-GET-FIRST-CHILD) | Returns the first child of a given element |
|  | [CXML-GET-NEXT-SIBLING](./CXML-GET-NEXT-SIBLING) | Returns the next sibling of a given element |
|  | [CXML-GET-PARENT](./CXML-GET-PARENT) | Returns the parent element of a given element |
|  | [CXML-GET-DATA](./CXML-GET-DATA) | Returns the name and the CDATA of a given element |
|  | [CXML-GET-ATTRIBUTE-COUNT](./CXML-GET-ATTRIBUTE-COUNT) | Returns the number of attributes of a given element |
|  | [CXML-GET-ATTRIBUTE](./CXML-GET-ATTRIBUTE) | Returns the name and the value of a given attribute |
|  | [CXML-GET-LAST-ERROR](./CXML-GET-LAST-ERROR) | Returns the last error |
|  | [CXML-OPEN-FILE](./CXML-OPEN-FILE) | Opens a XML file without parsing it |
|  | [CXML-PARSE-STRING](./CXML-PARSE-STRING) | Parses a string as XML |
|  | [CXML-PARSE-NEXT-RECORD](./CXML-PARSE-NEXT-RECORD) | Parses the next record in the element |
|  | [CXML-GET-PREV-SIBLING](./CXML-GET-PREV-SIBLING) | Returns the previous sibling of a given element |
|  | [CXML-NEW-PARSER](./CXML-NEW-PARSER) | Creates an empty XML document in memory |
|  | [CXML-GET-ATTRIBUTE-BY-NAME](./CXML-GET-ATTRIBUTE-BY-NAME) | Returns the attribute with the given name along with its value |
|  | [CXML-GET-CHILD-BY-NAME](./CXML-GET-CHILD-BY-NAME) | Returns the child element with the given name |
|  | [CXML-GET-CHILD-BY-CDATA](./CXML-GET-CHILD-BY-CDATA) | Returns the child element with the given CDATA |
|  | [CXML-GET-CHILD-BY-ATTR-NAME](./CXML-GET-CHILD-BY-ATTR-NAME) | Returns the child element with the given attribute |
|  | [CXML-GET-CHILD-BY-ATTR-VALUE](./CXML-GET-CHILD-BY-ATTR-VALUE) | Returns the child element with the given attribute value |
|  | [CXML-GET-SIBLING-BY-NAME](./CXML-GET-SIBLING-BY-NAME) | Returns the sibling element with the given name |
|  | [CXML-GET-SIBLING-BY-CDATA](./CXML-GET-SIBLING-BY-CDATA) | Returns the sibling element with the given CDATA |
|  | [CXML-GET-SIBLING-BY-ATTR-NAME](./CXML-GET-SIBLING-BY-ATTR-NAME) | Returns the sibling element with the given attribute |
|  | [CXML-GET-SIBLING-BY-ATTR-VALUE](./CXML-GET-SIBLING-BY-ATTR-VALUE) | Returns the sibling element with the given attribute value |
|  | [CXML-GET-COMMENT](./CXML-GET-COMMENT) | Returns the comment associated to a given element or document |
|  | [CXML-SET-DATA](./CXML-SET-DATA) | Changes the CDATA of a given element |
|  | [CXML-MODIFY-ATTRIBUTE-VALUE](./CXML-MODIFY-ATTRIBUTE-VALUE) | Changes the value of a given attribute |
|  | [CXML-ADD-CHILD](./CXML-ADD-CHILD) | Adds a new child item to the given element |
|  | [CXML-ADD-SIBLING](./CXML-ADD-SIBLING) | Adds a new sibling item to the given element |
|  | [CML-ADD-ATTRIBUTE](./CML-ADD-ATTRIBUTE) | Adds an attribute to a given element |
|  | [CXML-ADD-COMMENT](./CXML-ADD-COMMENT) | Adds a comment to a given element or document |
|  | [CXML-APPEND-COMMENT](./CXML-APPEND-COMMENT) | Appends a new comment to a given element or document |
|  | [CXML-DELETE-ATTRIBUTE](./CXML-DELETE-ATTRIBUTE) | Deletes an attribute from an element |
|  | [CXML-DELETE-ELEMENT](./CXML-DELETE-ELEMENT) | Deletes an element |
|  | [CXML-DELETE-COMMENT](./CXML-DELETE-COMMENT) | Deletes comments from an element |
|  | [CXML-WRITE-FILE](./CXML-WRITE-FILE) | Writes a XML document to file |
|  | [CXML-WRITE-STRING](./CXML-WRITE-STRING) | Writes a String |
|  | [CXML-GET-PROC-INSTR-COUNT](./CXML-GET-PROC-INSTR-COUNT) | Retrieves the number of processing instructions |
|  | [CXML-GET-PROC-INSTR](./CXML-GET-PROC-INSTR) | Retrieves processing instructions |
|  | [CXML-SET-PROC-INSTR](./CXML-SET-PROC-INSTR) | Sets processing instructions |
|  | [CXML-GET-VERSION](./CXML-GET-VERSION) | Returns the version of the XML document |
|  | [CXML-SET-VERSION](./CXML-SET-VERSION) | Changes the version of the XML document |
|  | [CXML-GET-ENCODING](./CXML-GET-ENCODING) | Returns the encoding of the XML document |
|  | [CXML-SET-ENCODING](./CXML-SET-ENCODING) | Changes the encoding of the XML document |
|  | [CXML-GET-STANDALONE](./CXML-GET-STANDALONE) | Returns the value of the standalone pseudo-attribute |
|  | [CXML-SET-STANDALONE](./CXML-SET-STANDALONE) | Changes the value of the standalone pseudo-attribute |

### Return code:

The definition and meaning of the *returnCode* depend on the opcode.

### Examples:

**Example -** Read the content of file.xml and show it on the console.

```cobol
       working-storage section.
       copy "iscobol.def".

       77  xml-handle                          handle.
       77  elem-handle                         handle.
       77  next-elem-handle                    handle.
       77  xml-item-name                       pic x(32).
       77  xml-item-value                      pic x(32).
       77  attr-count                          pic 99.
       77  i                                   pic 99.
       77  attr-name                           pic x(32).
       77  attr-value                          pic x(32).

       procedure division.
       read-xml.
           call "c$xml" using cxml-parse-file
                              "file.xml"
                       giving xml-handle.

           call "c$xml" using cxml-get-first-child
                              xml-handle
                       giving elem-handle.

           perform until exit
             initialize xml-item-name, xml-item-value
             call "c$xml" using cxml-get-data
                                elem-handle
                                xml-item-name
                                xml-item-value
             display "elem. name: " xml-item-name
             display "elem. value: " xml-item-value

             call "c$xml" using cxml-get-attribute-count
                                elem-handle
                         giving attr-count
             display "attr. count: " attr-count
             if attr-count > 0
                perform varying i from 1 by 1 until i > attr-count
                  call "c$xml" using cxml-get-attribute
                                     elem-handle
                                     i
                                     attr-name
                                     attr-value
                  display "attr. name: " attr-name
                  display "attr. value: " attr-value
                end-perform
             end-if
             call "c$xml" using cxml-get-next-sibling
                                elem-handle
                         giving next-elem-handle
             destroy elem-handle
             if next-elem-handle = 0
                exit perform
             else
                move next-elem-handle to elem-handle
             end-if
           end-perform.
           display ""
           call "c$xml" using cxml-release-parser
                              xml-handle.
           accept omitted.
           goback.
```
