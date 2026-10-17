### Mapping Large Objects

### isCOBOL proprietary syntax

Database large object (LOB) fields can be managed as follows:

For BLOB fields, use the [ESQL$BLOB](\) library routine.

For CLOB fields, use an host variable with picture X ANY LENGTH if the CLOB length is unknown or use an host variable with picture X(n) where n matches the length in bytes of the CLOB column.

#### Example.

```cobol
       PROGRAM-ID. readwritelob.
 
       WORKING-STORAGE SECTION.
       copy "SQLCA".
       copy "iscobol.def".
 
       77 W-KEY   pic 9(4).
       77 W-DATA  pic x(30).
       77 W-CLOB  pic x any length.
       77 W-BLOB  HANDLE.
 
       PROCEDURE DIVISION.
       Main.
           CALL "ESQL$BLOB" USING GET-BLOB-FROM-FILE, W-BLOB,"img1.bmp".
 
           EXEC SQL
                CONNECT
           END-EXEC
 
           EXEC SQL 
                DROP TABLE IS_TABLE
           END-EXEC
 
           EXEC SQL
                CREATE TABLE IS_TABLE
                             (IS_KEY INT NOT NULL,
                              IS_DATA CHAR(6),
                              IS_CLOB CLOB,
                              IS_BLOB BLOB)
           END-EXEC
 
           EXEC SQL
                ALTER TABLE IS_TABLE ADD PRIMARY KEY (IS_KEY)
           END-EXEC
 
           MOVE "CLOB data" TO W-CLOB.
 
           EXEC SQL INSERT INTO IS_TABLE VALUES (1, 'row1',
                                                 :W-CLOB,
                                                 :W-BLOB)
           END-EXEC
 
           CALL "ESQL$BLOB" USING FREE-BLOB-HANDLE, W-BLOB.
 
           EXEC SQL
                SELECT * INTO :W-KEY, :W-DATA, :W-CLOB, :W-BLOB
                             FROM IS_TABLE
                             WHERE IS_KEY = 1
           END-EXEC
 
           CALL "ESQL$BLOB" USING PUT-BLOB-INTO-FILE, W-BLOB, "blob.bmp".
 
           EXEC SQL
                DISCONNECT
           END-EXEC
 
           GOBACK.
```

### IBM DB2 compatible syntax

Database large object (LOB) fields can be mapped to a COBOL data item with a SQL TYPE [USAGE clause](../../Data-Division/Data-Description/USAGE-clause):

```cobol
01 variable-name USAGE IS SQL TYPE IS { BLOB   } ( length {K} ).
                                      { CLOB   }          {M}
                                      { DBCLOB }          {G}

```

For BLOB and CLOB, length must be between 1 and 2,147,483,647.

For DBCLOB, length must be between 1 and 1,073,741,823.

SQL TYPE IS, BLOB, CLOB, DBCLOB, K, M, G can be in either uppercase, lowercase, or mixed.

Initialization within the LOB declaration is not permitted.

The host variable name prefixes LENGTH and DATA in the precompiler generated code.

#### BLOB Example:

Declaring:

```cobol
01 MY-BLOB USAGE IS SQL TYPE IS BLOB(2M).
```

Results in the generation of the following structure:

```cobol
01 MY-BLOB. 
   49 MY-BLOB-LENGTH PIC S9(9) COMP-5. 
   49 MY-BLOB-DATA PIC X(2097152).
```

#### CLOB Example:

Declaring:

```cobol
01 MY-CLOB USAGE IS SQL TYPE IS CLOB(125M). 
```

Results in the generation of the following structure:

```cobol
01 MY-CLOB. 
  49 MY-CLOB-LENGTH PIC S9(9) COMP-5. 
  49 MY-CLOB-DATA PIC X(131072000).
```

#### DBCLOB Example:

Declaring:

```cobol
01 MY-DBCLOB USAGE IS SQL TYPE IS DBCLOB(30000). 
```

Results in the generation of the following structure:

```cobol
01 MY-DBCLOB. 
   49 MY-DBCLOB-LENGTH PIC S9(9) COMP-5. 
   49 MY-DBCLOB-DATA PIC G(30000) DISPLAY-1.
```

### IBM DB2 compatible syntax with locators

Database large object (LOB) fields can be mapped to a COBOL data item with a SQL TYPE [USAGE clause](../../Data-Division/Data-Description/USAGE-clause):

```cobol
01 variable-name USAGE IS SQL TYPE IS { BLOB-LOCATOR   }
                                      { CLOB-LOCATOR   }
                                      { DBCLOB-LOCATOR }
```

LOB locators are pointers to the large object resource. You can bind them either during the [OPEN](../../Embedded-SQL-Statements/OPEN) of the cursor or during [FETCH](../../Embedded-SQL-Statements/FETCH), e.g.:

```cobol
       77 CLOB-LOC USAGE SQL TYPE CLOB-LOCATOR.
       ...
           EXEC SQL
             DECLARE CUR CURSOR FOR 
                SELECT CLOB_COLUMN FROM LOB_TABLE
           END-EXEC.
           EXEC SQL
              OPEN CUR INTO :CLOB-LOC
           END-EXEC.
```

Then you can retrieve the LOB data by setting an alphanumeric host variable to the locator using the [SET](../../Embedded-SQL-Statements/SET) statement, e.g.

```cobol
       77 HOST-VAR PIC X(128).
       77 CLOB-LOC USAGE SQL TYPE CLOB-LOCATOR.
       ...
           EXEC SQL 
             SET :HOST-VAR = :LOCATOR-VAR
           END-EXEC.
```

**Note** - Data can be retrieved also with one of these queries on DB2

```cobol
      *using the VALUES statement
           EXEC SQL 
              VALUES (:LOCATOR-VAR) INTO :HOST-VAR 
           END-EXEC.
      *using SELECT from the SYSDUMMY1 catalog
           EXEC SQL
              SELECT :LOCATOR-VAR INTO :HOST-VAR
                FROM SYSIMB.SYSDUMMY1 
           END-EXEC.
```

Although the SQL TYPE syntax is supported in compatibility with the IBM DB2 preprocessor, it can potentially work on every database as long as the LOB data type specified by the SQL TYPE clause is supported by the database.
