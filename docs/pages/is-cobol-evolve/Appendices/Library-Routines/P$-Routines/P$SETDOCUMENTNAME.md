### P$SETDOCUMENTNAME

The P$SETDOCUMENTNAME sets the name of the print job.

#### Syntax

```cobol
 CALL "P$SETDOCUMENTNAME" USING documentName
                               [destination]
```

#### Parameters

|  |  |  |
| --- | --- | --- |
| *documentName* | PIC X(n) | Specifies the job name. |
| *destination* | PIC X(n) | Optional. Specifies the job output.<br>Possible value are:<br>"Pdf" -> the document is saved as a PDF file<br>"View" -> the document is shown as print preview<br>"Spool" -> the document is sent to the system Spooler |
