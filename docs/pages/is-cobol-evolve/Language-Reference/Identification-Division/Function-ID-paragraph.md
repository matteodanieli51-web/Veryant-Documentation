## FUNCTION-ID Paragraph

The FUNCTION-ID paragraph specifies the name by which the user-defined function is identified.

### General format

```cobol
{FUNCTION-ID }. Function-Name .
  [ AUTHOR. [ Comment-Entry-1 .] ]
 
  [ INSTALLATION. [ Comment-Entry-2 .] ]
 
  [ DATE-WRITTEN. [ Comment-Entry-3 .] ]
 
  [ DATE-COMPILED. [ Comment-Entry-4 .] ]
 
  [ SECURITY. [ Comment-Entry-5 .] ]
 
  [ REMARKS. [ Comment-Entry-6 .] ]
 
  [ Environment Division ]
 
  [ Data Division ]
 
  Procedure Division
 
 [ END FUNCTION [Function-Name]. ]
```

### Syntax rules

1. *Function-Name* is a [User-defined word](../Preface/Definitions#user-defined-word), as defined in the [Definitions](../Preface/Definitions) section in the Preface of this document.
2. *Comment-Entry-1, Comment-Entry-2, Comment-Entry-3, Comment-Entry-4, Comment-Entry-5 and Comment-Entry-6* are [Comment-Entries](../Preface/Definitions#comment-entry), as defined in the [Definitions](../Preface/Definitions) section in the Preface of this document.

### General rules

3. *Function-Name* identifies the source program, the object program, and all listings pertaining to a particular program.
4. AUTHOR, INSTALLATION, DATE-WRITTEN, DATE-COMPILED, SECURITY and REMARKS are supported only for compatibility reasons and their presence does not affect the program behavior. However, they must properly formed when declared.
