## ESQL$BLOB

The ESQL$BLOB library routine provides a number of functions to handle BLOB data in ESQL programs.

### Syntax:

```cobol
 CALL "ESQL$BLOB" USING opCode
                        parameters
                 GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *opCode* | It is the function to be executed. Valid values, defined in [iscobol.def](../../Copybooks/iscobol.def), are: |  |
|  | [GET-BLOB-FROM-FILE](./GET-BLOB-FROM-FILE) | Read BLOB data from a file on disc. |
|  | [PUT-BLOB-INTO-FILE](./PUT-BLOB-INTO-FILE) | Write the content of a BLOB into a file on disc. |
|  | [FREE-BLOB-HANDLE](./FREE-BLOB-HANDLE) | Free memory initializing the BLOB handle. |
| *parameters* | Parameters depend on the opcode. |  |

### Return code:

*returnCode* definition and meaning depend on the opcode.

### Examples:

**Example -** The following program creates a test table and stores the file *img1.bmp* inside it as a blob. After it, the program reads the previously inserted record and writes the blob to a file named *blob.bmp*.

```cobol
       PROGRAM-ID. readwriteblob.

       WORKING-STORAGE SECTION.
       copy "SQLCA".
       copy "iscobol.def".

       01 W-REC.
        03 W-KEY   pic 9(4).
        03 W-DATA  pic x(30).
        03 W-BLOB  HANDLE.

       PROCEDURE DIVISION.
       Main.
           EXEC SQL
                CONNECT
           END-EXEC

           EXEC SQL
                DROP TABLE IS_TABLE
           END-EXEC

           EXEC SQL
                CREATE TABLE IS_TABLE
                      (IS_KEY INT NOT NULL PRIMARY KEY,
                       IS_DATA CHAR(6),
                       IS_BLOB BLOB)
           END-EXEC

           CALL "ESQL$BLOB" USING GET-BLOB-FROM-FILE, W-BLOB,"img1.bmp".

           EXEC SQL INSERT INTO IS_TABLE VALUES (1, 'row1',
                                                 :W-BLOB)
           END-EXEC

           CALL "ESQL$BLOB" USING FREE-BLOB-HANDLE, W-BLOB.

           EXEC SQL
                SELECT * INTO :W-KEY, :W-DATA, :W-BLOB
                             FROM IS_TABLE
                             WHERE IS_KEY = 1
           END-EXEC

           CALL "ESQL$BLOB" USING PUT-BLOB-INTO-FILE, W-BLOB, "blob.bmp".

           EXEC SQL
                DISCONNECT
           END-EXEC

           GOBACK.
```
