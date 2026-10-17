## Host Variables

Host variables allow the host program and the database to communicate. A host variable is any COBOL variable or constant, declared in file, working-storage or linkage section.

A host variable reference must be prefixed with a colon ":" in SQL statements.

### Code example

The content of column1 is sotred in the host variable named item1.

```cobol
...
 
working-storage section.
 
...
 
exec sql include SQLCA end-exec.
77 item1 pic 9(3).
...
 
procedure division.
 
...
 
exec sql select column1 into :item1 from table1 where column1 = 1 end-exec.
...
```

**Note**: alphanumeric data items with picture X(n) are internally translated to their unicode representation according to the current locale when they’re used as host variables. This rule may cause unexpected data translation if the content of the data item is a non representable character.
