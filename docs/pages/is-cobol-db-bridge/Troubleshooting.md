# Troubleshooting

DatabaseBridge converts SQL errors to COBOL file status where applicable. For those errors that don’t correspond to any known COBOL file status, a 9D file status is returned. The extended information returned along with the status 9D provides error description.

It’s possible to know which SQL query has been used by DatabaseBridge along with the exit status by tracing the Framework SQL activity. This kind of trace is obtained by adding 256 to the value of [iscobol.tracelevel](\).

The following configuration, for example, traces environment settings, programs life cycle, i/o and SQL in a file named iscobol.log under /tmp.

```cobol
iscobol.logfile=/tmp/iscobol.log
iscobol.tracelevel=267
```

## File mismatch

A file status 39 with DatabaseBridge means that there’s a mismatch between the file description in the COBOL program and the logical-info stored in the EDBI routine.

The compiler saves the record size and the number of keys in the EDBI routine code. This information is then checked at runtime against the file description in the program when the file is opened. If a mismatch is found, the file status 39 is returned.

No check is performed against the table in the database. If the table has fewer columns or indexes a 9D error will be returned. The error message is the one returned by the JDBC driver (i.e. "invalid column name").
