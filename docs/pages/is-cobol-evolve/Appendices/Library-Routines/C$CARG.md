## C$CARG

The C$CARG library routine returns information about the actual parameter that corresponds to a formal parameter in the USING phrase in the Procedure Division header of a subprogram. This information identifies the type and length of the argument and, when the argument is numeric or numeric edited, the number of digits and scale factor for the argument.

**Note:** This routine cannot be used in the Procedure Division of a method. It returns information only on parameters passed by [CALL](../../Language-Reference/Procedure-Division-Statements/CALL), not by [INVOKE](../../Language-Reference/Procedure-Division-Statements/INVOKE). It’s also not supported in FUNCTION-ID programs.

### Syntax:

```cobol
 CALL "C$CARG" USING okFlag
                     argumentName
                     argumentDesc
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *okFlag* | PIC X(1) | Receives "Y" if  the argument named by *argumentName* is successfully identified. Receives "N" otherwise. |
| *argumentName* | PIC X(n) | Specifies the name of the Linkage Section data item named in the Procedure Division header USING list.<br>If a calling program passes a called program two or more arguments that begin at the same location (either through redefinition, with reference modification, or because one is a group that contains the other), when the called program asks C$CARG for the parameter descriptions, it always receives that of the first actual argument passed that has the same location, regardless of the name specified in argument-name. In these cases, the [C$DARG](./C$DARG) library routine may be used to obtain the distinct descriptions. |
| *argumentDesc* | Group item | Receives the information about the data item.<br>*argumentType*<br>Returns a number indicating the type of the argument data item.<br>*argumentLength*<br>Returns the [BYTE-LENGTH](../Intrinsic-Functions/BYTE-LENGTH) of the argument data item.<br>*argumentDigitCount*<br>Returns the number of digits defined in the PICTURE character-string for an argument that is a numeric or numeric edited data item as indicated by the *argumentType* field value; otherwise, the value zero is returned for nonnumeric data items. The digit count for a numeric or numeric edited data item does not include any positions defined by the PICTURE symbol P, which represents a scaling position.<br>*argumentScale*<br>Returns the position of the implied or actual decimal point for an argument that is a numeric or numeric edited data item as indicated by the *argumentType* field value; otherwise, the value zero is returned for nonnumeric data items. If the PICTURE symbol P was used in the description of the data item, the absolute value of the *argumentScale* value will exceed the *argumentDigitCount* value; in this case, a positive scale value indicates an integer with P scaling positions on the right of the PICTURE character-string and a negative scale value indicates a fraction with P scaling positions on the left of the PICTURE character-string. |

### Examples:

**Example -** Display information about the ARG2 Linkage data item

```cobol
       working-storage section.
       01  arg-description.
           02 arg-type        pic 99   binary(2).
           02 arg-length      pic 9(8) binary (4).
           02 arg-digit-count pic 99   binary(2).
           02 arg-scale       pic s99  binary(2).

       77  ok            pic x.

       linkage section.
       77  arg1  pic x(10).
       77  arg2  pic 9(5)v9(5).

       procedure division using arg1 arg2.
       main.
           call "c$carg" using ok arg2 arg-description
           if ok = "Y"
              display "type=" arg-type
              display "length=" arg-length
              display "digit-count=" arg-digit-count
              display "scale=" arg-scale
           end-if.
           goback.
```
