## Results of runtime element execution

The result of the execution of a program, function, or method that specifies a RETURNING phrase in its procedure division header, is the content of the data item referenced by that RETURNING phrase.

The result becomes available to the activating element after the activated element returns as follows:

- If the runtime element is activated by a [CALL](../../Procedure-Division-Statements/CALL) or [INVOKE](../../Procedure-Division-Statements/INVOKE) Statement, the result is placed in the data item referenced by that RETURNING phrase of that activating statement.
- If the runtime element is activated by an inline method invocation, the result is placed in the temporary data item referenced by that identifier.
