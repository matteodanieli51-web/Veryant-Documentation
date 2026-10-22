### getResultSet

Returns the ResultSet instance behind an ESQL cursor.

#### General format

```cobol
java.sql.Connection getResultSet (CursorName)
```

Syntax rules

1. *CurosrName* is an alphanumeric data item or string literal that specifies the name of the cursor. *CursorName* must match the name you used along with the DECLARE, OPEN, FETCH and CLOSE statements.

General rules

1. A java.sql.ResultSet object is returned. If no ResultSet exists, then null is returned.

#### Code example

```cobol
       ...
       configuration section.
       repository.
           class EsqlRuntime as "com.iscobol.rts.EsqlRuntime"
           class JResultSet as "java.sql.ResultSet"
       ...
       working-storage section.
       ...
       77 jrs object reference JResultSet.
       ...
       procedure division.
       ...
           exec sql
            declare CUR cursor for select current_date
           end-exec.
           exec sql
            open CUR
           end-exec.
           if sqlcode = 0
            set jrs to EsqlRuntime:>getResultSet("CUR")
           else
            display sqlerrmc
           end-if.
       ...
```
