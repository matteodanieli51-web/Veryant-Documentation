## Item identification

Item identification is the process of identifying a specific data item referenced by an identifier by evaluating all of that identifier's references. If a step in the evaluation of an identifier requires evaluation of another identifier or an arithmetic expression, that evaluation is done in full before proceeding to the next step. The item identification steps that are applicable to that identifier are evaluated in the following order:

1. function evaluation
2. inline method invocation
3. subscript evaluation
4. object property evaluation
5. length evaluation for an occurs-depending group item
6. reference modification

Unless otherwise specified, item identification is done for an identifier as the first step in the evaluation of that identifier and the identifiers within a statement are evaluated in left to right order as the first operation of the execution of that statement.

Multiple items must be separated by space or by comma. If DECIMAL-PONT IS COMMA appears in the Special-Names, it’s necessary to put a space after each comma when separating numeric constant values, or the following misbehavior will occur:

```cobol
1,2
```

is treated as 1,2 decimal value instead of two different numeric values 1 and 2.
