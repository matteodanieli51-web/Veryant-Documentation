### CXML-SET-PROC-INSTR

The CXML-SET-PROC-INSTR function sets processing instructions (i.e. the stylesheet) in the XML file.

#### Syntax:

```cobol
 CALL "C$XML" USING CXML-SET-PROC-INSTR
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
| *idx* | PIC 9(n) | Specifies the index of the processing instruction. Use 1 to set the first processing instruction, 2 to set the second, and so on. |
| *target* | PIC X(n) | Specifies the target.  For example, to generate the following instruction: <?xml-stylesheet type="text/css" href="veryant.css"?\><br>set *target* to:  xml-stylesheet. |
| *data* | PIC X(n) | Specifies the data. For example, to generate the following instruction: <?xml-stylesheet type="text/css" href="veryant.css"?\><br>set *data* to:  type="text/css" href="veryant.css".<br>Set this item to spaces to remove the instruction. |
