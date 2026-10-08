## Explicit and implicit transfers of control

The flow of the control mechanism transfers control from statement to statement in the sequence in which they were written unless an explicit transfer of control overrides this sequence or there is no next executable statement to which control may be passed. The transfer of control from statement to statement occurs without the writing of an explicit procedure division statement, and, therefore, is an implicit transfer of control.

COBOL provides both explicit and implicit means of altering the implicit control transfer mechanism.

In addition to the implicit transfer of control between consecutive statements, implicit transfer of control also occurs when the normal flow is altered without the execution of a procedure branching statement. COBOL provides the following types of implicit control flow alterations that override the statement-to-statement transfers of control:

1. If a paragraph is being executed under control of another COBOL statement such as [PERFORM](../../Procedure-Division-Statements/PERFORM), [SKIP3 skips three lines before the next line](../../Compiler-Directing-Statements/SKIP), and [SORT](../../Procedure-Division-Statements/SORT), and the paragraph is the last paragraph in the range of the controlling statement, then an implied transfer of control occurs from the last statement in the paragraph to the control mechanism of the last executed controlling statement. Further, if a paragraph is being executed under the control of a [PERFORM](../../Procedure-Division-Statements/PERFORM) Statement that causes iterative execution, and that paragraph is the first paragraph in the range of that [PERFORM](../../Procedure-Division-Statements/PERFORM) Statement, an implicit transfer of control occurs between the control mechanism associated with that [PERFORM](../../Procedure-Division-Statements/PERFORM) Statement and the first statement in that paragraph for each iterative execution of the paragraph.
2. When a [SORT](../../Procedure-Division-Statements/SORT) Statement is executed, an implicit transfer of control occurs to any associated input or output procedures.
3. When any I/O COBOL statement is executed that results in the execution of a declarative section, an implicit transfer of control to the declarative section occurs.

**NOTE** - Another implicit transfer of control occurs after execution of the declarative section, as described in rule 1 above.

An explicit transfer of control consists of an alteration of the implicit control transfer mechanism by the execution of a procedure branching or conditional statement. An explicit transfer of control may be caused only by the execution of a procedure branching or conditional statement. The procedure branching statement [EXIT](../../Procedure-Division-Statements/EXIT) program causes an explicit transfer of control only when the statement is executed in a called program.

If control is transferred either implicitly or explicitly to a paragraph containing no statements, execution proceeds as if the paragraph contained only a single sentence consisting of a [CONTINUE](../../Procedure-Division-Statements/CONTINUE) Statement.

In this document, the term 'next executable statement' is used to refer to the next COBOL statement to which control is transferred according to the rules above and the rules associated with each language element.

There is no next executable statement when the execution of an [EXIT](../../Procedure-Division-Statements/EXIT) program, [GOBACK](../../Procedure-Division-Statements/GOBACK), or [STOP](../../Procedure-Division-Statements/STOP) Statement transfers control outside the COBOL source element.

In the declarative section, there is no next executable statement after either the last statement when the paragraph in which it appears is not being executed under the control of some other COBOL statement, or the last statement when the statement is in the range of an active [PERFORM](../../Procedure-Division-Statements/PERFORM) Statement executed in a different section and this last statement of the declarative section is also not the last statement of the procedure that is the exit of the active [PERFORM](../../Procedure-Division-Statements/PERFORM) Statement. In these cases the flow of control is undefined.

There is also no next executable statement after the last statement in a source element when the paragraph in which it appears is not being executed under the control of some other COBOL statement in that source element, after the end marker, and if there are no procedure division statements in a program, function, or method. In these cases, an implicit [GOBACK](../../Procedure-Division-Statements/GOBACK) Statement without any optional phrases is executed.
