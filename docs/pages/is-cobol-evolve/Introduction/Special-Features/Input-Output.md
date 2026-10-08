## I/O

isCOBOL offers some additional features for I/O on files and databases. With isCOBOL, programmers can take advantage of:

- Native support for embedded SQL syntax; no precompilers are needed.

```cobol
EXEC SQL
   SELECT COUNT (*) INTO :rec-count FROM TABLE1
END-EXEC.
```

- National items are supported; data is stored using UTF-16 Big Endian encoding.

```cobol
77 MY-VAR PIC N(10).
```

- The ability to interact with databases while maintaining standard COBOL statements (see [isCOBOL Evolve: DatabaseBridge](./pagina_in_creazione) for details).

- The ability to associate sequential files with the standard input, output and error.

```cobol
SELECT stdin ASSIGN TO "-S IN"
    ORGANIZATION LINE SEQUENTIAL.
 
SELECT stdout ASSIGN TO "-S OUT"
    ORGANIZATION LINE SEQUENTIAL.
 
SELECT stderr ASSIGN TO "-S ERR"
    ORGANIZATION LINE SEQUENTIAL.
```

- The ability to create PDFs or previews of print files.

```cobol
SELECT pdf-file ASSIGN TO PRINT "-P PDF /usr/docs/print.pdf"
    ORGANIZATION LINE SEQUENTIAL.
 
SELECT ptr-prev ASSIGN TO PRINT "-P PREVIEW"
    ORGANIZATION LINE SEQUENTIAL.
```
