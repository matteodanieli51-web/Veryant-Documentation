### REPOSITORY Paragraph

The REPOSITORY Paragraph contains class and user-defined function references.

#### General format

```cobol
REPOSITORY.
 
 [ {CLASS     Class-Name-1    [ AS Literal-1 ] } ] ...
   {INTERFACE Class-Name-1    [ AS Literal-1 ] }
   {FUNCTION  Function-Name-1 [ AS Literal-2 ] }
```

#### Syntax rules

1. *Class-Name-1* and *Function-Name-1* is a [User-defined word](../../Preface/Definitions#user-defined-word), as defined in the [Definitions](../../Preface/Definitions) section in the Preface of this document.
2. *Literal-1* and *Literal-2* are [Literal](../../Preface/Definitions#literal), as defined in the [Definitions](../../Preface/Definitions) section in the Preface of this document.

#### General Rules

1. *Class-name-1* is the name of a class that may be used throughout the scope of the containing environment division.
2. *Literal-1* is the externalized name by which the class is known to the operating environment. The following syntax is allowed at the end of the name:

| | |
| --- | --- |
| [] | Specifies an array. Example:<br>class StringArr as "java.lang.String[]" |
| ... | Specifies a varargs when the class is referenced in the USING clause of the Procedure Division. Elsewhere it is treated as []. Example:<br>class Strings as as "java.lang.String..." |
| <type\> | Specifies a Java generic. Type must be the fully qualified name of a class. Example:<br>class StringArrayList as "java.util.ArrayList" |
| <> | Diamond operator. Example:<br>class HashMap as "java.util.HashMap<>" |
| | |

If omitted, the upper-case version of *Class-Name-1* is used.

3. *Literal-2* is the externalized name by which the function is known to the operating environment.

If omitted, the upper-case version of *Function-Name-1* is used.
