## EDBI Routines for MySQL (InnoDB engine) and MariaDB

Data mapping (any COMP type could be used, mapping is done according to the digits):

| | |
| --- | --- |
| PIC X(n) | VARCHAR(n)[1] |
| PIC 9(1-2) | TINYINT |
| PIC 9(3-4) | SMALLINT |
| PIC 9(5-6) | MEDIUMINT |
| PIC 9(7-9) | INT |
| PIC 9(>9) | BIGINT |
| PIC 9(n)V9(m) | DECIMAL(n+m,m) |
| PIC S9(n)V9(m) | DECIMAL(n+m,m) |
| | |

\[1\] It will be CHAR if you used either the [-defCHAR](../DatabaseBridge-generator-edbiis#command-line-options) option with the edbiis command or the [-ca](\) option in the Compiler command line.

### Peculiar jdbc settings:

| | |
| --- | --- |
| iscobol.easydb.commit_count=1 | This setting ensures that every statement that alters data is automatically committed. On the other hand, read statements are kept in transaction allowing the routine to lock records when necessary. <br>**Note** - if you adopted [EDBI Generation with EDBIIS (two steps)](../Working-with-DatabaseBridge/Generating-EDBI-users-routines/EDBI-Generation-with-EDBIIS), be sure to use the [-cc](\) option, otherwise the commit-count feature is disabled. |
| | |

### Lock Timeout:

By default the MySQL and MariaDB drivers wait for locks to be released. If you wish to receive a ‘record locked’ error, you need to issue this statement after the connection has been acquired (e.g. after the opening of the first file):

```cobol
           EXEC SQL
                EXECUTE IMMEDIATE
                "set innodb_lock_wait_timeout = 0"
           END-EXEC
```

Note - the above peculiar settings and the need of setting the lock wait timeout are required only if you wish to manage locks natively on the database. If you're working in a Application Server (Thin Client) or File Server environment and you wish to have a full support for locking features, then you may consider handling locks through the [Internal lock management](\).
