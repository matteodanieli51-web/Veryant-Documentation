### Storing binary data in Host Variables

After the host variable declaration, the following syntax can be used:

```cobol
EXEC SQL VAR Host-Variable IS Type END-EXEC
```

Where

- *Host-Variable* is a [host variable](./Host-variables).
- *Type* can be one of the following keywords:
  - BINARY
  - LONG RAW
  - RAW

Any other value is treated as a comment and doesn’t have effect

With this syntax a specific variable is marked as storage for binary data. The runtime is responsible to manage the variable content according to the current database specifications.

#### Code example

The content of the column t1_field_2 of type RAW in a Oracle table is shown in hex format after reading

```cobol
...
 
working-storage section.
 
...
 
exec sql include SQLCA end-exec.
77 wrk-ascii pic x(128).
exec sql var wrk-ascii is raw end-exec.
77 wrk-hex   pic x(256).
 
...
 
procedure division.
 
...
 
exec sql 
     select t1_field_2 into :wrk-ascii from table1 where t1_pk = 1 
end-exec.
call "ASCII2HEX" using wrk-ascii, wrk-hex.
display "t1_field_2 = " wrk-hex.
...
```
