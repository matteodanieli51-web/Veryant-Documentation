## CLASS-ID Paragraph

The CLASS-ID paragraph specifies the name by which the class is identified.

```cobol
CLASS-ID. Class-Name-1 [ AS Literal-1 ]
 
                       [ INHERITS FROM Class-Name-2 ]
 
                       [ IMPLEMENTS { Interface-Name } ... ] .
 
  [ AUTHOR. [ Comment-Entry-1 .] ]
 
  [ INSTALLATION. [ Comment-Entry-2 .] ]
 
  [ DATE-WRITTEN. [ Comment-Entry-3 .] ]
 
  [ DATE-COMPILED. [ Comment-Entry-4 .] ]
 
  [ SECURITY. [ Comment-Entry-5 .] ]
 
  [ REMARKS. [ Comment-Entry-6 .] ]
 
  [ Environment Division ]
 
  [ FACTORY Paragraph ]
 
  [ OBJECT Paragraph ]
 
[ END CLASS [ Class-Name-3 ] . ]
```

### Syntax rules

1. *Class-Name-1, Class-Name-2, Class-Name-3 and Interface-Name* are [User-defined words](../Preface/Definitions#user-defined-word), as defined in the [Definitions](../Preface/Definitions) section in the Preface of this document.
2. *Literal-1* is a [Nonnumeric Literal](../Preface/Definitions#nonnumeric-literal), as defined in the [Definitions](../Preface/Definitions) section in the Preface of this document.
3. *Comment-Entry-1, Comment-Entry-2, Comment-Entry-3, Comment-Entry-4, Comment-Entry-5 and Comment-Entry-6* are [Comment-Entries](../Preface/Definitions#comment-entry), as defined in the [Definitions](../Preface/Definitions) section in the Preface of this document.

General rules

1. *Class-Name-1* is the name by which the class is identified, unless the AS clause is specified.
2. *Literal-1* is the name by which the class is identified. It may contain the name of the Java package it belongs to. If *Literal-1* is omitted, it’s assumed to be the same as *Class-Name-1*.
3. *Class-Name-2* is the name of the class that *Class-Name-1* inherits from. *Class-Name-1* becomes a subclass of *Class-Name-2*. All the methods of *Class-Name-2* become available for *Class-Name-1*. If *Class-Name-1* implements a method of *Class-Name-2*, the new implementation overrides the one in *Class-Name-2*.
4. AUTHOR, INSTALLATION, DATE-WRITTEN, DATE-COMPILED, SECURITY and REMARKS are supported only for compatibility reasons and their presence does not affect the program behavior. However, they must properly formed when declared.
5. *Interface-Name* must be defined in the [REPOSITORY Paragraph](\) in the Configuration Section of the ENVIRONMENT DIVISION.
