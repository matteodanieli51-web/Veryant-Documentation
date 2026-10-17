### Arithmetic statements

The arithmetic statements are the [ADD](../../Procedure-Division-Statements/ADD), [COMPUTE](../../Procedure-Division-Statements/COMPUTE), [DIVIDE](../../Procedure-Division-Statements/DIVIDE), [MULTIPLY](../../Procedure-Division-Statements/MULTIPLY), and [SUBTRACT](../../Procedure-Division-Statements/SUBTRACT) Statements. They have several common features.

1. The data descriptions of the operands need not be the same; any necessary conversion and decimal point alignment is supplied throughout the calculation.
2. For [ADD](../../Procedure-Division-Statements/ADD), [DIVIDE](../../Procedure-Division-Statements/DIVIDE), [MULTIPLY](../../Procedure-Division-Statements/MULTIPLY), and [SUBTRACT](../../Procedure-Division-Statements/SUBTRACT) Statements when native arithmetic is in effect:

a. When none of the operands is an intrinsic function or a data item described with usage Double, Float, Signed-Int, Integer, Signed-Long, Signed-Short, Unsigned-Int, Unsigned-Long or Unsigned-Short, the composite of operands shall not contain more than 18 digits.

b. When any of the operands is an intrinsic function or a data item described with usage Double, Float, Signed-Int, Integer, Signed-Long, Signed-Short, Unsigned-Int, Unsigned-Long or Unsigned-Short, the composite of the operands that are not intrinsic functions or data items described with usage Double, Float, Signed-Int, Integer, Signed-Long, Signed-Short, Unsigned-Int, Unsigned-Long or Unsigned-Short shall not contain more than 18 digits. The composite of operands is a hypothetical data item resulting from the superimposition of specified operands in a statement aligned on their decimal points.

3. When standard, standard-binary or standard-decimal arithmetic is in effect, each arithmetic statement is defined in terms of one or more arithmetic expressions. Storing of a standard intermediate data item in a resultant-identifier shall be according to the rules for the [MOVE](../../Procedure-Division-Statements/MOVE) Statement. The ROUNDED phrase applies only to this move.

**NOTE** - When standard arithmetic is in effect, a size error condition may occur during the execution of arithmetic operations used to compute the result as well as during the final move.

4. The arithmetic statements may have single or multiple resultant identifiers. These statements have common rules for storing in the resultant identifiers. The execution of these statements proceeds in the following order:

a. The initial evaluation of the statement is done and the result of this operation is placed in an intermediate data item. The rules indicating which data items or literals are part of this evaluation are given in the rules for the individual statements. All item identification for the data items involved in the initial evaluation is done at the start of the execution of the statement. If the size error condition is raised during the initial evaluation, none of the resultant data items are changed and execution proceeds as indicated in the [SIZE ERROR phrase](./SIZE-ERROR-phrase-and-size-error-condition) above and in the size error condition.

b. If the size error condition was not raised during the initial evaluation, the intermediate data item is stored in or combined with and then stored in each single resulting data item in the left-to-right order in which the receiving data items are specified in the statement. Item identification for the receiving data items is done as each data item is accessed unless it was already done in step a. If the size error condition is raised when attempting to store in a resulting data item, only that data item remains unchanged and processing proceeds to the next resulting data item to the right

When resolving addition and subtraction operations with decimal values, if all operands are equal or smaller than 18 digits in size, the result is internally stored into a Java long item, even if it would require more space. When one or more of the operands are greater than 18 digits in size, instead, the result is internally stored into a internal object that is slower than Java long but provides better precision. Due to this rule, if the program needs to handle numbers over 18 digits in size, it's strongly suggested to make the involved numeric variables greater than 18 digits in size, or the results may be incorrect in the decimal part.

The following code causes incorrect result:

```cobol
01 W1 PIC 9(18).
01 W2 PIC 9(4)v9(4).
01 W3 PIC 9(18)v9(4).
 
MOVE 111111111111111111 TO W1.
MOVE 3333.5555 TO W2.
ADD W1 TO W2 GIVING W3.
```

In order to obtain the correct result, W1 should be defined greater than 18 digits, for example:

```cobol
01 W1 PIC 9(19).
```

or, alternatively, you should compile the program with the [-cfp36](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) option.
