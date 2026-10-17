## Improved compatibility

IsCOBOL 2026 R1 has been enhanced to improve compatibility with other COBOL dialects, such as MicroFocus COBOL and IBM COBOL. The compiler has been improved with new functions and ESQL statements.

### Compatibility with other COBOLs

The ALLOCATE and FREE statements are supported to manage dynamic memory allocation and are also part of the latest ANSI 2023 standard. The allocated storage persists until explicitly released with a FREE statement, or when the run unit is terminated.

The following snippet of code shows how to use the new syntax to allocate and then free 1 KB of memory:

```cobol
       WORKING-STORAGE SECTION.
       77  ptr     pointer.
       LINKAGE SECTION.
       01  lkitem  pic x(1024).
           ...
           allocate lkitem initialized returning ptr
           ...
           free ptr
```

In the variable declarations, new clauses are now supported:

- the USAGE DISPLAY-1 in PIC N defines an item as DBCS instead of Unicode UTF-16
- the USAGE NATIONAL clause in numeric and edited data items defines fields in UTF-16 like the standard PIC N
- the E usage clause defines External Floating-Point Data Type (EFP)

This is a code snippet that uses the new syntax:

```cobol
       05  ws-nat         pic n(5)         usage national.
       05  ws-dbcs        pic n(5)         usage display-1.
       05  ws-num         pic 9(3)         usage national.
       05  ws-edit        pic z.zz9        usage national.
       05  ws-float       pic -9v9(9)E-99.
       05  ws-float-unic  pic +9v9(9)E+99  usage national.
```

A new intrinsic function named UID4 has been introduced. It returns a 36‑character alphanumeric string representing a version 4 Universally Unique Identifier (UUID).

For example, the following code:

```cobol
          77  ws-uuid  pic x(36).
          ...
          move function UUID4() to ws-uuid
```

will set the variable named ws-uuid to a string like “2eef112d-1f9b-408e-8c2a-22605e4d9e4d”.

### Compatibility with ESQL statements

The COMMENT ON statement adds a descriptive text to a database object (such as a table, column, view, or other schema element) and stores it in the system catalog for documentation and metadata purposes. Not all DBMS systems support comments, and those that do may require different syntaxes. The isCOBOL compiler does not perform a deep check on the syntax; it assumes that the developer used the format suitable for the targeted DBMS, generating a runtime error if not.

The snippet below shows how to add a comment on a table column in PostgreSQL:

```cobol
          EXEC SQL
             COMMENT ON COLUMN my_table.my_column 
                     IS 'Employee ID number'
          END-EXEC.
```

This other snippet shows how to add a comment on multiple columns at once on IBM DB2:

```cobol
          EXEC SQL
             COMMENT ON DSN8C10.DEPT
                (MGRNO IS 
                 'EMPLOYEE NUMBER OF DEPARTMENT MANAGER',
                 ADMRDEPT IS 
                 'DEPARTMENT NUMBER OF ADMINISTERING DEPARTMENT');
          END-EXEC.
```
