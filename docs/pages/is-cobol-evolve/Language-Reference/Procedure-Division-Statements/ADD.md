## ADD

### Format 1

```cobol
ADD { {Identifier-1} } ... TO { Identifier-2 [ROUNDED] } ...
      {Literal-1   }
      {Class-1     }
 
  [ ON SIZE ERROR Imperative-Statement-1 ]
 
  [ NOT ON SIZE ERROR Imperative-Statement-2 ]
 
[END-ADD]
```

### Format 2

```cobol
ADD { {Identifier-1} } ... TO { {Identifier-2} } ...
      {Literal-1   }            {Literal-2   }
      {Class-1     }            {Class-2     }
 
  GIVING { Identifier-3 [ROUNDED] } ... 
 
  [ ON SIZE ERROR Imperative-Statement-1 ]
 
  [ NOT ON SIZE ERROR Imperative-Statement-2 ]
 
[END-ADD]
```

### Format 3

```cobol
ADD { CORRESPONDING }{ {Identifier-4} } ... TO { {Identifier-5} } ...
    { CORR          }
  [ ON SIZE ERROR Imperative-Statement-1 ]
 
  [ NOT ON SIZE ERROR Imperative-Statement-2 ]
 
[END-ADD]
```

### #Syntax rules

1. Identifier-1 and identifier-2 shall reference a numeric data item.
2. Literal-1 and literal-2 shall be numeric literals.
3. Class-1 and Class-2 shall be OBJECT-REFERENCE of Java numeric primitive types (i.e. "int") or objects (i.e. "java.lang.Integer")
4. Identifier-3 shall reference a numeric data item or a numeric-edited data item.
5. CORRESPONDING and CORR are synonymous.
6. Identifier-4 and identifier-5 shall reference a group item.

### General rules

1. When Format 1 is used, the initial evaluation consists of determining the value to be added, that is literal-1 or the value of the data item referenced by identifier-1, or if more than one operand is specified, the sum of such operands. The sum of the initial evaluation and the value of the data item referenced by identifier-2 is stored as the new value of the data item referenced by identifier-2.

When standard arithmetic is in effect, the result of the initial evaluation is equivalent to the result of the arithmetic expression:

(operand-11 + operand-12 + ... + operand-1n)

where the values of operand-1 are the values of literal-1 and the data items referenced by identifier-1 in the order in which they are specified in the ADD statement. The result of the sum of the initial evaluation and the value of the data item referenced by identifier-2 is equivalent to the result of the arithmetic expression:

(initial-evaluation + identifier-2)

where initial-evaluation represents the result of the initial evaluation.

2. When format 2 is used, the initial evaluation consists of determining the sum of the operands preceding the word GIVING, that is literal-1 or the value of the data item referenced by identifier-1, and literal-2 or the value of the data item referenced by identifier-2. This value is stored as the new value of each data item referenced by identifier-3.

When standard arithmetic is in effect, the result of the initial evaluation is equivalent to the result of the arithmetic expression:

(operand-11 + operand-12 + ... + operand-1n + operand-2)

where the values of operand-1 are the values of literal-1 and the data items referenced by identifier-1 in the order in which they are specified in the ADD statement and the value of operand-2 is the value of either literal-2 or the data item referenced by identifier-2 in the ADD statement.

3. Additional rules and explanations relative to this statement are given in [Overlapping operands](../Procedure-Division/Execution/Overlapping-operands); [Incompatible data](../Procedure-Division/Execution/Condition-handling/Incompatible-data); [ROUNDED phrase](../Procedure-Division/Common-phrases-and-features-for-statements/ROUNDED-phrase); [SIZE ERROR phrase and size error condition](../Procedure-Division/Common-phrases-and-features-for-statements/SIZE-ERROR-phrase-and-size-error-condition); [CORRESPONDING phrase](../Procedure-Division/Common-phrases-and-features-for-statements/CORRESPONDING-phrase); and [Arithmetic statements](../Procedure-Division/Common-phrases-and-features-for-statements/Arithmetic-statements).
4. In Format 3, each pair of corresponding elementary numeric items in Identifier-4 and Identifier-5 are added together. The results are moved to the corresponding items in Identifier-5.

### Examples

Format 1- Increment the numeric data item num-var by 1

```cobol
add 1 to num-var
```

Format 1 - Add 1.253 to num-var, producing a rounded result and check if the resulting value does not exceed the defined size of num-var.

```cobol
add 1.253 to num-var rounded
 on size error 
    display message "Value to long for num-var"
 not on size error
    display message "New value for num-var : " num-var
end-add
```

Format 2 - Assign to num-3 the result of adding num-1 and num-2.

```cobol
add num-1 to num-2 giving num-3
```

Format 2 - Assign to num-3 the result of adding num-1 and num-2, checking if the resulting value does not exceed the defined size of num-3.

```cobol
add num-1 to num-2 giving num-3
 on size error 
    display message "Value to long for num-3"
 not on size error
    display message "New value for num-3 : " num-3
end-add
```

Format 3 - Add values from one group data item to another one with corresponding sub-items.

```cobol
working-storage section.
01 work-hours.
   05 test-hours    pic 9(3) value 10.
   05 doc-hours     pic 9(3) value 11.
   05 support-hours pic 9(3) value 12.
01 additional-work-hours.
   05 test-hours    pic 9(3) value 2.
   05 doc-hours     pic 9(3) value 4.
   05 support-hours pic 9(3) value 2.
 
procedure division.
add-hours.
   add corresponding additional-work-hours to work-hours
       on size error display message "Error adding to work-hours"
       not on size error
           display message 
                   test-hours    of work-hours " , "
                   doc-hours     of work-hours " , "
                   support-hours of work-hours
   end-add
```
