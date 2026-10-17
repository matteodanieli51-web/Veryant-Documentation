## C$DARG

The C$DARG library routine returns information about an actual parameter passed in the USING phrase in the CALL statement that called a subprogram. This information identifies the type and length of the argument and, when the argument is numeric or numeric edited, the number of digits and scale factor for the argument.

**Note:** This routine cannot be used in the Procedure Division of a method. It returns information only on parameters passed by [CALL](../../Language-Reference/Procedure-Division-Statements/CALL), not by [INVOKE](../../Language-Reference/Procedure-Division-Statements/INVOKE). It’s also not supported in FUNCTION-ID programs.

### Syntax:

```cobol
 CALL "C$DARG" USING argumentNumber
                     argumentDesc
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *argumentNumber* | PIC 9(n) | Specifies the one-relative ordinal position of the actual argument in the USING phrase of the CALL statement used to call the subprogram that calls C$DARG. The value zero obtains the description of the actual argument in the GIVING phrase of that CALL statement. If the value specified is less than zero or greater than the number of actual arguments passed, an argument-description for an omitted argument will be returned (*argumentType* = 32). The actual number of arguments passed can be obtained with the [C$NARG](./C$NARG) library routine. The actual number of arguments may exceed the number of formal arguments declared in the Procedure Division header of the program that calls C$DARG. All of the actual arguments can be accessed using C$DARG even though there is no formal argument name available for accessing the actual arguments beyond the number of formal arguments. |
| *argumentDesc* | Group item | Receives the information about the data item.<br>*argumentType*<br>Returns a number indicating the type of the argument data item.<br>*argumentLength*<br>Returns the [BYTE-LENGTH](../Intrinsic-Functions/BYTE-LENGTH) of the argument data item.<br>*argumentDigitCount*<br>Returns the number of digits defined in the PICTURE character-string for an argument that is a numeric or numeric edited data item as indicated by the *argumentType* field value; otherwise, the value zero is returned for nonnumeric data items. The digit count for a numeric or numeric edited data item does not include any positions defined by the PICTURE symbol P, which represents a scaling position.<br>*argumentScale*<br>Returns a negative number that is the position of the implied or actual decimal point for an argument that is a numeric or numeric edited data item as indicated by the *argumentType* field value; otherwise, the value zero is returned for nonnumeric data items. If the PICTURE symbol P was used in the description of the data item, the absolute value of the *argumentScale* value will exceed the *argumentDigitCount* value; in this case, a positive scale value indicates an integer with P scaling positions on the right of the PICTURE character-string and a negative scale value indicates a fraction with P scaling positions on the left of the PICTURE character-string. |

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
           call "c$darg" using 2 arg-description.
           display "type=" arg-type.
           display "length=" arg-length.
           display "digit-count=" arg-digit-count.
           display "scale=" arg-scale.
           goback.
```
