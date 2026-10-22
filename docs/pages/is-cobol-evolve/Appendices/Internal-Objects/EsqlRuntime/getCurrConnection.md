### getCurrConnection

Returns the Connection instance of the current JDBC connection.

#### General format

```cobol
java.sql.Connection getCurrConnection ()
```

General rules

1. A java.sql.Connection object is returned. If no connection exists, then null is returned.

#### Code example

```cobol
       ...
       configuration section.
       repository.
           class EsqlRuntime as "com.iscobol.rts.EsqlRuntime"
           class JSQLConnection as "java.sql.Connection"
       ...
       working-storage section.
       ...
       77 jcon object reference JSQLConnection.
       ...
       procedure division.
       ...
           exec sql
            connect
           end-exec.
           if sqlcode = 0
            set jcon to EsqlRuntime:>getCurrConnection()
           else
            display "Connection error: " sqlcode
            display sqlerrmc
           end-if.
       ...
```
