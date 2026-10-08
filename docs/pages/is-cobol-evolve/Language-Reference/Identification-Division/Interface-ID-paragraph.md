## INTERFACE-ID Paragraph

The INTERFACE-ID paragraph specifies the name by which the interface is identified.

```cobol
INTERFACE-ID. Interface-Name-1 [ AS Literal-1 ]
 
                       [ INHERITS FROM Interface-Name-2 ]
 
  [ AUTHOR. [ Comment-Entry-1 .] ]
 
  [ INSTALLATION. [ Comment-Entry-2 .] ]
 
  [ DATE-WRITTEN. [ Comment-Entry-3 .] ]
 
  [ DATE-COMPILED. [ Comment-Entry-4 .] ]
 
  [ SECURITY. [ Comment-Entry-5 .] ]
 
  [ REMARKS. [ Comment-Entry-6 .] ]
 
  [ Environment Division ]
 
  [ FACTORY Paragraph ]
 
  [ OBJECT Paragraph ]
 
[ END INTERFACE [ Interface-Name-3 ] . ]
```

### Syntax rules

1. *Interface-Name-1, Interface-Name-2 and Interface-Name-3* are [User-defined word](../Preface/Definitions#user-defined-word)s, as defined in the [Definitions](../Preface/Definitions) section in the Preface of this document.
2. *Literal-1* is a [Nonnumeric Literal](../Preface/Definitions#nonnumeric-literal), as defined in the [Definitions](../Preface/Definitions) section in the Preface of this document.
3. *Comment-Entry-1, Comment-Entry-2, Comment-Entry-3, Comment-Entry-4, Comment-Entry-5 and Comment-Entry-6* are [Comment-Entries](../Preface/Definitions#comment-entry), as defined in the [Definitions](../Preface/Definitions) section in the Preface of this document.

### General rules

1. *Interface-name-1* names the interface declared by this interface definition.
2. *Literal-1* is the name by which the interface is identified. It may contain the name of the Java package it belongs to. If *Literal-1* is omitted, it’s assumed to be the same as *Interface-Name-1*.
3. *Interface-Name-2* is the name of the class that *Interface-Name-1* inherits from. *Interface-Name-1* becomes a subclass of *Interface-Name-2*. All the methods of *Interface-Name-2* become available for *Interface-Name-1*. If *Interface-Name-1* implements a method of *Interface-Name-2*, the new implementation overrides the one in *Interface-Name-2*.
4. AUTHOR, INSTALLATION, DATE-WRITTEN, DATE-COMPILED, SECURITY and REMARKS are supported only for compatibility reasons and their presence does not affect the program behavior. However, they must properly formed when declared.
5. No fields are allowed in an INTERFACE-ID.
