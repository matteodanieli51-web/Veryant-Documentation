## EDBI Routines for Microsoft SQL Server

Data mapping (any COMP type could be used, mapping is done according to the digits):

| | |
| --- | --- |
| PIC X(n) | VARCHAR(n)[1] |
| PIC 9(1-4) | SMALLINT |
| PIC 9(5-9) | INT |
| PIC 9(>9) | BIGINT |
| PIC 9(n)V9(m) | DECIMAL(n+m,m) |
| PIC S9(n)V9(m) | DECIMAL(n+m,m) |
| | |

\[1\] It will be CHAR if you used either the [-defCHAR](../DatabaseBridge-generator-edbiis#command-line-options) option with the edbiis command or the [-ca](\) option in the Compiler command line.

### Peculiar jdbc settings:

| | |
| --- | --- |
| iscobol.easydb.commit_count=1 | This setting ensures that every statement that alters data is automatically committed. On the other hand, read statements are kept in transaction allowing the routine to lock records when necessary. Note - if you adopted [EDBI Generation with EDBIIS (two steps)](../Working-with-DatabaseBridge/Generating-EDBI-users-routines/EDBI-Generation-with-EDBIIS), be sure to use the [-cc](\) option, otherwise the commit-count feature is disabled. |
| | |

### Lock Timeout:

By default the SQL Server JDBC driver waits for locks to be released. If you wish to receive a ‘record locked’ error, you can configure the lock timeout in the connection URL, for example:

```cobol
iscobol.jdbc.url=jdbc:sqlserver://my-server:1433;user=sa;password=manager;encrypt=false;lockTimeout=1000
```

### Locking Tables:

The statements OPEN EXCLUSIVE I-O and OPEN I-O WITH LOCK have no effect on empty tables. In order to acquire a lock on the whole file, at least one record must be present.

**Note** - the above peculiar settings and the need of setting the lock timeout are required only if you wish to manage locks natively on the database. If you're working in a Application Server (Thin Client) or File Server environment and you wish to have a full support for locking features (including OPEN EXCLUSIVE and OPEN I-O WITH LOCK), then you may consider handling locks through the [Internal lock management](\).
