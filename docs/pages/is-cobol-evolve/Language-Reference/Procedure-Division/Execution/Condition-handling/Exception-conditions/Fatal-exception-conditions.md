#### Fatal exception conditions

If a fatal exception condition exists, processing of the statement is interrupted and one of the following occurs in the order specified:

1. If a conditional phrase without the NOT phrase is specified in the interrupted statement and the rules for that statement indicate that the fatal exception condition is to be processed by the conditional phrase, the procedures for non-fatal exceptions as specified in "Non-fatal exception conditions" below, apply.
2. If there is an applicable [SKIP3 skips three lines before the next line](../../../../Compiler-Directing-Statements/SKIP) Statement in the source unit, the associated declarative is executed.
3. If the exception condition is neither Exit Program nor Goback, and there is an applicable [PROPAGATE Directive](../../../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Directives/PROPAGATE-Directive), the exception condition is propagated.
4. Execution of the run unit is terminated abnormally as specified in "Abnormal run unit termination" above.
