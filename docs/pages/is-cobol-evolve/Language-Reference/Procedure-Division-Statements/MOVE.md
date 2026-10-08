## MOVE

#### Format 1

```cobol
MOVE { Identifier-1 } TO { Identifier-2 } ... [END-MOVE]
     { Literal-1    }
```

#### Format 2

```cobol
MOVE {CORRESPONDING} Identifier-3 TO Identifier-4 [END-MOVE]
     {CORR         }
```

#### Format 3

```cobol
MOVE Identifier-1 TO Identifier-2 WITH {CONVERSION}  
                                       {CONVERT   }
 
  [ ON EXCEPTION Statement-1 ] 
 
  [ NOT ON EXCEPTION Statement-2 ] 
 
[END-MOVE]
```

#### Format 4

```cobol
MOVE { Class:>{method  ( [parameters] )} } TO Result-Item
              {field                   }
      ObjRef:>{method  ( [parameters] )} 
              {field                   }
        SELF:>{method  ( [parameters] )} 
              {field                   }
       SUPER:>{method  ( [parameters] )} 
              {field                   }
        SELF
```

#### Format 5

```cobol
MOVE POSITIONAL Group-1 TO Group-2 [ DELIMITED BY DEFAULT VALUE ]
```

### Syntax rules

#### Format 1

1. If identifier-2 references a strongly-typed group item, identifier-1 shall be specified and be described as a group item of the same type.
2. Literal-1 and the data item referenced by identifier-1 are sending operands.
3. Identifier-2 is a receiving operand.
4. The TO keyword can be placed before each Identifier-2 when compiling with [-cv](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options).
5. The figurative constant SPACE shall not be moved to a numeric or numeric-edited item.
6. The figurative constant ZERO shall not be moved to an alphabetic data item.
7. The following table describes the validity of types of MOVE statements, specifies the validity of the move.

| Category of sending operand | Category of receiving operand | Category of receiving operand | Category of receiving operand | Category of receiving operand |
| --- | --- | --- | --- | --- |
| | Alphabetic | Alphanumeric-edited, Alphanumeric | National, National-edited | Numeric, Numeric-edited |
| Alphabetic | Yes | Yes | Yes | No |
| Alphanumeric | Yes | Yes | Yes | Yes |
| Alphanumeric-edited | Yes | Yes | Yes | No |
| National | Yes | Yes | Yes | Yes |
| National-edited | Yes | Yes | Yes | No |
| Numeric Integer | No | Yes | Yes | Yes |
| Numeric NonInteger | No | No | No | Yes |
| Numeric-edited | No | Yes | Yes | Yes |

When moving National items to Alphabetic or Alphanumeric items, ensure that the destination item is large enough to store the national data according to the current encoding.

#### Format 2

8. The words CORR and CORRESPONDING are equivalent.

9. Identifier-3 and identifier-4 shall specify group data items and shall not be reference modified.

10. The corresponding data items within identifier-3 are sending operands. The corresponding data items within identifier-4 are receiving operands.

#### Format 5

11. Group-1 and Group-2 are group data items.

### General rules

#### Format 1

1. Literal-1 or the content of the data item referenced by identifier-1 is moved to the data item referenced by each identifier-2 in the order specified.

Item identification for identifier-2 is performed immediately before the data is moved to the respective data item. If identifier-2 is a zero-length item, the MOVE statement leaves identifier-2 unchanged.

If identifier-1 is reference modified, subscripted, or is a function-identifier, the reference modifier, subscript, or function-identifier is evaluated only once, immediately before data is moved to the first of the receiving operands.

The length of the data item referenced by identifier-1 is evaluated only once, immediately before the data is moved to the first of the receiving operands. If identifier-1 is a zero-length item, it is as if literal-1 were specified as the figurative constant SPACE.

The evaluation of the length of identifier-1 or identifier-2 may be affected by the DEPENDING ON phrase of the OCCURS clause.

The result of the statement

```cobol
MOVE a (b) TO b, c (b)
```

is equivalent to:

```cobol
MOVE a (b) TO temp
MOVE temp TO b
MOVE temp to c (b)
```

where 'temp' is an intermediate result item.

2. Any move in which the sending operand is either a literal or an elementary item and the receiving item is an elementary item is an elementary move. Bit group items and national group items are treated as elementary items in the MOVE statement.

Any move that is not an elementary move is treated exactly as if it were an alphanumeric to alphanumeric elementary move, except that there is no conversion of data from one form of internal representation to another. In such a move, the receiving area will be filled without consideration for the individual elementary or group items contained within either the sending or receiving area.

3. Any necessary conversion of data from one form of internal representation to another takes place during valid elementary moves, along with any editing specified for, or deducting implied by, the receiving data item. When a national group item is referenced in a MOVE statement, no editing or de-editing takes place.

**NOTE** - Bit group items and national group items are treated as elementary items in the MOVE statement.

The following rules apply:

A. When an alphanumeric, alphanumeric-edited, national, or national-edited data item is a receiving operand, alignment and any necessary space filling shall take place. If the sending operand is described as being signed numeric, the operational sign is not moved; if the operational sign occupies a separate character position, that character is not moved and the size of the sending operand is considered to be one less than its actual size. If the usage of the sending operand is different from that of the receiving operand, conversion of the sending operand to the internal representation of the receiving operand takes place.

B. When the sending operand is numeric-edited, de-editing is implied to establish the operand's unedited numeric value, which may be signed; then the unedited numeric value is moved to the receiving field. The de-editing is performed as follows: the runtime retrieves digits from given positions depending on the picture, digits at the ‘9’ symbol positions and the sign are kept while digits at the editing character positions are discarded (for example, having the picture PIC 99/99 the runtime takes digits number 1, 2, 4 and 5, and discards digit number 3).

When the category of the sending operand is other than numeric-edited and the content of the sending operand would result in a false value in a numeric class condition, the results of the execution of the MOVE statement are undefined.

i. When a signed numeric item is the receiving item, the sign of the sending operand is placed in the receiving item. Conversion of the representation of the sign takes place as necessary. If the sending operand is unsigned, a positive sign is generated for the receiving item.

ii. When an unsigned numeric item is the receiving item, the absolute value of the sending operand is moved and no operational sign is generated for the receiving item.

iii. When the sending operand is described as alphanumeric or national, the sending operand is treated as if it were an unsigned integer of category numeric with the following characteristics:

a. If the sending operand is a data item, the number of digits is the number of character positions in the sending data item unless the number of character positions is greater than 31, in which case the rightmost 31 character positions are used.

b. If the sending operand is a figurative constant, the number of digits is the same as the number of digits in the receiving operand and the figurative constant is replicated in this item, from left to right, as described in the rules for figurative constants. If the receiving item is not an integer, the number of digits includes both those to the right and the left of the decimal point.

c. If the sending operand is an alphanumeric or national literal, the number of digits is the same as the number of characters in the literal. If the number of characters exceeds 31, the size of the sending operand is 31 digits and only the rightmost 31 alphanumeric characters in the literal are used.

4. Alphanumeric, national, and numeric literals belong to the categories alphanumeric, national, and numeric, respectively. The category of figurative constants when used in the MOVE statement depends on the category of the receiving operand as shown in the following table.

**NOTE** - MOVE of alphanumeric figurative constants to numeric items is an archaic feature and its use should be avoided.

| Figurative constant | Category of receiving operand | Category of figurative constant |
| --- | --- | --- |
| ALL literal, where literal is:    <br>Alphanumeric    <br>National | —— | Alphanumeric<br>National |
| ALL symbolic character, where symbolic character is:<br>Alphanumeric<br>National | —— | Alphanumeric<br>National |
| HIGH-VALUE, HIGH-VALUES;<br>LOW-VALUE, LOW-VALUES; and<br>QUOTE, QUOTES | Alphabetic<br>Alphanumeric<br>Alphanumeric-edited<br>National<br>National-edited<br>NumericNumeric-edited    <br>— if usage is display    <br>— if usage is national | Alphanumeric<br>Alphanumeric<br>Alphanumeric<br>National<br>National<br>Alphanumeric <br><br>Alphanumeric<br>National |
| SPACE, SPACES | Alphabetic<br>Alphanumeric<br>Alphanumeric-edited<br>National<br>National-edited | Alphanumeric<br>Alphanumeric<br>Alphanumeric<br>National<br>National |
| ZERO, ZEROS, ZEROES | Alphanumeric<br>Alphanumeric-edited<br>National<br>National-edited<br>Numeric<br>Numeric-edited | Alphanumeric<br>Alphanumeric<br>National<br>National<br>Numeric<br>Numeric |

— indicates the figurative constant category does not depend on the category of the receiving operand.

Note - When ALL is used, if the receiving item is national, the literal should be escaped, e.g.

```cobol
MOVE ALL N'B' TO PIECE
```

#### Format 2

5. Data items within identifier-3 are selected to be moved to selected data items within identifier-4 according to the rules specified in the [CORRESPONDING phrase](../Procedure-Division/Common-phrases-and-features-for-statements/CORRESPONDING-phrase). The results are the same as if the user had referred to each pair of corresponding identifiers in separate MOVE statements except that if subscripting is specified for identifier-3 or identifier-4, the subscript value used is that resulting from the evaluation of the subscript at the start of the execution of the statement.

**NOTE** - For purposes of MOVE CORRESPONDING, bit group items and national group items are processed as group items, rather than as elementary items.

#### Format 3

6. A Format 3 MOVE statement performs a logical conversion of Identifier-1into the format of Identifier-2. Identifier-2 may be any type of data item. This is normally done to convert a character representation of a number into the corresponding numeric value. The rules of conversion are the same as the rules used by the CONVERT option of the ACCEPT statement.
7. If the ON EXCEPTION phrase is specified, then statement-1 executes when a conversion error occurs. If a conversion error occurs, then the value assigned to Identifier-2 is the value determined by ignoring the illegal characters in Identifier-1. If the NOT ON EXCEPTION phrase is specified, then statement-2 executes when no conversion error occurs.

#### Format 4

8. A Format 4 MOVE statement moves the result of a method invokation in object oriented programming.
9. Result-Item should be defined according to the result of the method and the field type. To receive strings and numbers, Result-Item can be a standard COBOL data-item with picture PIC X(n) or PIC 9(n). To receive an instance of an object, then Result-Item should be defined as OBJECT REFERENCE to that object.
10. If the field is a COBOL data item, it must be indicated upper case with hyhpens replaced by underscores, that is the way isCOBOL internally defines data items. For example, having 77 my-item pic x, you will reference it using SELF:>MY\_ITEM and not SELF:>my-item.
11. SELF means the current class. It can be used in a OBJECT paragraph. In a FACTORY paragraph the class logical name must be used in order to reference the current class.

```cobol
 IDENTIFICATION DIVISION.
 CLASS-ID. MY_OBJ AS "MyObj".
 
 IDENTIFICATION DIVISION.
 OBJECT.
 
 DATA DIVISION.
 WORKING-STORAGE SECTION.
 PROTECTED.
 77 Item-1 PIC X(3).
 
 PROCEDURE DIVISION.
 IDENTIFICATION DIVISION.
 METHOD-ID. TEST_SELF AS "TestSelf".
 PROCEDURE DIVISION.
 MAIN.
     SELF:>method1().
     DISPLAY SELF:>ITEM_1.
 END METHOD.
 
 IDENTIFICATION DIVISION.
 METHOD-ID. METHOD1 as "method1".
 PROCEDURE DIVISION.
 MAIN.
     CONTINUE.
 END METHOD.
 
 END OBJECT.
```

```cobol
 IDENTIFICATION DIVISION.
 CLASS-ID. MY_CLASS AS "MyClass".
 
 IDENTIFICATION DIVISION.
 FACTORY.
 
 DATA DIVISION.
 WORKING-STORAGE SECTION.
 PROTECTED.
 77 Item-1 PIC X(3).
 
 PROCEDURE DIVISION.
 IDENTIFICATION DIVISION.
 METHOD-ID. TEST_SELF AS "TestSelf".
 PROCEDURE DIVISION.
 MAIN.
     MY_CLASS:>method1().
     DISPLAY MY_CLASS:>ITEM_1.
 END METHOD.
 
 IDENTIFICATION DIVISION.
 METHOD-ID. METHOD1 as "method1".
 PROCEDURE DIVISION.
 MAIN.
     CONTINUE.
 END METHOD.
 
 END FACTORY.
```

12. SUPER refers to the class that the current class is inheriting from, if any.
13. Only PROTECTED fields can be referenced from FACTORY paragraphs and superclasses.
14. Moving SELF to Result-Item allows you to retrieve the instance of the current class.

#### Format 5

15. A Format 5 MOVE statement moves every sub item in Group-1 to the sub item in Group-2 that has the same ordinal position. The first item in Group-1 is moved to the first item in Group-2, the second item in Group-1 is moved to the second item in Group-2, and so on.
16. RENAMES and REDEFINES fields are skipped.

For example, the following code

```cobol
       working-storage section.
       ...
       01 a.
         02 b pic x(10).
         02 b-red redefines b pic 9(10).
         02 c pic x(10).
         
       01 a2.
          02 b2 pic x(10).
          02 c2 pic x(10).
          02 c2-red redefines c2 pic 9(10).
          
       procedure division.
       ...
           move positional a to a2. 
```

is equivalent to

```cobol
       working-storage section.
       ...
       01 a.
         02 b pic x(10).
         02 b-red redefines b pic 9(10).
         02 c pic x(10).
         
       01 a2.
          02 b2 pic x(10).
          02 c2 pic x(10).
          02 c2-red redefines c2 pic 9(10).
          
       procedure division.
       ...
           move b to b2. 
           move c to c2. 
```

17. When Group-1 includes a fixed capacity table and the corresponding item in Group-2 is a dynamic capacity table, the Runtime moves all the items in the table, unless the DELIMITED BY DEFAULT VALUE clause is used. In such case, the Runtime moves all the items in the table until it finds an item whose value matches the default value of the dynamic capacity table. For a correct result, all the items in the dynamic capacity table should have a VALUE clause and the dynamic capacity table must specify the INITIALIZED clause.

For example

```cobol
       working-storage section.
       ...
       01 struct-1.
          03 occ-1 occurs 100.
             05 struct-1-var-1 pic x(10).
             
       01 struct-2.
          03 occ-2 occurs dynamic capacity cap initialized.
             05 struct-2-var-1 pic x(10) value "a".
 
       procedure division.
       ...
           move 1 to struct-1-var-1(1).
           move "a" to struct-1-var-1(2).
           move positional struct-1 to struct-2 delimited by default. 
```

In the above case, the Runtime will move only the first item of occ-1 to occ-2, and occ-2 will have a capacity of 1 after the MOVE. If the program didn't move "a" to struct-1-var-1(2), instead, the Runtime would move all the 100 items of occ-1 to occ-2, and occ-2 would have a capacity of 100 after the MOVE.

### Examples

Format 1 - Move literals or variables to variables

```cobol
move 93.5 to num-1 *> num-1 could be pic 9(2)V9(2)
move "hello" to str-1 *> str-1 could be pic x(10)
move num-1 to num-2
move str-1 to str-2 str-3 str-4 *> More than one variables receive the value
move zeroes to num-1 num-2 num3
```

Format 2 - Move group item to group item with corresponding children items

```cobol
01 work-hours.
   05 test-hours    pic 9(3) value 10.
   05 doc-hours     pic 9(3) value 11.
01 total-work-hours.
   05 doc-hours     pic 9(3) value 4.
   05 support-hours pic 9(3) value 2.
   05 test-hours    pic 9(3) value 2.
 
...
 
move corresponding work-hours to total-work-hours
*> doc-hours and test-hours of total-work-hours will end up having the same values as in work-hours
```

Format 3 - Move with conversion using on exception clause

```cobol
move "123.456" to str-1                *> str-1 could be pic x(10)
move str-1 to num-1 with conversion    *> num-1 could be pic 9(3)v9(3)
     on exception display message "Move with conversion failed!"
     not on exception display message "Good move"  
end-move
*> The message displayed will be : Good move
```

Format 3 - Move with conversion using on exception clause

```cobol
move "12X.B56" to str-1                *> str-1 could be pic x(10)
move str-1 to num-1 with conversion    *> num-1 could be pic 9(3)v9(3)
     on exception display message "Move with conversion failed!"
     not on exception display message "Good move"  
end-move
*> The message displayed will be : Move with conversion failed!
*> However, the value of num-1 will be : 12.56
```

Format 3 - Plain move with conversion

```cobol
move "123.4" to str-1                 *> str-1 could pib x(10)
move num-1 to str-1 with conversion   *> num-1 could pic 9(3)v9(1)
```

Format 4 - Invoke methods of a Java Class to get System Information

```cobol
       configuration section.
       repository.
           class Sys as "java.lang.System".
 
       working-storage section.
       77  buffer      pic x(50).
 
       procedure division.
       main.
           move Sys:>getProperty("os.name") to buffer
           display "Operating System: " buffer.
 
           move Sys:>getProperty("os.arch") to buffer
           display "OS Architecture: " buffer.
 
           move Sys:>getProperty("java.version") to buffer
           display "Java Version: " buffer.
```

Format 5 - Move complex structures with tables using a single statement

```cobol
       working-storage section.
       01 struct-fix.
          03 g1-name pic x(50).
          03 g1-table occurs 100.
             05 g1-account-id pic 9(3) value 0.
             05 g1-account-short-des pic x(20) value space.
             05 g1-account-notes pic x(1000) value space.
          03 g1-address pic x(50).
 
       01 struct-dyn.
          03 g2-name pic x any length.
          03 g2-table occurs dynamic 
                             capacity cap-g2-table-occ
                             initialized.
             05 g2-account-id pic 9(3) value 0.
             05 g2-account-short-des pic x(20) value space.
             05 g2-account-short-des pic x any length value space.
          03 g2-address pic x any length.
          
       procedure division.
       main.
           move positional struct-fix to struct-dyn 
```
