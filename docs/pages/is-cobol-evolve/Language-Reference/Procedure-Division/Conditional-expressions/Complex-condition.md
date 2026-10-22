### Complex condition

A complex condition is formed by combining simple conditions, combined conditions, or complex conditions with logical operators, or negating those conditions with logical negation.

Each logical operator must be preceded and followed by a space. The following table shows the logical operators and their meanings.

| Operator | Meaning |
| --- | --- |
| AND | Logical conjunction. The truth value is true when both conditions are true. |
| OR | Logical inclusive. The truth value is true when either or both conditions are true. |
| NOT | Logical negation. Reversal of truth value (the truth value is true if the condition is false. |

Unless modified by parentheses, the following is the order of precedence (from highest to lowest):

1. Arithmetic operations
2. Simple conditions
3. NOT
4. AND
5. OR

The truth value of a complex condition (whether parenthesized or not) is the truth value that results from the interaction of all the stated logical operators on either of the following:

- The individual truth values of simple conditions
- The intermediate truth values of conditions logically combined or logically negated

A complex condition can be either of the following:

- A negated simple condition
- A combined condition (which can be negated)
