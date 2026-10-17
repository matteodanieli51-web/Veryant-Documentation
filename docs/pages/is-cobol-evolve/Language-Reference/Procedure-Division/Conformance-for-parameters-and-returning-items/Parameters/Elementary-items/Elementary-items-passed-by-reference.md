##### Elementary items passed by reference

If either the formal parameter or the corresponding argument is an object reference, the corresponding argument or formal parameter shall be an object reference following these rules:

1. If either the argument or the formal parameter is a universal object reference, the corresponding formal parameter or argument shall be a universal object reference.
2. If either the argument or the formal parameter is described with an interface-name, the corresponding formal parameter or argument shall be described with the same interface-name.
3. If either the argument or the formal parameter is described with a class-name, the corresponding formal parameter or argument shall be described with the same class-name, and the FACTORY phrases shall be the same.

If either the argument or the formal parameter is of class pointer, the corresponding formal parameter or argument shall be of class pointer and the corresponding items shall be of the same category. If either is a restricted pointer, both shall be restricted and of the same type.

If neither the formal parameter nor the argument is of class object or pointer, the conformance rules are the following:

1. If the activated element is a program for which there is no program-specifier in the REPOSITORY paragraph of the activating element and there is no NESTED phrase specified on the CALL Statement, the formal parameter shall be of the same length as the corresponding argument.
2. If the activated element is a method, then the definition of the formal parameter and the definition of the argument shall have the same BLANK WHEN ZERO, JUSTIFIED, PICTURE, USAGE, and SIGN clauses, with the following exceptions:

a. Currency symbols match if and only if the corresponding currency strings are the same.

b. Period picture symbols match if and only if the DECIMAL-POINT IS COMMA clause is in effect for both the activating and the activated runtime elements or for neither of them. Comma picture symbols match if and only if the DECIMAL-POINT IS COMMA clause is in effect for both the activating and the activated runtime elements or for neither of them.

Additionally:

a. A national group item matches an elementary data item of usage national described with the same number of national character positions.

b. If the formal parameter is described with the ANY LENGTH clause, its length is considered to match the length of the corresponding argument.

c. If the argument is described with the ANY LENGTH clause, the corresponding formal parameter shall be described with the ANY LENGTH clause.
