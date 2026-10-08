## DECLARE

The DECLARE statement associates a cursor name with a [SELECT](./SELECT) statement or a [CALL](./CALL) statement. It also allows you to define tables and database entities.

### Format 1

```cobol
EXEC SQL 
 
  DECLARE Cursor-Name [ { SENSITIVE   } SCROLL ] CURSOR 
                        { INSENSITIVE }
      [ WITH [NO] HOLD ]
      [ { WITHOUT } RETURN } ]
        { WITH    }
      [ { WITHOUT } ROWSET POSITIONING } ]
        { WITH    }
                                          FOR { Prepared-Statement }
                                              { Select-Statement   }
                                              { Call-Statement     }
 
END-EXEC
```

### Format 2

```cobol
EXEC SQL 
 
  DECLARE Prepared-Statement STATEMENT
 
END-EXEC
```

### Format 3

```cobol
EXEC SQL 
 
  DECLARE Table-Name TABLE
 
END-EXEC
```

### Format 4

```cobol
EXEC SQL
 
  DECLARE Database DATABASE
 
END-EXEC
```

### Format 5

```cobol
EXEC SQL [ AT Database ]
 
  DECLARE GLOBAL TEMPORARY TABLE Table-Name
 
END-EXEC
```

### Format 6

```cobol
EXEC SQL 
 
  DECLARE Host-Variable VARIABLE { CCSID ASCII  }
                                 { CCSID EBCDIC }
                                 { FOR BIT DATA }
 
END-EXEC
```

### Syntax rules

1. *Cursor-Name, Database, Procedure-Name and Prepared-Statement* are [Nonnumeric Literal](../Preface/Definitions#nonnumeric-literal)s, as defined in the [Definitions](../Preface/Definitions) section of the Preface of this document.
2. *Select-Statement* is a complete [SELECT](./SELECT) statement.
3. *Call-Statement* is a [CALL](./CALL) statement without the INTO clause.
4. *Host-Variable* is a [host variable](../Embedded-SQL-ESQL/Host-variables/Host-variables).
5. The Format 6 DECLARE statement is supported only under the [-csdb2](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) compiler option.

### General rules

1. The DECLARE statement must appear in the source before any other statement referencing *Cursor-Name, Prepared-Statement, Table-Name and Database*.
2. The DECLARE statement can appear in the Working-Storage Section, in the Linkage Section or in the Procedure Division.
3. The DECLARE statement doesn’t set SQLCA entries.
4. *Prepared-Statement* must be previously defined by a [PREPARE](./PREPARE) statement.
5. *Call-Statement* must not use the INTO clause. The INTO clause must be used on [OPEN](./OPEN) or [FETCH](./FETCH) of the cursor.
6. If the called stored procedure returns multiple result sets, only the first result set is processed.
7. The behavior of the WITH clause is database dependent.

a. When the NO phrase is not specified, the cursor may be closed as a consequence of a commit operation.

b. When the NO phrase is specified, the cursor is closed as a consequence of a commit operation.

8. Format 3 is supported for compatibility and is treated as commentary.
9. Format 4 defines a named connection. It should be used before a Format 2 [CONNECT](./CONNECT) statement.
10. A Format 5 DECLARE statement is treated as comment if it’s found in the Working-Storage Section. If it appears in the Procedure Division, it’s passed as is to the database.
11. *Database* identifies the active connection that will execute the query and must be previously defined using a Format 4 [DECLARE](./DECLARE) statement. By default, when the AT clause is used, the active connection is switched to the connection identified by *Database* and all the next statements will work on that connection; under the [-csora](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) option, instead, the connection is switched only for the current statement.

12. *Cursor-Name* and *Prepared-Statement* are bound to the program object instance.

A cursor or a statement declared in a standard program is available only inside the program.

In object oriented programming, a cursor or a statement declared in an Object is shared between all the methods of the Object. The same doesn’t apply to Factory; cursors and statements cannot be shared between Factory methods, they must be declared and used in the same method.

13. The SCROLL clause overrides the [iscobol.jdbc.cursor.type \*](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#databasebridge-and-jdbcesql-configuration) configuration setting.

SENSITIVE SCROLL allows the cursor to move forward and backwards through the data. Changes made while the cursor is open are immediately available. It provides a dynamic view of the underlying data to which the cursor refers.

INSENSITIVE SCROLL allows the cursor to move forward and backward through the data. Changes made while the cursor is open are ignored. It provides a static view of the underlying data to which the cursor refers.

14. WITHOUT ROWSET POSITIONING specifies that the cursor can be used only with row-positioned [FETCH](./FETCH) statements. The cursor is to return a single row for each FETCH statement and the FOR n ROWS clause cannot be specified on a [FETCH](./FETCH) statement for this cursor.
WITH ROWSET POSITIONING specifies that the cursor can be used with either row-positioned or rowset-positioned [FETCH](./FETCH) statements. This cursor can be used to return either a single row or multiple rows, as a rowset, with a single [FETCH](./FETCH) statement.
15. WITHOUT RETURN doesn’t expose the java.sql.ResultSet of the cursor to the caller program.

WITH RETURN exposes the java.sql.ResultSet of the cursor to the caller program. This feature is particularly useful to share the ResultSet with a Java caller program. The caller program must invoke the *registerResultSets* method of the com.iscobol.rts.EsqlRuntime before calling the COBOL program that uses cursors with the WITH RETURN clause. The COBOL program must just open the cursor without performing any fetch and without closing it before exiting. The following Java code snippets demonstrates the good practice:

Java caller

```cobol
import com.iscobol.java.IsCobol;
import com.iscobol.rts.EsqlRuntime;
import java.sql.ResultSet;
...
        //enable resultset collection
        IsCobol.registerResultSets();
        //call the COBOL program that uses cursors WITH RETURN
        IsCobol.call ("CBLPROG", new Object[0]);
        //retrieve the array of ResultSet object that correspond to the cursors WITH RETURN that are still open
        ResultSet[] rs = IsCobol.getResultSets();
...    
```

COBOL callee

```cobol
       PROGRAM-ID. CBLPROG.
       ...
           EXEC SQL DECLARE CUR_RET_A CURSOR WITH RETURN FOR
                SELECT C1, C2
                  INTO :WK-C1, :WK-C2
                  FROM TBL
                  WHERE C2 = 'A'
           END-EXEC.
       ... 
           EXEC SQL OPEN CUR_RET_A END-EXEC.
           GOBACK.
```

16. A Format 6 DECLARE statement defines a CCSID for a host variable and the subtype of the variable:

a. CCSID ASCII specifies that the default ASCII CCSID for the type of the variable at the server should be used.

b. CCSID EBCDIC specifies that the default EBCDIC CCSID for the type of the variable at the server should be used.

c. FOR BIT DATA specifies that the values of the host-variable are not associated with a coded character set and therefore are never converted.

### Examples

Format 1 - Declare, open and fetch a cursor

```cobol
exec sql 
   declare cust_cur  cursor for select * from customers
end-exec               
 
exec sql 
   open cust_cur
end-exec     
 
perform until 1 = 2
   exec 
      sql fetch next cust_cur into :ws-cust-code, :ws-cust-name
   end-exec
 
   display "code: " ws-cust-code " name: " ws-cust-name
   if sqlcode = 100
      exit perform
   end-if
 
end-perform
 
exec sql 
   close cust_cur
end-exec
```

Format 1 - Declare a cursor to intercept the result of a stored procedure that returns a resultset. Refer to the snippet above for information on how to read the content of the cursor

```cobol
exec sql
   declare cities cursor for call locateStores(:userState)
end-exec
```
