# Environment Division

The Environment Division specifies those aspects of a data processing problem that may be dependent upon the physical characteristics of a specific computer.

In Object Oriented programs it may appear more than once. In that case, the definitions are valid for specific contexts, with the following rules:

1. When specified in the FACTORY Paragraph, definitions are valid for all the methods of the program.
2. When specified in the OBJECT Paragraph, definitions are valid for all the methods belonging to the OBJECT Paragraph.
3. When specified in the METHOD-ID Paragraph, definitions are valid only for that method.

## General format

```cobol
[ ENVIRONMENT DIVISION. ]
 
  [ CONFIGURATION Section ]
 
  [ INPUT-OUTPUT Section ]
```
