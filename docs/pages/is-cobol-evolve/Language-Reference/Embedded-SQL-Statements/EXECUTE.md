## EXECUTE

The EXECUTE statement executes a SQL statement.

### Format 1

```cobol
EXEC SQL [ AT Database ]
 
  [ FOR Iterations ]
 
  EXECUTE Prepared-Statement [ USING Host-Variable, ... ] [ INTO Host-Variable, ... ]
 
END-EXEC
```

### Format 2

```cobol
EXEC SQL [ AT Database ]
 
  [ FOR Iterations ]
 
  EXECUTE IMMEDIATE Statement [ USING Host-Variable, ... ] [ INTO Host-Variable, ... ]
 
END-EXEC
```

### Format 3

```cobol
EXEC SQL [ AT Database ]
 
  EXECUTE  {BEGIN   }   [Plsql]
           {DECLARE }
 
END-EXEC
```

### Format 4

```cobol
EXEC SQL [ AT Database ]
 
  EXECUTE Prepared-Statement [ { USING DESCRIPTOR } Sql-Descriptor ]
{ INTO DESCRIPTOR  }
END-EXEC
```

### Syntax rules

1. *Iterations* can be either a host variable or a numeric literal. It specifies the number of rows to be processed.
2. *Prepared-Statement* is a [Nonnumeric Literal](../Preface/Definitions#nonnumeric-literal), as defined in the [Definitions](../Preface/Definitions) section of the Preface of this document.
3. *Host-Variable* is a [host variable](../Embedded-SQL-ESQL/Host-variables/Host-variables).
4. *Statement* can be a [host variable](../Embedded-SQL-ESQL/Host-variables/Host-variables) or a [Nonnumeric Literal](../Preface/Definitions#nonnumeric-literal) containing a complete SQL Statement.
5. *Plsql* is a [Nonnumeric Literal](../Preface/Definitions#nonnumeric-literal) containing a PL/SQL code.
6. *Sql-Descriptor* is a [SQLDA](../Embedded-SQL-ESQL/SQLDA/SQLDA) structure. This syntax is compiled only under the [-csdb2](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options) option.

### General rules

1. *Database* identifies the active connection that will execute the query and must be previously defined using a Format 4 [DECLARE](./DECLARE) statement. By default, when the AT clause is used, the active connection is switched to the connection identified by *Database* and all the next statements will work on that connection; under the [-csora](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options) option, instead, the connection is switched only for the current statement.
2. *Prepared-Statement* must be previously defined by a [PREPARE](./PREPARE) statement.
3. The FOR clause limits the number of times the statement is executed when the USING clause contains array host variables If you omit this clause,it executes the statement once for each component of the smallest array.
4. The isCOBOL compiler does not analyze PL/SQL language. It only manages the host variables.

The host variables management is conditioned by the [HOSTVAR Directive](../SQL-Directives/HOSTVAR-Directive), the [iscobol.compiler.esql.procedure.ProcedureName](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#databasebridge-and-jdbcesql-configuration) configuration property and the [iscobol.esql.default_param_type](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#databasebridge-and-jdbcesql-configuration) configuration property.

5. If the [iscobol.esql.prepare_handler \*](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#esql_prepare_handler) configuration property specifies a valid class, then the queryDecoder() method of that class is invoked to confirm or alter the statement. The runtime will then execute the new statement returned by that method. The following snippet shows a prototype of a valid class

```cobol
import com.iscobol.types.CobolVar;
import com.iscobol.rts.EsqlPrepareHandler;
 
public class MyQueryHandler implements EsqlPrepareHandler {
 
   public void queryDecoder(CobolVar query) {
      String newQuery = query.toString();
      // alter the newQuery string as you wish
       query.set(newQuery);
   }
}
```

To make isCOBOL use the above class for every EXECUTE, set

```cobol
iscobol.esql.prepare_handler=MyQueryHandler
```

### Examples

Format 1 - Execute a prepared statement to count records that meet a criteria

```cobol
*> count_recs does not need to be defined prior to
*> their use in the prepare statement
*> min-key and the-count could be pic 9(4) each
 
exec sql
     prepare count_recs from 
        "select count(*) from cust_table where cust_code > ?"
end-exec
move 1990 to min-key
exec sql
     execute count_recs using :min-key 
             into :the-count
end-exec
 
display "Count of records with key > " min-key " : " the-count
```

Format 2 - Execute inmmediate a statement to count records that meet a criteria

```cobol
move 1990 to min-key
exec sql
     execute immediate 
             "select count(*) from cust_table where cust_code > ?"
             using :min-key 
             into :the-count
end-exec
 
display "Count of records with key > " min-key " : " the-count
```

Format 3 - To be used with Oracle Databases only using PL/SQL

```cobol
exec sql
  execute
     DECLARE
        bonus REAL;
     BEGIN
        FOR emp_rec IN (SELECT empno, sal, comm FROM emp) LOOP
           bonus := (emp_rec.sal * 0.05) + (emp_rec.comm * 0.25);
           INSERT INTO bonuses VALUES (emp_rec.empno, bonus);
        END LOOP;
        COMMIT;
     END;
end-exec
```
