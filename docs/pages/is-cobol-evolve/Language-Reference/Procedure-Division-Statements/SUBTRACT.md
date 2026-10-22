## SUBTRACT

#### Format 1

```cobol
SUBTRACT { Indentifier-1 } ... FROM { Identifier-2 [ROUNDED] } ... 
         { Literal-1     }
         { Class-1       }
 
  [ ON SIZE ERROR Imperative-Statement-1 ] 
 
  [ NOT ON SIZE ERROR Imperative-Statement-2 ] 
 
[END-SUBTRACT]
```

#### Format 2

```cobol
SUBTRACT { Indentifier-1 } ... FROM { Identifier-2 } ...
         { Literal-1     }          { Literal-2    }
         { Class-1       }          { Class-2      }
 
  GIVING { Identifier-3 [ROUNDED] } ... 
 
  [ ON SIZE ERROR Imperative-Statement-1 ] 
 
  [ NOT ON SIZE ERROR Imperative-Statement-2 ] 
 
[END-SUBTRACT]
```

#### Format 3

```cobol
SUBTRACT { CORRESPONDING }{ {Identifier-4} } ... FROM { {Identifier-5} } ...
         { CORR          }
  [ ON SIZE ERROR Imperative-Statement-1 ]
 
  [ NOT ON SIZE ERROR Imperative-Statement-2 ]
 
[END-SUBTRACT]
```

### Syntax rules

#### Formats 1 and 2

1. Identifier-1 and identifier-2 shall reference numeric data items.
2. Literal-1 and literal-2 shall be numeric literals.
3. Class-1 and Class-2 shall be OBJECT-REFERENCE of Java numeric primitive types (i.e. "int") or objects (i.e. "java.lang.Integer")

#### Format 2

4. Identifier-3 shall reference a numeric data item or a numeric-edited data item.

#### Format 3

5. CORRESPONDING and CORR are synonymous.
6. Identifier-4 and identifier-5 shall reference a group item.

### General rules

1. When format 1 is used, the initial evaluation consists of determining the value to be subtracted, which is literal-1 or the value of the data item referenced by identifier-1, or if more than one is specified, the sum of such operands. The initial evaluation is subtracted from the value of the data item referenced by identifier-2 and the result is stored as the new value of the data item referenced by identifier-2.

When standard arithmetic is in effect, the result of the initial evaluation is equivalent to the result of the arithmetic expression

(operand-11 + operand-12 + ... + operand-1n)

where the values of operand-1 are the values of literal-1 and the data items referenced by identifier-1 in the order in which they are specified in the SUBTRACT statement. The result of the subtraction from the value of each data item referenced by identifier-2 is equivalent to the result of the arithmetic expression

(identifier-2 – initial-evaluation)

where initial-evaluation represents the result of the initial evaluation.

2. When format 2 is used, the initial evaluation consists of determining the value to be subtracted, which is literal-1 or the value of the data item referenced by identifier-1, or if more than one is specified, the sum of such operands; and subtracting this value from literal-2 or the value of the data item referenced by identifier-2. The result is stored as the new value of the data item referenced by identifier-3.

When standard arithmetic is in effect, the result of the initial evaluation is equivalent to the result of the arithmetic expression

(operand-2 – (operand-11 + operand-12 + ... + operand-1n))

where the values of operand-1 are the values of literal-1 and the data items referenced by identifier-1 in the order in which they are specified in the SUBTRACT statement and the value of operand-2 is the value of either literal-2 or the data item referenced by identifier-2 in the SUBTRACT statement.

3. In Format 3, elementary numeric items in Identifier-4 are subtracted from the corresponding items in Identifier-5. The values are then stored in Identifier-5.

### Examples

Format 1 - Subtract several variables and literals from variable

```cobol
move 100 to num-result
move 10 to num-1
move 5 to num-2
subtract num-1 num-2 10 from num-result
*> new value for num-result : 75
```

Format 2 - Subtract several numbers from number and leave result on another variable validating size error

```cobol
subtract 10 20 30 from 100 
  giving num-result
  on size error display message "Size error on num-result!"
end-subtract
*> new value for num-result : 40
```

Format 3 - Subtract values of one group data item from another group with corresponding sub-items

```cobol
working-storage section.
01 work-hours.
   05 test-hours    pic 9(3) value 10.
   05 doc-hours     pic 9(3) value 11.
   05 support-hours pic 9(3) value 12.
01 notconfirmed-work-hours.
   05 test-hours    pic 9(3) value 2.
   05 doc-hours     pic 9(3) value 4.
   05 support-hours pic 9(3) value 2.
 
procedure division.
add-hours.
   subtract corresponding notconfirmed-work-hours from work-hours
       on size error display message "Error subtracting from work-hours"
       not on size error
           display message 
                   test-hours    of work-hours " , "
                   doc-hours     of work-hours " , "
                   support-hours of work-hours
   end-subtract
```
