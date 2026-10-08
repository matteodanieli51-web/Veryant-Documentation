## PERFORM

#### Format 1

```cobol
PERFORM  [IN THREAD] procedure-name-1 [ {THROUGH} procedure-name-2 ]
                                        {THRU   }
[HANDLE IN Handle-1] [times-phrase  ]
                    [until-phrase  ]
                    [varying-phrase]
```

#### Format 2

```cobol
PERFORM [times-phrase  ] imperative-statement-1 END-PERFORM
        [until-phrase  ]
        [varying-phrase]
```

where times-phrase is:

```cobol
{identifier-1} TIMES
{integer-1   }
```

where until-phrase is:

```cobol
[ WITH TEST {BEFORE} ] UNTIL {condition-1}
            {AFTER }
```

where varying-phrase is:

```cobol
[ WITH TEST {BEFORE}
            {AFTER }
 
VARYING {identifier-2} FROM   {identifier-3} [BY {identifier-4}] UNTIL condition-1
        {index-name-1}        {index-name-2}     {literal-2   }
        {inline-declaration-1}{literal-1   }
 
[ AFTER {identifier-5} FROM   {identifier-6} [BY {identifier-7}] UNTIL condition-2]...
        {index-name-3}        {index-name-4}     {literal-4   }
        {inline-declaration-2}{literal-3   }
```

#### Format 3

```cobol
PERFORM  imperative-statement-1 UNTIL EXIT END-PERFORM
```

### Syntax rules

1. If neither the TEST BEFORE nor the TEST AFTER phrase is specified, the TEST BEFORE phrase is assumed.
2. Each identifier shall reference a numeric elementary item described in the data division. Identifier-1 shall be an integer.
3. Each literal shall be numeric.
4. The words THROUGH and THRU are equivalent.
5. If an index-name is specified in the VARYING or AFTER phrase, then:

A. The identifier in the associated FROM and BY phrases shall reference an integer data item.

B. The literal in the associated BY phrase shall be a nonzero integer.

6. If an index-name is specified in the FROM phrase, then:

A. The identifier in the associated VARYING or AFTER phrase shall reference an integer data item.

B. The identifier in the associated BY phrase shall reference an integer data item.

C. The literal in the associated BY phrase shall be an integer.

7. The literal in the BY phrase shall not be zero.
8. Condition-1, condition-2, ... , may be any conditional expression, as described in [Conditional expressions](../Procedure-Division/Conditional-expressions/Conditional-expressions).
9. Procedure-name-1 shall be the name of either a paragraph or a section in the same source element as that in which the PERFORM statement is specified.
10. Procedure-name-2 shall be the name of either a paragraph or a section in the same source element as that in which the PERFORM statement is specified.
11. Inline-declaration-1 and inline-declaration-2 define primitive numeric items that will exist only during the PERFORM cycle. The syntax is

```cobol
identifier as type
```

where *type* can be:

- one of the following Java primitive types to be specified between quotes: double, float, int, long or short.
- one of the following Java classes to be specified between quotes or through a logical name mapped in the REPOSITORY paragraph: java.lang.Double, java.lang.Float, java.lang.Integer, java.lang.Long or java.lang.Short.

Being limited to a specific PERFORM cycle the same identifier can be used in sibling PERFORM cycles, but not in nested PERFORM cycles.

### General rules

1. If an index-name is specified in the VARYING or AFTER phrase, and an identifier is specified in the associated FROM phrase, at the time the data item referenced by the identifier is used to initialize the index associated with the index-name.
2. An inline PERFORM statement and an out-of-line PERFORM statement function identically according to the following rules. For an out-of-line PERFORM statement, the specified set of statements consists of all statements beginning with the first statement of procedure-name-1 and ending with the last statement of procedure-name-2, or, if procedure-name-2 is not specified, the last statement of procedure-name-1. For an inline PERFORM statement, the specified set of statements consists of all statements contained within the PERFORM statement.
3. When the PERFORM statement is executed, control is transferred to the first statement of the specified set of statements except as indicated in general rules 7, 8, and 9. For those cases where a transfer of control to the specified set of statements does take place, an implicit transfer of control to the end of the PERFORM statement is established as follows:

A. If procedure-name-2 is not specified, the return mechanism is after the last statement of procedure-name-1.

B. If procedure-name-2 is specified, the return mechanism is after the last statement of procedure-name-2.

4. There is no necessary relationship between procedure-name-1 and procedure-name-2 except that a consecutive sequence of operations is to be executed beginning at the procedure named procedure-name-1 and ending with the execution of the procedure named procedure-name-2.

**NOTE** - Statements such as the GO TO statement, the PERFORM statement, and the procedure format of the EXIT statement may occur in the flow of execution of the specified set of statements, however the flow of execution should eventually pass to the end of procedure-name-2.

5. If control passes to the specified set of statements by means other than a PERFORM statement, control will pass through the last statement of the set to the next executable statement as if no PERFORM statement referenced the set.
6. A PERFORM statement without times-phrase, until-phrase, or varying-phrase is the basic PERFORM statement. The specified set of statements referenced by this type of PERFORM statement is executed once and then control passes to the end of the PERFORM statement.
7. If times-phrase is specified, the specified set of statements is performed the number of times specified by integer-1 or by the value of the data item referenced by identifier-1 at the start of the execution of the PERFORM statement. If at the start of the execution of a PERFORM statement, the value of the data item referenced by identifier-1 is equal to zero or is negative, control passes to the end of the PERFORM statement. Following the execution of the specified set of statements the specified number of times, control is transferred to the end of the PERFORM statement.

**NOTE** - During execution of the PERFORM statement, a change to the contents of identifier-1 does not alter the number of times the specified set of statements is performed.

8. If until-phrase is specified, the specified set of statements is performed until the condition specified by the UNTIL phrase is true. When the condition is true, control is transferred to the end of the PERFORM statement. If the condition is true when the PERFORM statement is entered, and the TEST BEFORE phrase is specified or implied, no transfer to the specified set of statements takes place, and control is passed to the end of the PERFORM statement. If the TEST AFTER phrase is specified, the PERFORM statement functions as if the TEST BEFORE phrase were specified except that the condition is tested after the specified set of statements has been executed. Item identification associated with the operands specified in condition-1 is done each time the condition is tested.
9. If varying-phrase is specified, the execution of the PERFORM statement augments the data items referenced by one or more identifiers or the indexes referenced by one or more index-names in an orderly fashion. In the following rules, the data items referenced by identifier-2 and identifier-5 and the indexes referenced by index-name-1 and index-name-3 are referred to as the induction variables. The content of the data item referenced by the identifier, the occurrence number corresponding to the value of the index referenced by the index-name, or the value of the literal referenced in the FROM phrase is referred to as the initialization value. The content of the data item referenced by the identifier or the value of the literal in a BY phrase is referred to as the augment value. For any BY phrase that is omitted, the augment value is 1. Item identification for identifier-2, identifier-5, index-name-1, or index-name-3 is done each time the content of the data item referenced by the identifier or the value of the index referenced by the index-name is set or augmented. Item identification for identifier-3, identifier-4, identifier-6, identifier-7, index-name-2, and index-name-4 is done each time the content of the data item referenced by the identifier or the index referenced by the index-name is used in a setting or augmenting operation. Item identification associated with the operands specified in condition-1 or condition-2 is done each time the condition is tested.

**NOTE** - If an augment value is less than 0, the induction variable is actually decremented by the absolute value of the augment value.

The sequence of operation of the PERFORM statement is as follows:

A. All induction variables are set to their associated initialization values in the left-to-right order in which the induction variables are specified.

B. If the TEST AFTER phrase is specified, and there is no AFTER phrase, the specified set of statements is executed once and condition-1 is tested. If the condition is false, the induction variable is incremented by the augment value, and the specified set of statements is executed again. The cycle continues until condition-1 is tested and found to be true, at which point control is transferred to the end of the PERFORM statement. At that point, the induction variable contains the value it contained at the completion of the execution of the specified set of statements.

C. If the TEST AFTER phrase is specified, and there is one or more AFTER phrase, the following occurs:

i. The specified set of statements is executed.

ii. The rightmost condition-2 is then evaluated.

iii. If the rightmost condition-2 is false, the associated induction variable is incremented by the associated augment value, and execution proceeds with step a.

iv. If the last condition evaluated is true, the condition to its left is evaluated. This is repeated until either a false condition is found or the last condition evaluated is condition-1 and condition-1 is true. If a false condition is found, the induction variable associated with that condition is incremented by the associated augment value, all induction variables to the right of the false condition are set to their initialization values, and execution proceeds with step a. If no condition is found to be false, control is transferred to the end of the PERFORM statement.

D. If the TEST AFTER phrase is not specified and there is no AFTER phrase, condition-1 is evaluated, and if it is true, control is transferred to the end of the PERFORM statement. If it is false, the specified set of statements is executed. Then, the induction variable is incremented by the augment value, and condition-1 is evaluated again. When control is passed to the end of the PERFORM statement, the induction variable contains the value it contained when condition-1 was evaluated.

E. If the TEST AFTER phrase is not specified, and there is one or more AFTER phrase, the following occurs:

i. Condition-1 is evaluated.

If condition-1 is true, control is transferred to the end of the PERFORM statement; otherwise, the condition-2 immediately to the right becomes the current condition.

ii. The current condition is evaluated.

If the current condition is true:

a. the induction variable associated with the current condition is set to its initialization value

b. the condition to the left of the current condition becomes the current condition

c. the induction variable associated with the new current condition is incremented by its associated augment value

d. if the current condition is condition-1 execution proceeds to step a, else execution proceeds to the beginning of step b.

otherwise:

a. if there is another AFTER phrase to the right of the current condition,

—the condition associated with that AFTER phrase becomes the current condition

—execution proceeds to the beginning of step b;

b. otherwise

—the specified set of statements is executed

—the induction variable associated with the current condition is incremented by the augment value

—execution proceeds to the beginning of step b.

During the execution of the specified set of statements associated with the PERFORM statement, all changes to the induction variable, the variables associated with the augment value, and the variables associated with the initialization value have immediate effect and all subsequent references to the associated data items use the updated contents.

10. The range of a PERFORM statement consists logically of all those statements that are executed as a result of executing the PERFORM statement through execution of the implicit transfer of control to the end of the PERFORM statement. The range includes all statements that are executed as the result of a transfer of control in the range of the PERFORM statement, except for statements executed as the result of a transfer of control by an EXIT METHOD, EXIT PROGRAM, or GOBACK statement specified in the same instance of the same source element as the PERFORM statement. Declarative procedures that are executed as a result of the execution of statements in the range of a PERFORM statement are included in the range of the PERFORM statement. The statements in the range of a PERFORM statement need not appear consecutively in the source element.
11. If handle-1 is specified, the new thread's unique ID is stored in handle-1
12. When the THREAD option is used, a new thread is created by the PERFORM statement. Once control returns to the end of the PERFORM statement, the thread is terminated. All of the statements contained in the scope of the PERFORM are executed in the new thread.
13. Data items defined with an inline declaration exist only for the specific PERFORM cycle where they were defined and are disposed as soon as the cycle terminates. This kind of data item can’t be edited or monitored by the Debugger.

#### Format 3

14. The set of statements is performed until an EXIT PERFORM statement is executed.

### Examples

Format 1 - Perform paragraphs in separate thread

```cobol
working-storage section.
77 t-handle-1 usage handle of thread.
 
procedure division.
main.
  perform thread par-1 handle t-handle-1
  display message "This message displays even before par-1 is done"
  ...
```

Format 2 - Perform paragraphs or statements n times

```cobol
perform par-1 thru par-5 10 times
perform par-2 5 times
perform 10 times 
  add 1 to var-1 
end-perform
```

Format 2 - Perform paragraphs or statements until condition evaluates true

```cobol
perform multiply-var-1 until var-1 > 900
perform compute-interest thru compute-exit until var-interest > 0
perform until var-1 > 900
  multiply 2 by var-1 
end-perform
```

Format 2 - Perform paragraphs or statements varying variable

```cobol
perform count-items varying ws-count from 1 by 1 until ws-item-count > 9850
perform varying ws-count from 1 by 1 until var-1 > 900
  multiply ws-count by var-1 
end-perform
```

Perform paragraphs or statements testing the condition after the first iteration

```cobol
perform multiply-var-1 test after until var-1 > 900
perform compute-interest thru compute-exit test after until var-interest > 0
perform test after until var-1 > 900
  multiply 2 by var-1 
end-perform
```
