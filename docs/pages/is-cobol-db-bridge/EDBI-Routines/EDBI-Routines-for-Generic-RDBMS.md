## EDBI Routines for Generic RDBMS

Data mapping (any COMP type could be used, mapping is done according to the digits):

| | |
| --- | --- |
| PIC X(n) | CHAR(n) |
| PIC 9(n) | NUMERIC(n) |
| PIC 9(n)V9(m) | NUMERIC(n+m,m) |
| PIC S9(n) | NUMERIC(n) |
| PIC S9(n)V9(m) | NUMERIC(n+m,m) |
| | |

### Limitations:

No record lock support.

No check for table existence (OPEN INPUT / I-O)

### Peculiar jdbc settings:

| | |
| :--- | :--- |
| iscobol.easydb.commit_count=1 | This setting ensures that every statement that alters data is automatically committed. On the other hand, read statements are kept in transaction allowing the routine to lock records when necessary. <br>**Note** - if you adopted EDBI Generation with EDBIIS (two steps), be sure to use the -cc option, otherwise the commit-count feature is disabled. |
| | |
