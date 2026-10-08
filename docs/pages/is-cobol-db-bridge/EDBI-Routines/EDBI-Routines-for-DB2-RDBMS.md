## EDBI Routines for DB2 RDBMS

Data mapping (any COMP type could be used, mapping is done according to the digits):

| | |
| --- | --- |
| PIC X(n) | VARCHAR(n)[1] |
| PIC 9(n) | DECIMAL(n) |
| PIC 9(n)V9(m) | DECIMAL(n+m,m) |
| PIC S9(n) | DECIMAL(n) |
| PIC S9(n)V9(m) | DECIMAL(n+m,m) |
| | |

\[1\] It will be CHAR if you used either the [-defCHAR](../DatabaseBridge-generator-edbiis#command-line-options) option with the edbiis command or the [-ca](\) option in the Compiler command line.

### Peculiar jdbc settings:

| | |
| :--- | :--- |
| iscobol.easydb.commit_count=1 | This setting ensures that every statement that alters data is automatically committed. On the other hand, read statements are kept in transaction allowing the routine to lock records when necessary. <br>**Note** - if you adopted [EDBI Generation with EDBIIS (two steps)](../Working-with-DatabaseBridge/Generating-EDBI-users-routines/EDBI-Generation-with-EDBIIS), be sure to use the [-cc](\) option, otherwise the commit-count feature is disabled. |
| | |
