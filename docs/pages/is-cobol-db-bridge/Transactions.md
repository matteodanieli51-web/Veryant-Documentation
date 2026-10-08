# Transactions

A transaction means a sequence of information exchange and related work (such as database updating) that is treated as a unit for the purposes of satisfying a request and for ensuring database integrity. For a transaction to be completed and database changes to made permanent, a transaction has to be completed in its entirety. If something happens before the transaction is successfully completed, any changes to the database must be kept track of so that they can be undone.

In order to manage transactions, the connection to the database must not be in autocommit mode, therefore the [iscobol.jdbc.autocommit (boolean)](\) setting must be either omitted or set to false. Also, the [iscobol.easydb.commit_count](\) setting must either omitted or set to 0 to avoid automatic COMMITs from the runtime.

In this way, every modification to the database data is done within a transaction. When every modification has been done, the program can confirm (COMMIT) or cancel (ROLLBACK) and the database will be updated accordingly.

In order to confirm the data modification, your program should call the EDBI\_COMMIT routine:

```cobol
CALL "EDBI_COMMIT" USING RET-CODE, RET-ERMC.
```

In order to cancel the data modification, your program should call the EDBI\_ROLLBACK routine:

```cobol
CALL "EDBI_ROLLBACK" USING RET-CODE, RET-ERMC.
```

RET-CODE and RET-ERMC should be defined as follows:

```cobol
01 RET-CODE  PIC S9(10).
01 RET-ERMC  PIC X(256).
```

They receive the SQL return code (0 if successful, non-zero if an error occurred) and the error description respectively.
