## VAR

The VAR statement allows you to mark a host variable as storage for binary data.

### General format

```cobol
EXEC SQL
 
  VAR Host-Variable IS { BINARY   }
                       { LONG RAW }
                       { RAW      }
 
END-EXEC
```

### Syntax rules

1. *Host-Variable* is a [host variable](../Embedded-SQL-ESQL/Host-variables/Host-variables).
2. BINARY, LONG RAW and RAW are synonymous.
3. Any value other than BINARY, LONG RAW and RAW is treated as a comment and doesn’t have any effect.

### General rules

1. The VAR statement must appear in the source after the definition of *Host-Variable*.

### Examples

Mark the wrk-ascii data item as RAW:

```cobol
working-storage section.
...
77 wrk-ascii pic x(128).
exec sql var wrk-ascii is raw end-exec.
```
