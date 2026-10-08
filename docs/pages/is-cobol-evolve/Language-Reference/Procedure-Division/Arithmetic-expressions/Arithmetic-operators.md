### Arithmetic operators

Arithmetic operators are represented by specific characters that must be preceded and followed by a space.

The following binary arithmetic operators can be used in arithmetic expressions:

| Operator | Meaning |
| --- | --- |
| + | Addition |
| - | Subtraction |
| * | Multiplication |
| / | Division |
| ** | Exponentiation |

The following unary arithmetic operators can be used in arithmetic expressions:

| Operator | Meaning |
| --- | --- |
| + | Multiplication by +1 |
| - | Multiplication by -1 |

Parenthesis can be used in arithmetic expressions to specify the order in which elements are to be evaluated.

Expressions within parenthesis are evaluated first. When expressions are contained within nested parenthesis, evaluation proceeds from the least inclusive to the most inclusive set.

When parenthesis are not used, or parenthesized expressions are at the same level of inclusiveness, the following hierarchic order is implied:

1. Unary operator
2. Exponentiation
3. Multiplication and division
4. Addition and subtraction

Parenthesis either eliminate ambiguities in logic where consecutive operations appear at the same hierarchic level, or modify the normal hierarchic sequence of execution when this is necessary. When the order of consecutive operations at the same hierarchic level is not completely specified by parenthesis, the order is from left to right.

An arithmetic expression can begin only with a left parenthesis, a unary operator, or an operand (that is, an identifier or a literal). It can end only with a right parenthesis or an operand. An arithmetic expression must contain at least one reference to an identifier or a literal.

There must be a one-to-one correspondence between left and right parenthesis in an arithmetic expression, with each left parenthesis placed to the left of its corresponding right parenthesis.

If the first operator in an arithmetic expression is a unary operator, it must be immediately preceded by a left parenthesis if that arithmetic expression immediately follows an identifier or another arithmetic expression.

#### Pointer arithmetic

A pointer is an address, which is a numeric value. Therefore, you can perform arithmetic operations on a pointer just as you can on a numeric value.

For example, the following statements produce a pointer that points one character position past the beginning of WRK-ITEM1:

```cobol
set ptr-1 to address of wrk-item1.
compute ptr-1 = ptr-1 + 1.
```

For a full support of pointer arithmetic operations, compile the program with the [-cp](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) option.
