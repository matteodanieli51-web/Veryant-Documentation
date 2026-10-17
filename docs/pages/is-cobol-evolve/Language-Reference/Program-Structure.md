# Program Structure

## Synopsis

The schema below shows how a COBOL program is structured. For simplifying access to information, it has been split into smaller parts.

### COBOL Program

```cobol
 [{IDENTIFICATION} DIVISION. ]
  {ID            }
 
  { {PROGRAM-ID  }. Program-Name [ IS {INITIAL } PROGRAM ] .
                                      {RESIDENT}
 
      [ AUTHOR. [Comment-Entry .] ]
 
      [ INSTALLATION. [Comment-Entry .] ]
 
      [ DATE-WRITTEN. [Comment-Entry .] ]
 
      [ DATE-COMPILED. [Comment-Entry .] ]
 
      [ SECURITY. [Comment-Entry .] ]
 
      [ REMARKS. [Comment-Entry .] ]
 
      [ ENVIRONMENT DIVISION. ]
 
      [ DATA DIVISION. ]
 
      PROCEDURE DIVISION
 
      [ END PROGRAM [ Program-Name ]. ] }
```

### COBOL Class

```cobol
 [{IDENTIFICATION} DIVISION. ]
  {ID            }
 
  { CLASS-ID. Class-Name [ AS Literal ]
 
                           [ INHERITS FROM Class-Name ]
 
                           [ IMPLEMENTS { Interface-Name } ... ] .
  
      [ AUTHOR. Comment-Entry . ]
 
      [ INSTALLATION. Comment-Entry . ]
 
 
      [ DATE-WRITTEN. Comment-Entry . ]
 
      [ DATE-COMPILED. Comment-Entry . ]
 
      [ AUTHOR. Comment-Entry . ]
 
      [ INSTALLATION. Comment-Entry . ]
 
      [ DATE-WRITTEN. Comment-Entry . ]
 
      [ DATE-COMPILED. Comment-Entry . ]
 
      [ SECURITY. Comment-Entry . ]
 
      [ REMARKS. Comment-Entry . ]
 
      [ ENVIRONMENT DIVISION. ]
 
      [ {IDENTIFICATION} DIVISION.
        {ID            }
 
        FACTORY.
 
          [ ENVIRONMENT DIVISION. ]
 
          [ DATA DIVISION. ]
 
          [ PROCEDURE DIVISION.
 
            [ {IDENTIFICATION} DIVISION.
              {ID            }
 
              METHOD-ID. Method-Name [ AS Literal ] [ IS {PUBLIC   } ] [ OVERRIDE ].
                                                         {PRIVATE  }
                                                         {PROTECTED}
 
                [ ENVIRONMENT DIVISION. ]
 
                [ DATA DIVISION. ]
 
                PROCEDURE DIVISION
 
                END METHOD [ Method-Name ]. ] ... ]
 
          END FACTORY. ]
 
      [ {IDENTIFICATION} DIVISION.
        {ID            }
 
        OBJECT.
 
          [ ENVIRONMENT DIVISION. ]
 
          [ DATA DIVISION. ]
 
 
          [ PROCEDURE DIVISION.
 
            [ {IDENTIFICATION} DIVISION.
              {ID            }
 
              METHOD-ID. Method-Name [ AS Literal ] [ IS {PUBLIC   } ] [ OVERRIDE ].
                                                         {PRIVATE  }
                                                         {PROTECTED}
 
                [ ENVIRONMENT DIVISION. ]
 
                [ DATA DIVISION. ]
 
                PROCEDURE DIVISION
 
                END METHOD [ Method-Name ]. ] ... ]
 
          END OBJECT. ]
      [ END CLASS [ Class-Name ]. ] }
```

### Syntax rules

1. *Program-Name* is a [User-defined word](./Preface/Definitions#user-defined-word), as defined in the [Definitions](./Preface/Definitions) section in the Preface of this document.
2. Each reference to *Comment-Entry* is a [Comment-Entry](./Preface/Definitions#comment-entry), as defined in the [Definitions](./Preface/Definitions) section in the Preface of this document.
3. Each reference to *Class-Name* is a [User-defined word](./Preface/Definitions#user-defined-word), as defined in the [Definitions](./Preface/Definitions) section in the Preface of this document
4. *Interface-Name* is a [User-defined word](./Preface/Definitions#user-defined-word), as defined in the [Definitions](./Preface/Definitions) section in the Preface of this document.
5. Each reference to *Method-Name* is a [User-defined word](./Preface/Definitions#user-defined-word), as defined in the [Definitions](./Preface/Definitions) section in the Preface of this document.
6. Each reference to *Literal* is a [Nonnumeric Literal](./Preface/Definitions#nonnumeric-literal), as defined in the [Definitions](./Preface/Definitions) section in the Preface of this document.

### General rules

1. Multiple programs can be included in the same source file.

  - If a program is included before the END PROGRAM clause of another program, it becomes a nested program, and it can be called only by his parent program.
  - If a program is included after the END PROGRAM clause of another program, it becomes a sibling program, and it can be called by every other program in the runtime session.

The below table summarizes the possible combinations of different types of program in the same source file:

|  | Can be sibling to | | | Can be nested in | | |
| --- | --- | --- | --- | --- | --- | --- |
| | **PROGRAM-ID** | **FUNCTION-ID** | **CLASS/INTERFACE-ID** | **PROGRAM-ID** | **FUNCTION-ID** | CLASS/INTERFACE-ID |
| **PROGRAM-ID** | X | X |  | X |  |  |
| **FUNCTION-ID** | X | X |  | X |  |  |
| **CLASS/INTERFACE-ID** |  |  | X |  |  |  |
