# Identification Division

The IDENTIFICATION DIVISION identifies the program and is required in a COBOL source program.

Paragraph headers identify the type of information contained in the paragraph.

The name of the program must be given in the first paragraph, which can be the PROGRAM-ID Paragraph or the CLASS-ID Paragraph when defining a class.

## General format

```cobol
 [{IDENTIFICATION} DIVISION. ]
  {ID            }
 
  {PROGRAM-ID Paragraph}
  {FUNCTION-ID Paragraph}
  {CLASS-ID Paragraph  }
  {INTERFACE-ID Paragraph  }
```
