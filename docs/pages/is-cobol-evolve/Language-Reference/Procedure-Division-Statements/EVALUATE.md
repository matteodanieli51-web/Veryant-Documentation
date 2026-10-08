## EVALUATE

### General Format

```cobol
EVALUATE  {Sel-Subject} { [ ALSO {sel-subject} ] } ... 
 
  { { WHEN Sel-Object { [ ALSO Sel-Object ] } ... } ... Statement-1 } ... 
 
  [ WHEN OTHER Statement-2 ] 
 
[END-EVALUATE]
```

Where *Sel-Subject* is:

```cobol
   { Identifier-1                         } 
   { Literal-1                            } 
   { Arithmetic-Expression-1              } 
   { Boolean-Expression-1                 } 
   { Condition-1                          } 
   { TRUE                                 } 
   { FALSE                                } 
```

Where *Sel-Object* is:

```cobol
   { [IS NOT] Identifier-2                   } 
   { [IS NOT] Literal-2                      } 
   { [IS NOT] Arithmetic-Expression-2        } 
   { [IS NOT] Comparison-Expression          } 
   { [IS NOT] Boolean-Expression-2           } 
   { [IS NOT] Range-Expression               } 
   { Condition-2                          } 
   { Partial-Expression-1                 } 
   { TRUE                                 } 
   { FALSE                                } 
   { ANY                                  } 
```

Where *Range-Expression* is:

```cobol
   { Identifier-3            } {THROUGH} { Identifier-4            }
   { Literal-3               } {THRU   } { Literal-4               }
   { Arithmetic-Expression-3 }           { Arithmetic-Expression-4 }
```

### Syntax rules

1. The words THROUGH and THRU are equivalent.
2. The number of selection objects within each set of selection objects shall be equal to the number of selection subjects.
3. The two operands in a range-expression shall be of the same class and shall not be of class boolean, object or pointer.
4. A selection object is a partial-expression if the leftmost portion of the selection object is a relational operator, a class condition without the identifier, a sign condition without the identifier, or a sign condition without the arithmetic expression.
5. The classification of some selection subjects or selection objects is changed for a particular WHEN phrase as follows:

A. If the selection subject is TRUE or FALSE and the selection object is a boolean expression that results in one boolean character, the selection object is treated as a boolean condition and therefore condition-2.

B. If the selection object is TRUE or FALSE and the selection subject is a boolean expression that results in one boolean character, the selection subject is a treated as boolean condition and therefore condition-1.

C. If the selection subject is other than TRUE or FALSE and the selection object is a boolean expression that results in one boolean character, the selection object is treated as a boolean expression and therefore boolean-expression-2.

D. If the selection object is other than TRUE or FALSE and the selection subject is a boolean expression that results in one boolean character, the selection subject is treated as a boolean expression and therefore boolean-expression-1.

E. If the selection object is a partial expression and the selection subject is a data item of the class boolean or numeric, the selection subject is treated as an identifier.

6. Each selection object within a set of selection objects shall correspond to the selection subject having the same ordinal position within the set of selection subjects according to the following rules:

A. Identifiers, literals, or expressions appearing within a selection object shall be valid operands for comparison to the corresponding operand in the set of selection subjects in accordance with 8.8.4.1.1,Relation conditions.

B. Condition-2 or the words TRUE or FALSE appearing as a selection object shall correspond to condition-1 or the words TRUE or FALSE in the set of selection subjects.

C. The word ANY may correspond to a selection subject of any type.

D. Partial-expression-1 shall correspond to a selection subject that is an identifier, a literal, an arithmetic expression, or a boolean expression. Partial-expression-1 shall be a sequence of COBOL words such that, were it preceded by the corresponding selection subject, a conditional expression would result.

7. If a selection object is specified by partial-expression-1, that selection object is treated as though it were specified as condition-2, where condition-2 is the conditional expression that results from preceding partial-expression-1 by the selection subject. The corresponding selection subject is treated as though it were specified by the word TRUE.
8. The permissible combinations of selection subject and selection object operands are indicated in the table below

| Selection object | Identifier | Literal | Arithmeticexpression | Booleanexpression | Condition | TRUE orFALSE |
| --- | --- | --- | --- | --- | --- | --- |
| [NOT] identifier | Y | Y | Y | Y |  |  |
| [NOT] literal | Y |  | Y | Y |  |  |
| [NOT] arithmetic-expression | Y | Y | Y |  |  |  |
| [NOT] comparison-expression | Y | Y | Y | Y |  |  |
| [NOT] boolean-expression | Y | Y |  | Y |  |  |
| [NOT] range-expression | Y | Y | Y |  |  |  |
| Condition |  |  |  |  | Y | Y |
| Partial-expression | Y | Y | Y | Y |  |  |
| TRUE or FALSE |  |  |  |  | Y | Y |
| ANY | Y | Y | Y | Y | Y | Y |

The letter 'Y' indicates a permissible combination.A space indicates an invalid combination.

### General rules

1. If an operand of the EVALUATE statement consists of a single literal, that operand is treated as a literal, not as an expression.
2. At the beginning of the execution of the EVALUATE statement, each selection subject is evaluated and assigned a value, a range of values, or a truth value as follows:

A. Any selection subject specified by identifier-1 is assigned the value and class of the data item referenced by the identifier. If the selection subject is a numeric data item or a boolean data item whose length is one boolean position, the selection subject for this evaluation is treated as identifier-1 and not an arithmetic or boolean expression.

B. Any selection subject specified by literal-1 is assigned the value and class of the specified literal.

C. Any selection subject specified by arithmetic-expression-1 is assigned a numeric value according to the rules for evaluating an arithmetic expression.

D. Any selection subject in which boolean-expression-1 is specified is assigned a boolean value according to the rules for evaluating boolean expressions.

E. Any selection subject specified by condition-1 is assigned a truth value according to the rules for evaluating conditional expressions.

F. Any selection subject specified by the words TRUE or FALSE is assigned a truth value. The truth value 'true' is assigned to those items specified with the word TRUE, and the truth value 'false' is assigned to those items specified with the word FALSE.

3. The execution of the EVALUATE statement proceeds by processing each WHEN phrase from left to right in the following manner:

A. Each selection object within the set of selection objects for each WHEN phrase is paired with the selection subject having the same ordinal position within the set of selection subjects. The result of the analysis of this set of selection subjects and objects is either true or false as follows:

i. If the selection object is the word ANY, the result is true.

ii. If the selection object is partial-expression-1, the selection subject is placed to the left of the leading relational operator and the resulting conditional expression is evaluated. The result of the evaluation is the truth value of the expression.

iii. If the selection object is condition-2, the selection subject is either TRUE or FALSE. If the truth value of the selection subject and selection object match, the result of the analysis is true. If they do not match, the result is false.

iv. If the selection object is either TRUE or FALSE, the selection subject is condition-1. If the truth value of the selection subject and selection object match, the result of the analysis is true. If they do not match, the result is false.

v. If the selection object is a range-expression, the pair is considered to be a conditional expression of one of the following forms:

when 'NOT' is not specified in the selection object;

selection-subject >= left-part AND selection-subject <= right-part

when 'NOT' is specified in the selection object

selection-subject < left-part OR selection-subject > right-part

where left-part is identifier-3, literal-3, or arithmetic-expression-3 and right-part is identifier-4, literal-4, or arithmetic-expression-4. The result of the analysis is the truth value of the resulting conditional expression.

vi. If the selection object is identifier-2, literal-2, arithmetic-expression-2, or boolean-expression-2, the pair is considered to be a conditional expression of the following form:

selection-subject \[NOT\] = selection-object

where 'NOT' is present if it is present in the selection object. The result of the analysis is the truth value of the resulting conditional expression.

B. If the result of the analysis is true for every pair in a WHEN phrase, that WHEN phrase satisfies the set of selection subjects and no more WHEN phrases are analyzed.

C. If the result of the analysis is false for any pair in a WHEN phrase, no more pairs in that WHEN phrase are evaluated and the WHEN phrase does not match the set of selection subjects.

D. This procedure is repeated for subsequent WHEN phrases, in the order of their appearance in the source element, until either a WHEN phrase satisfying the set of selection subjects is selected or until all sets of selection objects are exhausted.

4. The execution of the EVALUATE statement then proceeds as follows:

A. If a WHEN phrase is selected, execution continues with the first imperative-statement-1 following the selected WHEN phrase.

B. If no WHEN phrase is selected and a WHEN OTHER phrase is specified, execution continues with imperative-statement-2.

C. The execution of the EVALUATE statement is terminated when execution reaches the end of imperative-statement-1 of the selected WHEN phrase or the end of imperative-statement-2, or when no WHEN phrase is selected and no WHEN OTHER phrase is specified.

### Examples

Evaluate the value of a numeric data item:

```cobol
evaluate dow
when 1 
   move "Monday" to wk-day
when 2 
   move "Tuesday" to wk-day
when 3 
   move "Wednesday" to wk-day
when 4
   move "Thursday to wk-day
when 5 
   move "Friday" to wk-day
when 6 
   move "Saturday" to wk-day
when 7 
   move "Sunday" to wk-day
end-evaluate
```

Evaluate condition names (level 88 items):

```cobol
77 error-code pic xx.
88 notfound value "35".
88 locked   value "61".
...
evaluate true
when notfound 
   move "File not found" to wk-error-desc
when locked 
   move "File locked" to wk-error-desc
when other
   move "Unknown error" to wk-error-desc
end-evaluate
```

Evaluate logical expression, check if it is true or false

```cobol
evaluate 1 = 1
when true  
   display message "Of course, it is True!"
when false 
   display message "No, this is False!"
end-evaluate
```

Evaluate variable, check for different possible ranges of values

```cobol
evaluate ws-age
when 1  thru 17 
   display message "Invalid Age for Credit Card Verification!"
when 18 thru 59 
   display message "Welcome to the Credit Card Verification App!"
when 60 thru 99 
   display message "Welcome to Senior Card Verification App!"
end-evaluate
```

Evaluate arithmetic expression, check for different possible values

```cobol
evaluate ws-amount + 1
when 10
   display "Ok"
when 11
   display "A little bit high"
when 12
   display "Value is high"
when 13 thru 99
   display "Value is too high"
when other
   display "Invalid value"
end-evaluate
```
