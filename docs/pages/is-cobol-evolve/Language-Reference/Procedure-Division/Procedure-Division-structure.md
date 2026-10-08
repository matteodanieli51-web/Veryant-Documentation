## Procedure division structure

### General format

```cobol
PROCEDURE DIVISION
 
  [ { USING [{BY VALUE    }] {Data-Name-1}... } ]
           {BY REFERENCE}
 
    { CHAINING {Data-Name-1}...               }
 
  [ RETURNING Data-Name-2 ]
 
  [ RAISING {Class-Name-1    } ... ] .
            {Interface-Name-1}
 
  [ DECLARATIVES.
 
    { Section-Name-1 SECTION .
 
      Use-Statement.
 
      [Sentence-1] ... [ [ Paragraph-Name-1 . ] [Sentence-2] ... ] ... } ...
 
    END-DECLARATIVES . ]
 
  [ [ Section-Name-2 SECTION . [Sentence-3] ... [ [ Paragraph-Name-2 . ] [Sentence-3] ... ] ... ] ] ...
    [ [ Paragraph-Name-3 . ] [Sentence-4] ...                                                   ]
```

### Syntax rules

1. *Data-Name-1, Data-Name-2, Class-Name-1, Interface-Name-1, Section-Name-1, Section-Name-2, Paragraph-Name-1, Paragraph-Name-2, Paragraph-Name-3* and *Paragraph-Name-4* are [User-defined word](../Preface/Definitions#user-defined-word)s, as defined in the [Definitions](../Preface/Definitions) section in the Preface of this document.
2. *Data-name-1* shall be defined as a level 01 entry or a level 77 entry in the linkage section. A particular user-defined word shall not appear more than once as *data-name-1*.
3. The RETURNING phrase may be specified only in a method definition.
4. The RAISING phrase may be specified only in a method definition.
5. *Class-Name-1* shall be the name of a class specified in the [REPOSITORY Paragraph](../Environment-Division/Configuration-Section/Repository) in the Configuration Section of the ENVIRONMENT DIVISION.
6. *Interface-Name-1* shall be the name of a class specified in the [REPOSITORY Paragraph](../Environment-Division/Configuration-Section/Repository) in the Configuration Section of the ENVIRONMENT DIVISION.
7. BY VALUE and BY REFERENCE are treated as a commentary.
8. If USING is used, *Data-Name-1* must be declared in the program Linkage Section. If CHAINING is used, *Data-Name-1* must be declared in the program Working-Storage Section or File Section.
9. If *Data-Name-1* is a table and is referenced without subscripting:

- If USING is used, *Data-Name-1* is treated as a buffer whose size is the size of each table element multiplied by the number of occurrences. For example, the following code:

```cobol
linkage section.
01 par occurs 2.
   03 para pic x.
   03 parb pic x.
procedure division using par.
main.
   display para(1).
   display parb(1).
   display para(2).
   display parb(2).
```

is equivalent to:

```cobol
linkage section.
01 par pic x(4).
procedure division using par.
main.
   display par(1:1).
   display par(2:1).
   display par(3:2).
   display par(4:2).
```

- If CHAINING is used, the first element of *Data-Name-1* is considered. For example, the following code:

```cobol
working-storage section.
01 par occurs 2.
   03 para pic x.
   03 parb pic x.
procedure division chaining par.
```

- is equivalent to:

```cobol
working-storage section.
01 par occurs 2.
   03 para pic x.
   03 parb pic x.
procedure division chaining par(1).
```

### General rules

1. Execution begins with the first statement of the procedure division, excluding declaratives. Statements are then executed in the order in which they are presented for compilation, except where the rules indicate some other order.
2. The USING phrase identifies the formal parameters used by the method or program for any arguments passed to it. The arguments passed from the activating element are:

- the arguments specified in the USING phrase of a [CALL](../Procedure-Division-Statements/CALL) Statement
- the arguments specified in the USING phrase of a [CHAIN](../Procedure-Division-Statements/CHAIN) Statement
- the arguments specified in the USING phrase of an [INVOKE](../Procedure-Division-Statements/INVOKE) Statement
- the arguments specified in an inline invocation of a method

The correspondence between the arguments and the formal parameters is established on a positional basis.

The conformance requirements for formal parameters and returning items are specified in [Conformance for parameters and returning items](./Conformance-for-parameters-and-returning-items/Conformance-for-parameters-and-returning-items).

3. *Data-Name-2* is the name used in the function, method, or program for the result that is returned to the activating element according to the [Results of runtime element execution](./Execution/Results-of-runtime-element-execution).
4. If the argument is passed by reference, the activated runtime element operates as if the formal parameter occupies the same storage area as the argument.
5. If the argument is passed by content, the activated runtime element operates as if the record in the linkage section were allocated by the activating runtime element during the process of initiating the activation and as if this record does not occupy the same storage area as the argument in the activating runtime element. That argument is moved to this allocated record without conversion. This record is then treated by the activated runtime element as if it were the argument and as if it were passed by reference.

If the activated runtime element is a method, then this allocated record is

- a data item of the same category, usage, and length as the argument, if the formal parameter is described with the ANY LENGTH clause,
- otherwise, a data item with the same description and the same number of bytes as the formal parameter, where the maximum length is used if the formal parameter is described as a variable-occurrence data item.

The argument is used as the sending operand and the allocated record as the receiving operand in the following:

- if the formal parameter is numeric, a [COMPUTE](../Procedure-Division-Statements/COMPUTE) Statement without the ROUNDED phrase
- if the formal parameter is of class index, object, or pointer, a [SET](../Procedure-Division-Statements/SET) Statement
- otherwise, a [MOVE](../Procedure-Division-Statements/MOVE) Statement.

The allocated record is then treated as if it were the argument and it were passed by reference.

6. At all times in the activated element, references to *data-name-1* and to *data-name-2* are resolved in accordance with their description in the linkage section.
7. If *class-name-1* is specified, an object of *class-name-1* may be raised by a [RAISE](../Procedure-Division-Statements/RAISE) Statement within this element.
8. If *interface-name-1* is specified, an object that implements *interface-1* may be raised by a [RAISE](../Procedure-Division-Statements/RAISE) Statement within this element.
9. The CHAINING phrase is used only for a program that is the main program executed in a run unit.

a. If the program is initiated from the host system, each parameter is initialized to the corresponding command line argument.

b. If the program is initiated by a CHAIN statement, then each parameter receives the value of the corresponding USING item specified by that CHAIN statement.

c. Values are assigned to each parameter as if the value were the alphanumeric source for an elementary MOVE to parameter.

d. If there are fewer arguments than parameters, then the excess parameters are initialized according to the rules that would apply if they were not listed in the CHAINING phrase.

e. If there are more arguments than parameters, the excess arguments are ignored.
