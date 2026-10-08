## MULTIPLY

#### Format 1

```cobol
MULTIPLY {Identifier-1} BY { Identifier-2 [ROUNDED]  } ... 
         {Literal-1   }
         {Class-1     }
 
  [ ON SIZE ERROR Imperative-Statement-1 ] 
 
  [ NOT ON SIZE ERROR Imperative-Statement-2 ] 
 
[END-MULTIPLY]
```

#### Format 2

```cobol
MULTIPLY {Identifier-1} BY {Identifier-2}
         {Literal-1   }    {Literal-2   }
         {Class-1     }    {Class-2     }
 
  GIVING { Identifier-3 [ROUNDED] } ... 
 
  [ ON SIZE ERROR Imperative-Statement-1 ] 
 
  [ NOT ON SIZE ERROR Imperative-Statement-2 ] 
 
[END-MULTIPLY]
```

### Syntax rules

1. Identifier-1 and identifier-2 shall reference a data item of category numeric.
2. Identifier-3 shall reference a data item of category numeric or numeric-edited.
3. Literal-1 and literal-2 shall be numeric literals.
4. Class-1 and Class-2 shall be OBJECT-REFERENCE of Java numeric primitive types (i.e. "int") or objects (i.e. "java.lang.Integer")

### General rules

1. When format 1 is used, the initial evaluation consists of determining the multiplier, which is literal-1 or the value of the data item referenced by identifier-1. The multiplicand is the value of the data item referenced by identifier-2. The product of the multiplier and the multiplicand is stored as the new value of the data item referenced by identifier-2.
2. When format 2 is used, the initial evaluation consists of determining the multiplier, which is literal-1 or the value of the data item referenced by identifier-1; determining the multiplicand, which is literal-2 or the value of the data item referenced by identifier-2; and forming the product of the multiplier and the multiplicand. The product is stored as the new value of each data item referenced by identifier-3.

### Examples

Format 1 - Multiply literal or variable by variable

```cobol
move 20   to ws-factor
move 10  to ws-age
multiply 2 by ws-age
*> resulting value of ws-age : 20
multiply ws-factor by ws-age
         on size error display message "size error" 
end-multiply
*> resulting value of ws-age : 400
*> if ws-age is only pic 9(2) the "size error" message will be displayed
 
move 10 to ws-age
move 20 to ws-age2
move 15 to ws-age3
multiply 2 by ws-age ws-age2
*> resulting values: ws-age = 20 , ws-age2 = 40, ws-age3 = 30
```

Format 1 - Rounding the result of the multiply

```cobol
move     5.99     to ws-radius
multiply 3.141593 by ws-radius rounded
*> If ws-radius is pic 9(3)v9(3), result will be : 18.818
*> If ws-radius is pic 9(3)v9(2), result will be : 18.82
```

Format 2 - Rounding the result of the multiply and placing result on different variable

```cobol
move     5.99     to ws-radius
multiply 3.141593 by ws-radius rounded
  giving ws-result
end-multiply
*> If ws-result is pic 9(3)v9(3), result will be : 18.818
*> If ws-result is pic 9(3)v9(2), result will be : 18.82
```
