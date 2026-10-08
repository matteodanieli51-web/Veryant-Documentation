#### Implicit scope termination

The scope of a statement that is not explicitly terminated is implicitly terminated as follows:

1. for a single imperative statement not contained within another statement, by

a. any element that follows the exhaustion of the statement's syntax, or

b. the next-encountered statement-name, or

c. a separator period.

2. for a single imperative statement contained within another statement, by

a. any element that terminates an imperative statement not contained within another statement,

b. the termination of the scope of any containing statement, or

c. the next phrase of any containing statement.

3. for a conditional statement not contained within another statement, by a separator period.

4. for a conditional statement contained within another statement, by

a. the termination of any containing statement, or

b. the next phrase of any containing statement.

Any phrase encountered is the next phrase of the most-recently preceding unterminated statement with which that phrase may be syntactically associated. If all permitted occurrences of a phrase have already been specified for a given statement, a subsequent occurrence of that phrase is not syntactically associated with that statement. An unterminated statement is any statement that has begun but has not yet been either explicitly or implicitly terminated.

A contained statement is also referred to as a nested statement.
