## ESQL enhancements

The new 2025 R1 release improves compatibility with ESQL Precompilers, such as ProCobol and DB2prep. The embedded SQL language has been improved by adding support of SAVEPOINTs and LOB locator.

### SAVEPOINT support

A savepoint in SQL is a mechanism that allows you to set a specific point within a transaction to which you can later roll back. This feature is particularly useful for implementing partial rollbacks in case of errors or other exceptional conditions within a transaction. The below procedural code demonstrates the feature:

```cobol
        *working in autocommit-off mode
        *insert one record
           EXEC SQL
              INSERT INTO TEST_TABLE (COL_1) VALUES ('aaa')
           END-EXEC
        *define a savepoint            
           EXEC SQL
              SAVEPOINT SP1
           END-EXEC.
        *insert another record     
           EXEC SQL
              INSERT INTO TEST_TABLE (COL_1) VALUES ('bbb')
           END-EXEC
        *rollback to savepoint     
           EXEC SQL
              ROLLBACK TO SAVEPOINT SP1
           END-EXEC.
        *check table content     
           EXEC SQL
              DECLARE CUR SCROLL CURSOR FOR 
                 SELECT COL_1 FROM TEST_TABLE
           END-EXEC
           EXEC SQL
              OPEN CUR
           END-EXEC
           PERFORM UNTIL SQLCODE = 100
              EXEC SQL
                 FETCH NEXT CUR INTO :WRK-COL1
              END-EXEC
              DISPLAY WRK-COL1
           END-PERFORM
           ...
```

When running this code, the program will display only ‘aaa’ because the insertion of ‘bbb’ has been cancelled by the ROLLBACK statement, as the ROLLBACK statement will cancel all operations that occurred after the specified SAVEPOINT.

### SQL TYPE improvement

LOB (Large Objects) can now be mapped to host variables through locator variables with an IBM DB2 compliant syntax. BLOB, CLOB, and DBCLOB are data types used in databases to store large amounts of data. BLOB is used for binary data like images, audio, and video, making it ideal for multimedia files. CLOB is designed for large text documents, storing character data such as XML or JSON. DBCLOB is tailored for double-byte character data, which is common in languages like Chinese, Japanese, and Korean, making it suitable for large text data in these languages. Each type is optimized for different data formats to ensure efficient storage and retrieval.

The newly added SQL syntaxes are:

```cobol
dataitem SQL TYPE IS BLOB-LOCATOR.
dataitem SQL TYPE IS CLOB-LOCATOR.
dataitem SQL TYPE IS DBCLOB-LOCATOR.
```

The example below demonstrates how to read the content of a CLOB column using a CLOB-LOCATOR on IBM DB2:

```cobol
         WORKING-STORAGE SECTION.
         01  LOB-LOCATOR USAGE SQL TYPE IS CLOB-LOCATOR.
         01  LOB-BUFFER  PIC X(128).
         ...
         PROCEDURE DIVISION.
         ...    
             EXEC SQL
                  DECLARE C1 CURSOR FOR
                     SELECT CLOB_COLUMN INTO :LOB-LOCATOR
                            FROM LOB_TABLE WHERE LOB_ID = 1
             END-EXEC
             EXEC SQL
                  OPEN C1
             END-EXEC
             EXEC SQL
                  FETCH C1 INTO :LOB-LOCATOR
             END-EXEC
             EXEC SQL
                  SELECT :LOB-LOCATOR
                  INTO :LOB-BUFFER
                  FROM SYSIBM.SYSDUMMY1
             END-EXEC
```

Although this is DB2 compliant syntax, it can also work on other databases if they support the three kinds of large objects associated with the locator. For example, the above code can work also in Oracle after changing the SYSIBM.SYSDUMMY1 to DUAL.
