## PROGRAM-ID Paragraph

The PROGRAM-ID paragraph specifies the name by which the program is identified.

### General format

```cobol
{PROGRAM-ID }. Program-Name [ IS {INITIAL  } PROGRAM ] .
                                 {RECURSIVE}
                                 {RESIDENT }
 
  [ AUTHOR. [ Comment-Entry-1 .] ]
 
  [ INSTALLATION. [ Comment-Entry-2 .] ]
 
  [ DATE-WRITTEN. [ Comment-Entry-3 .] ]
 
  [ DATE-COMPILED. [ Comment-Entry-4 .] ]
 
  [ SECURITY. [ Comment-Entry-5 .] ]
 
  [ REMARKS. [ Comment-Entry-6 .] ]
 
  [ Environment Division ]
 
  [ Data Division ]
 
  Procedure Division
 
 [ END PROGRAM [Program-Name]. ]
```

### Syntax rules

1. *Program-Name* is a [User-defined word](../Preface/Definitions#user-defined-word), as defined in the [Definitions](../Preface/Definitions) section in the Preface of this document.
2. *Comment-Entry-1, Comment-Entry-2, Comment-Entry-3, Comment-Entry-4, Comment-Entry-5 and Comment-Entry-6* are [Comment-Entries](../Preface/Definitions#comment-entry), as defined in the [Definitions](../Preface/Definitions) section in the Preface of this document.
3. The RECURSIVE clause is treated as commentary.

### General rules

4. *Program-Name* identifies the source program, the object program, and all listings pertaining to a particular program.
5. When the INITIAL clause is specified, the program is automatically cancelled from memory when it terminates. The memory used by its data items is released and all files are closed.
6. When the RESIDENT clause is specified, the program is never cancelled. [CANCEL](\) Statements have no effect on it.
7. AUTHOR, INSTALLATION, DATE-WRITTEN, DATE-COMPILED, SECURITY and REMARKS are supported only for compatibility reasons and their presence does not affect the program behavior. However, they must properly formed when declared.
