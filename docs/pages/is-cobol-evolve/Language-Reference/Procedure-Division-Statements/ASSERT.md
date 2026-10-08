## ASSERT

### General Format

```cobol
ASSERT condition OTHERWISE value-1 [ value-2 ... value-n ]
```

### Syntax Rules

1. *value-1*, *value-2* and *value-n* can be either literals or data items.

### General Rules

1. The ASSERT statement is evaluated only when the program runs with the *-ea* Java option. In order to take advantage of assertions, you should run the COBOL program with one of the following commands

i. java -ea PROG

i. iscrun -J-ea PROG

2. If *condition* is true, the program continues to the next statement.
3. If *condition* is false, then a java.lang.AssertionError is raised. The error message is set to the combination of the values specified in the OTHERWISE clause.

### Examples

Sample to verify age before continue program flow.

```cobol
assert ws-age > 17 otherwise "Invalid Age"
display message "Welcome, your age has been verified!"
```
