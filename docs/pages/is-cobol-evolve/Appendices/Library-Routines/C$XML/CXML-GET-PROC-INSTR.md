### CXML-GET-PROC-INSTR

The CXML-GET-PROC-INSTR function retrieves processing instructions (i.e. the stylesheet) from the XML file.

#### Syntax:

```cobol
 CALL "C$XML" USING CXML-GET-PROC-INSTR
                    handle
                    idx
                    target
                    data
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *CXML-GET-PROC-INSTR* | Constant |  |
| *handle* | USAGE HANDLE | A XML parser handle. |
| *idx* | PIC 9(n) | Specifies the index of the processing instruction. Use 1 to get the first processing instruction, 2 to get the second, and so on. |
| *target* | PIC X(n) | Returns the target. For example, if the following instruction is processed:  <?xml-stylesheet type="text/css" href="veryant.css"?\><br>*target* will be set to: xml-stylesheet. |
| *data* | PIC X(n) | Returns the data. For example, if the following instruction is processed: <?xml-stylesheet type="text/css" href="veryant.css"?\><br>*data* will be set to:  type="text/css" href="veryant.css". |
