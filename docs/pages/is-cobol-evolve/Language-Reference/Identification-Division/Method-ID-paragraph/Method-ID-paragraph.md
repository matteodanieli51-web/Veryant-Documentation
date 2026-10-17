## METHOD-ID Paragraph

The METHOD-ID Paragraph introduces a method definition.

### General format

```cobol
{IDENTIFICATION} DIVISION.
{ID            }
 
METHOD-ID.  {Method-Name [ AS Literal-1 ]} [ IS {PUBLIC   } ] [ OVERRIDE ].
            {Literal-1                   }      {PRIVATE  }
                                                {PROTECTED}
                                                {DEFAULT  }
                                                {STATIC   }
 
  [ Method-Signature ]
 
  [ Environment Division ]
 
  [ Data Division ]
 
  Procedure Division
 
END METHOD [{[Method-Name]}]
            {Literal-1    }.
```

### Syntax rules

1. Method-Name is a [User-defined word](../../Preface/Definitions#user-defined-word), as defined in the [Definitions](../../Preface/Definitions) section in the Preface of this document.
2. Literal-1 is a [Nonnumeric Literal](../../Preface/Definitions#nonnumeric-literal), as defined in the [Definitions](../../Preface/Definitions) section in the Preface of this document.

### General rules

1. *Method-Name* is the name by which the method is identified, unless the AS clause is specified. If *Method-Name* is an empty string, an unnamed method is produced. See [Unnamed methods](\) for further details.
2. *Literal-1* is the name by which the method is identified. If *Literal-1* is omitted, it’s assumed to be the same as *Method-Name*.
3. When the OVERRIDE clause is specified, the method definition overrides the same method of the super class.

### CLASS-ID

4. In a CLASS-ID, DEFAULT and STATIC methods are not allowed.
5. When the PUBLIC phrase is specified, the method can be referenced by any program.
6. When the PRIVATE phrase is specified, the method can be referenced only by the class it refers to.
7. When the PROTECTED phrase is specified, the method can be referenced by the class it refers to and by those classes that inherit from it.
8. If neither PUBLIC nor PRIVATE nor PROTECTED are specified, the method is PUBLIC.

### INTERFACE-ID

9. In an INTERFACE-ID, PUBLIC, PRIVATE and PROTECTED methods are not allowed.
10. When the DEFAULT phrase is specified,
  - the method can have a PROCEDURE DIVISION
  - the method must appear in the OBJECT paragraph.
11. When the STATIC phrase is specified,
  - the method can have a PROCEDURE DIVISION
  - the method must appear in the FACTORY paragraph.
12. When neither DEFAULT nor STATIC are specified,
  - the method can’t have a PROCEDURE DIVISION
  - the method must appear in the OBJECT paragraph.
13. Unlike standard interface methods, DEFAULT and STATIC methods are not required to be present in the implementing class. If the implementing class doesn’t include these methods, the code in the INTERFACE-ID is executed when these methods are invoked.

DEFAULT and STATIC methods enable you to add new functionality in the interfaces without breaking the existing contract of the implementing classes.
