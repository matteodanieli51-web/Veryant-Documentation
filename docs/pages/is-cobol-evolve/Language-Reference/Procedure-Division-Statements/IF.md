## IF

### General Format

```cobol
IF Condition THEN { statement-1   }
                  { NEXT SENTENCE }
 
  [ ELSE statement-2 [END-IF] ]
  [ ELSE NEXT SENTENCE        ]
  [ END-IF                    ]
```

### Syntax rules

1. Condition is any conditional expression, as described in [Conditional expressions](../Procedure-Division/Conditional-expressions/Conditional-expressions).
1. Statement-1 and statement-2 represent either one or more imperative statements or a conditional statement optionally preceded by one or more imperative statements.
2. Statement-1 and statement-2 may each contain an IF statement. In this case, the IF statement is said to be nested.

IF statements within IF statements are considered matched IF, ELSE, and END-IF ordered combinations, proceeding from left to right. Any ELSE encountered is matched with the nearest preceding IF that either has not been already matched with an ELSE or has not been implicitly or explicitly terminated. Any END-IF encountered is matched with the nearest preceding IF that has not been implicitly or explicitly terminated.

3. The ELSE NEXT SENTENCE phrase may be omitted if it immediately precedes the terminal separator period of the sentence.

### General rules

1. If Condition is true, control is transferred to the first statement of statement-1 and execution continues according to the rules for each statement specified in statement-1. The ELSE phrase, if specified, is ignored.
2. If Condition is false, the THEN phrase is ignored. If the ELSE phrase is specified, control is transferred to the first statement of statement-2 and execution continues according to the rules for each statement specified in statement-2.
3. If Condition is true and statement-1 is specified, control is transferred to the first statement of statement-1 and execution continues according to the rules for each statement specified in statement-1. The ELSE phrase, if specified, is ignored.
4. If Condition is true and NEXT SENTENCE is specified in the THEN phrase, the ELSE phrase, if specified, is ignored and control is transferred to an implicit CONTINUE statement immediately preceding the next separator period.
5. If Condition is false and statement-2 is specified, the THEN phrase is ignored, control is transferred to the first statement of statement-2, and execution continues according to the rules for each statement specified in statement-2.
6. If Condition is false and NEXT SENTENCE is specified in the ELSE phrase, the THEN phrase is ignored and control is transferred to an implicit CONTINUE statement immediately preceding the next separator period.
7. If Condition is false and the ELSE phrase is not specified, the THEN phrase is ignored.

### Examples

Evaluate condition to process interest computation

```cobol
if ws-amount not > 0
   exit paragraph
else
   perform compute-interest
end-if
display message "Interest computed : " ws-interest
```
