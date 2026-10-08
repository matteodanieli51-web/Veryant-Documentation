## EXEC

### General Format

```cobol
EXEC SQL [AT database]
   Sql-Statement
END-EXEC
```

Where the sql statement are:

```cobol
  ALLOCATE
  ALTER
  BEGIN
  CALL
  CLOSE
  COMMENT ON
  COMMIT
  CONNECT
  CONNECT RESET
  CREATE
  DEALLOCATE
  DECLARE
  DELETE
  DESCRIBE
  DISCONNECT
  DROP
  EXECUTE
  FETCH
  FREE
  GRANT
  INCLUDE
  INSERT
  LOCK TABLE
  OPEN
  PREPARE
  REVOKE
  ROLLBACK
  SAVEPOINT
  SELECT
  SET
  SET CONNECTION
  TRUNCATE TABLE
  UPDATE
  VALUES INTO
  VAR
  WHENEVER
```

### General Rules

1. ESQL support is built into the isCOBOL compiler. No separate pre-compiler is required to access a RDBMS using embedded SQL (i.e. EXEC SQL statements).
