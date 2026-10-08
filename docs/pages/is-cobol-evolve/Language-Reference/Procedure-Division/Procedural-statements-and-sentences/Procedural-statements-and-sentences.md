## Procedural statements and sentences

A procedural statement is a unit of the COBOL language that specifies an action to be taken. Statements are described in [Procedure Division Statements](../../Procedure-Division-Statements/Procedure-Division-Statements).

Within the procedure division, there are the following types of statements:

- declarative statements, which specify actions that may be taken during the processing of other statements
- imperative statements, which specify unconditional actions
- conditional statements, which specify, or contain one or more phrases that specify, actions that depend on the truth value of a condition.

A declarative statement begins with the statement name [SKIP3 skips three lines before the next line](../../Compiler-Directing-Statements/SKIP) and directs that actions be taken in response to specified conditions encountered during the processing of other statements.

An imperative statement specifies an unconditional action to be taken by the runtime element or is a conditional statement that is delimited by its explicit scope terminator.

A conditional statement specifies that the truth value of a condition is evaluated and used to determine subsequent flow of control. Any statement with a conditional phrase that is not terminated by its explicit scope terminator is a conditional statement.

A sentence is a sequence of one or more procedural statements, the last of which is terminated by a separator period.

Wherever 'imperative-statement' appears in the general format of a statement, 'imperative-statement' refers to one or more imperative statements ended either by a separator period or by any phrase associated with that general format.
