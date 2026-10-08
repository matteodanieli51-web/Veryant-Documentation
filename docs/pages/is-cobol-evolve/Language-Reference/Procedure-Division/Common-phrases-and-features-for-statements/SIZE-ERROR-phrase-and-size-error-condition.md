### SIZE ERROR phrase and size error condition

The size error condition may occur as a result of the execution of an [ADD](../../Procedure-Division-Statements/ADD), [COMPUTE](../../Procedure-Division-Statements/COMPUTE), [DIVIDE](../../Procedure-Division-Statements/DIVIDE), [MULTIPLY](../../Procedure-Division-Statements/MULTIPLY), and [SUBTRACT](../../Procedure-Division-Statements/SUBTRACT) Statement or of the evaluation of an arithmetic expression. Checking of a size error condition may be enabled by specifying the SIZE ERROR phrase of an arithmetic statement.

When the SIZE ERROR phrase is specified for an arithmetic statement, checking for the size error condition is enabled for the arithmetic operations that take place in developing and storing the result of that arithmetic statement. Any exception condition that is raised during item identification for the operands used during the execution of the arithmetic statement is processed as defined for that exception condition and execution of the arithmetic statement ceases. Execution resumes as indicated for that exception condition. If a Size Error condition exists during the execution of the arithmetic statement other than during item identification and a SIZE ERROR phrase is specified for the statement, processing of the size error condition occurs as described below for the SIZE ERROR phrase, and no Size Error exception declaratives are performed.

The size error condition exists in the following cases:

1. if the rules for evaluation of exponentiation are violated;
2. if the divisor in a divide operation or in a [DIVIDE](../../Procedure-Division-Statements/DIVIDE) Statement is zero;
3. if, after radix point alignment and any rounding specified by the ROUNDED phrase, the absolute value of the result of an arithmetic statement exceeds the largest value that may be contained in the associated resultant data item;
4. if an arithmetic operation on the intermediate data item would cause the new value to be outside of the allowed range;
5. if the rules for a statement or an expression explicitly specify that a Size Error exception condition is set to exist.

If the size error condition exists and the SIZE ERROR phrase is specified, the following occurs:

1. If the size error condition occurred during the arithmetic operations specified by the arithmetic statement, the values of all of the resultant data items remain unchanged from the values they had at the start of the execution of the arithmetic statement. Execution proceeds as indicated in rule 3, below.
2. If the absolute value of the result of the arithmetic operation exceeds the maximum value allowed for any resultant identifier, the content of that resultant identifier is not changed from the content that existed at the start of the execution of the arithmetic statement. The values of resultant identifiers for which the size error condition did not occur are the same as they would have been if the size error condition had not existed for any of the resultant identifiers. Execution proceeds as indicated in rule 3, below.
3. After completion of the arithmetic operations, and possibly the storing of values into resultant data items as specified in rule 2, control is transferred to the imperative-statement specified in the SIZE ERROR phrase and execution continues according to the rules for each statement specified in that imperative-statement. If a procedure branching or conditional statement that causes explicit transfer of control is executed, control is transferred in accordance with the rules for that statement; otherwise, upon completion of the execution of the imperative-statement specified in the SIZE ERROR phrase, control is transferred to the end of the arithmetic statement and the NOT SIZE ERROR phrase, if specified, is ignored.

If the size error condition exists and a SIZE ERROR phrase is not specified, an exception is raised in the following cases:

1. if the rules for evaluation of exponentiation are violated,
2. if the divisor in a divide operation or the [DIVIDE](../../Procedure-Division-Statements/DIVIDE) Statement is zero,
3. if the absolute value of the result of an arithmetic statement exceeds the largest value that may be contained in the associated resultant data item
4. if an arithmetic operation on a standard intermediate data item would cause the new value to be outside of the allowed range,

and processing proceeds as specified in "Fatal exception conditions" above. If a NOT SIZE ERROR phrase is specified, it is ignored.

If no size error condition occurs during the execution of the arithmetic operations specified by an arithmetic statement or expression or while storing into the resultant identifiers, the SIZE ERROR phrase, if specified, is ignored and control is transferred to the end of the arithmetic statement or expression or to the imperative statement specified in the NOT SIZE ERROR phrase if it is specified. In the latter case, execution continues according to the rules for each statement specified in that imperative-statement. If a procedure branching or conditional statement that causes explicit transfer of control is executed, control is transferred in accordance with the rules for that statement; otherwise, upon completion of the execution of the imperative-statement specified in the NOT SIZE ERROR phrase, control is transferred to the end of the arithmetic statement.
