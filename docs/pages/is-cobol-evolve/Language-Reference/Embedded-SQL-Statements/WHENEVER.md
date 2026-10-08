## WHENEVER

The WHENEVER statement allows the handling of error and exception conditions.

### General format

```cobol
EXEC SQL
 
  WHENEVER { SQLERROR   } [ DO ] { GO TO Host-Label  }
           { SQLWARNING }        { CALL Host-Label   }
           { NOT FOUND  }        { PERFORM Host-Label}
                                 { CONTINUE          }
 
END-EXEC
```

### Syntax rules

1. *Host-Label* is a [User-defined word](../Preface/Definitions#user-defined-word), as defined in the [Definitions](../Preface/Definitions) section of the Preface of this document.

### General rules

1. When SQLERROR is specified, the specified action is performed when the SQL statement generates an error.
2. When SQLWARNING is specified, the specified action is performed when the SQL statement generates a warning.
3. When NOT FOUND is specified, the specified action is performed when the SQL statement affects no rows.
4. When GO TO is specified, the control is transferred to the COBOL paragraph or section identified by *Host-Label*.
5. When CONTINUE is specified, the program continues to the next statement. If a fatal error occurs, an error condition is generated and the program aborts.

### Examples

Set the general SQL error procedure

```cobol
main.
   exec sql
        whenever sqlerror do perform test-sql-status
   end-exec
   ...
 
test-sql-status.
   if sqlcode not = 0
      display message sqlcode   x"0d0a"
                      sqlerrmc                            
                      title "SQL Error"
      exec sql disconnect all end-exec
      goback
   end-if
   .
```
