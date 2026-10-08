## DIVIDE

#### Format 1

```cobol
DIVIDE {Identifier-1} INTO { Identifier-2 [ROUNDED] } ... 
       {Literal-1   }
       {Class-1     }
 
  [ ON SIZE ERROR Imperative-Statement-1 ]
 
  [ NOT ON SIZE ERROR Imperative-Statement-2 ]
 
[END-DIVIDE]
```

#### Format 2

```cobol
DIVIDE {Identifier-1} INTO {Identifier-2}
       {Literal-1   }      {Literal-2   }
       {Class-1     }      {Class-2     }
 
  GIVING { Identifier-3 [ROUNDED] } ... 
 
  [ ON SIZE ERROR Imperative-Statement-1 ]
 
  [ NOT ON SIZE ERROR Imperative-Statement-2 ]
 
[END-DIVIDE]
```

#### Format 3

```cobol
DIVIDE {Identifier-2} BY {Identifier-1}
       {Literal-2   }    {Literal-1   }
       {Class-2     }    {Class-1     }
 
  GIVING { Identifier-3 [ROUNDED] } ... 
 
  [ ON SIZE ERROR Imperative-Statement-1 ]
 
  [ NOT ON SIZE ERROR Imperative-Statement-2 ]
 
[END-DIVIDE]
```

#### Format 4

```cobol
DIVIDE {Identifier-1} INTO {Identifier-2}
       {Literal-1   }      {Literal-2   }
       {Class-1     }      {Class-2     }
 
  GIVING { Identifier-3 [ROUNDED]  } ...
 
  REMAINDER Identifier-4
 
  [ ON SIZE ERROR Imperative-Statement-1 ]
 
  [ NOT ON SIZE ERROR Imperative-Statement-2 ]
 
[END-DIVIDE]
```

#### Format 5

```cobol
DIVIDE {Identifier-2} BY {Identifier-1}
       {Literal-2   }    {Literal-1   } 
       {Class-2     }    {Class-1     }
 
  GIVING { Identifier-3 [ROUNDED]  } ...
 
  REMAINDER Identifier-4
 
  [ ON SIZE ERROR Imperative-Statement-1 ]
 
  [ NOT ON SIZE ERROR Imperative-Statement-2 ]
 
[END-DIVIDE]
```

### Syntax rules

1. Identifier-1 and identifier-2 shall reference an elementary data item of category numeric.
2. Identifier-3 and identifier-4 shall reference an elementary data item of category numeric or numeric-edited.
3. Literal-1 and literal-2 shall be numeric literals.
4. Class-1 and Class-2 shall be OBJECT-REFERENCE of Java numeric primitive types (i.e. "int") or objects (i.e. "java.lang.Integer")
5. When native arithmetic is in effect, the composite of operands described in 14.6.6, Arithmetic statements, is determined by using all of the operands in the statement excluding the data item that follows the word REMAINDER.

### General rules

#### All Formats

1. The process of determining the dividend and determining the divisor consists of the following:

A. The dividend is identifier-2 or literal-2. The divisor is identifier-1 or literal-1.

B. If an identifier is specified, item identification is done and the content of the resulting data item is the dividend or divisor.

C. If a literal is specified, the value of the literal is the dividend or divisor.

#### Format 1

2. The evaluation proceeds in the following order:

A. The initial evaluation consists of determining the divisor.

B. This divisor is used with each dividend, which is each identifier-2 proceeding from left to right. Item identification for identifier-2 is done as each dividend is determined. The quotient is then formed as specified in general rule 1 and stored in the corresponding identifier-2.

#### Formats 2 and 3

3. The evaluation proceeds in the following order:

A. The initial evaluation is determining the divisor and determining the dividend.

B. The quotient is then formed as specified in general rule 1 and stored in each identifier-3.

#### Formats 4 and 5

4. The evaluation proceeds in the following order:

A. The initial evaluation is determining the divisor and determining the dividend.

B. The quotient is then formed as specified in general rule 1 and stored in identifier-3.

C. If the size error condition is not raised, a subsidiary quotient is developed that is signed and derived from the quotient by truncation of digits at the least significant end and that has the same number of digits and the same decimal point location as the data item referenced by identifier-3. The remainder is stored in the data item referenced by identifier-4 unless storing the value would cause a size error condition, in which case the content of identifier-4 is unchanged.

### Examples

Format 1 - Divide literal into variable and validate size error.

```cobol
move    10500   to num-years
divide 365.25 into num-years
    on size error display message "Invalid result size of last divide operation!"
    not on size error display message "Number of years : " num-years
end-divide
```

Format 2 - Divide variable into variable and leave result in separate variable, validating size error.

```cobol
move 365 to year-days
move  15 to period-days
move zero to num-periods-year
divide period-days into year-days giving num-periods-year 
 on size error display message "Invalid result size of last divide operation!"
 not on size error display message "Number of periods a year : " num-periods-year
end-divide
```

Format 3 - Divide variable by variable and leave result in separate variable, validating size error.

```cobol
move 365 to year-days
move  15 to period-days
move zero to num-periods-year
divide year-days by period-days giving num-periods-year 
 on size error display message "Invalid result size of last divide operation!"
 not on size error display message "Number of periods a year : " num-periods-year
end-divide
```

Format 4 - Divide variable into variable leaving result in separate variable and remainder in another variable too.

```cobol
move 365 to year-days
move  15 to period-days
move zero to num-periods-year
divide period-days into year-days giving num-periods-year 
       remainder not-used-days
display message 
        "A year of 365 days, has " num-periods-year 
         " periods of 15 days plus " not-used-days " days"
```

Format 5- Divide variable by variable leaving result in separate variable and remainder in another variable too.

```cobol
move 365 to year-days
move  15 to period-days
move zero to num-periods-year
divide year-days by period-days giving num-periods-year 
       remainder not-used-days
display message 
        "A year of 365 days, has " num-periods-year 
         " periods of 15 days plus " not-used-days " days"
```
