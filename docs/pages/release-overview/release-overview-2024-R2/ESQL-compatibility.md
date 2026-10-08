## ESQL compatibility

isCOBOL 2024 R2 contains many enhancements in ESQL. It’s now possible to use group data items as parameter of an IN clause. In addition, the compatibility with the IBM DB2 syntax when compiling using the -csdb2 compiler option has been improved with the support of VALUES INTO and DECLARE VARIABLE statements.

When executing the sql statement

```cobol
       EXEC SQL
          SELECT field-list FROM table-name 
           WHERE field IN (value1, value2, ..., valueN)
       END-EXEC
```

in versions up to 2024 R1, you had to use separate host variables for value1, value2 and valueN, e.g.

```cobol
       01 wk-value1 pic x(n).
       01 wk-value2 pic x(n).
       01 wk-value3 pic x(n).
```

Starting from the 2024 R2 release a single group host variable can be used instead:

```cobol
       01 wk-values.
          03 wk-value1 pic x(n).
          03 wk-value2 pic x(n).
          03 wk-value3 pic x(n).
```

The sub items will be used to set value1 to valueN.

The VALUES INTO statement produces a result table consisting of at most one row and assigns the values of columns in that row to host variables. For example:

```cobol
       EXEC SQL 
          VALUES(CURRENT PATH) INTO :hvl
       END-EXEC.
```

This statement is supported when using the -csdb2 compiler option and is internally translated to:

```cobol
       EXEC SQL 
          SELECT CURRENT PATH INTO :hvl FROM SYSIBM.SYSDUMMY1
       END-EXEC.
```

The DECLARE VARIABLE statement defines a CCSID for a host variable and the subtype of the variable. When it appears in an application program, the DECLARE VARIABLE statement causes the compiler to tag a host variable with a specific CCSID. When the host variable appears in an SQL statement, the compiler places this CCSID in the structures that it generates for the SQL statement.

Some examples

```cobol
       EXEC SQL
          DECLARE :W1AX-FG-NR-EBC VARIABLE CCSID EBCDIC
       END-EXEC.
```

specifies that the default EBCDIC CCSID for the type of the variable at the server should be used.

```cobol
       EXEC SQL
          DECLARE :W1AX-FG-NR-ASC VARIABLE CCSID ASCII
       END-EXEC.
```

specifies that the default ASCII CCSID for the type of the variable at the server should be used.

```cobol
       EXEC SQL
          DECLARE :W1AX-FG-NR-BIT VARIABLE FOR BIT DATA
       END-EXEC.
```

specifies that the values of the host-variable are not associated with a coded character set and therefore are never converted.
