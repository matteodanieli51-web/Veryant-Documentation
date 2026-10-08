## GOBACK

### General Format

```cobol
GOBACK [ {RETURNING} Return-Value ] 
         {GIVING   }
```

### Syntax rules

1. GIVING and RETURNING are synonymous.
2. Return-Value can be any data item or literal.

### General Rules

1. If a GOBACK statement is executed in a program that is under the control of a calling runtime element, the program operates as if executing an EXIT PROGRAM statement.
2. If a GOBACK statement is executed in a program that is not under the control of a calling runtime element, the program operates as if executing a STOP statement.
3. If a GOBACK statement is executed in a method, the method operates as if executing an EXIT METHOD statement.

### Examples

Exit the program with exit status 1

```cobol
goback 1
```
