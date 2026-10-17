## SQLCA

SQLCA (SQL Communications Area) is used to detect errors and status changes in your program. This structure contains components that are filled in by the database at runtime after every executable SQL statement.

To use embedded SQL statements you must include SQLCA in working-storage section using the [INCLUDE](../Embedded-SQL-Statements/INCLUDE) statement:

```cobol
...
WORKING-STORAGE SECTION.
...
EXEC SQL INCLUDE SQLCA END-EXEC
...
```

isCOBOL supports three formats of the SQLCA:

### Format 1

```cobol
01  SQLCA.
    05  SQLCAID                PIC X(8).
    05  SQLCABC                PIC S9(9) COMP-5.
    05  SQLCODE                PIC S9(9) COMP-5.
    05  SQLERRM.
        49  SQLERRML           PIC S9(4) COMP-5.
        49  SQLERRMC           PIC X(254).
    05  SQLERRP                PIC X(8).
    05  SQLERRD OCCURS 6 TIMES PIC S9(9) COMP-5.
    05  SQLWARN.
        10 SQLWARN0            PIC X(1).
        10 SQLWARN1            PIC X(1).
        10 SQLWARN2            PIC X(1).
        10 SQLWARN3            PIC X(1).
        10 SQLWARN4            PIC X(1).
        10 SQLWARN5            PIC X(1).
        10 SQLWARN6            PIC X(1).
        10 SQLWARN7            PIC X(1).
    05  SQLSTATE               PIC X(5).
    05  SQLEXT                 PIC S9(5) COMP-3 VALUE 1.
```

### Format 2

```cobol
01  SQLCA GLOBAL.
    05  SQLCAID               PIC X(8).
    05  SQLCABC               PIC S9(9) COMP-5.
    05  SQLCODE               PIC S9(9) COMP-5.
    05  SQLERRM.
        49 SQLERRML           PIC S9(4) COMP-5.
        49 SQLERRMC           PIC X(70).
    05  SQLERRP               PIC X(8).
    05  SQLERRD OCCURS 6 TIMES
                              PIC S9(9) COMP-5.
    05  SQLWARN.
        10 SQLWARN0           PIC X(1).
        10 SQLWARN1           PIC X(1).
        10 SQLWARN2           PIC X(1).
        10 SQLWARN3           PIC X(1).
        10 SQLWARN4           PIC X(1).
        10 SQLWARN5           PIC X(1).
        10 SQLWARN6           PIC X(1).
        10 SQLWARN7           PIC X(1).
    05  SQLEXT                PIC X(8).
```

### Format 3

```cobol
01 SQLCA.
   05 SQLCAID      PIC X(8).
   05 SQLCABC      PIC S9(9) BINARY.
   05 SQLCODE      PIC S9(9) BINARY.
   05 SQLERRM.
      49 SQLERRML  PIC S9(4) BINARY.
      49 SQLERRMC  PIC X(70).
   05 SQLERRP      PIC X(8).
   05 SQLERRD      OCCURS 6 TIMES
                   PIC S9(9) BINARY.
   05 SQLWARN.
      10 SQLWARN0  PIC X(1).
      10 SQLWARN1  PIC X(1).
      10 SQLWARN2  PIC X(1).
      10 SQLWARN3  PIC X(1).
      10 SQLWARN4  PIC X(1).
      10 SQLWARN5  PIC X(1).
      10 SQLWARN6  PIC X(1).
      10 SQLWARN7  PIC X(1).
      10 SQLWARN8  PIC X(1).
      10 SQLWARN9  PIC X(1).
      10 SQLWARNA  PIC X(1).
   05 SQLSTATE     PIC X(5).
```

The framework automatically chooses the proper format with the following criteria:

If the SQLCA length is 320 bytes, then Format 1 is used.

If the SQLCA length is 136 bytes, then Format 2 is used.

If the SQLCA length is 136 bytes and the [-csdb2](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) compiler option is used, then Format 3 is used.

If none of the above conditions is true, then an *Invalid SLQCA* runtime error occurs.

### SQLCA fields

| | |
| --- | --- |
| SQLCAID | Not used |
| SQLCABC | Not used |
| SQLCODE | Contains the SQL return code. <br><br>A value of zero means success, although one or more SQLWARN indicators may be set. <br><br>The value 100 means "record not found" and it’s usually returned only by [SELECT](../Embedded-SQL-Statements/SELECT) and [FETCH](../Embedded-SQL-Statements/FETCH) statements. Set the [iscobol.esql.value_sqlcode_on_no_data](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#databasebridge-and-jdbcesql-configuration) configuration property in order to have this value (or another value of your choice) returned also by other statements. <br><br>Any other value is an error condition. The error code is database dependent. |
| SQLERRML | Contains the length of sqlerrmc. 0 means that the value of sqlerrmc is not relevant. |
| SQLERRMC | Contains the description of the error condition. |
| SQLERRP | Not used |
| SQLERRD(1) | Not used |
| SQLERRD(2) | Not used |
| SQLERRD(3) | Contains the number of rows affected by the SQL statement |
| SQLERRD(4) | Not used |
| SQLERRD(5) | Not used |
| SQLERRD(6) | Not used |
| SQLWARN | A set of warning indicators, each containing a blank or W. The meaning of each indicator is database dependent. |
| SQLSTATE | SQLSTATE status codes consist of a 2-character class code immediately followed by a 3-character subclass code. Aside from class code 00 ("successful completion",) the class code denotes a category of exceptions. And, aside from subclass code 000 ("not applicable",) the subclass code denotes a specific exception within that category.<br> The meaning of codes is database dependent.<br>The runtime sets this field by invoking the getSQLState method of the Java [SQLException](https://docs.oracle.com/javase/8/docs/api/java/sql/SQLException.html) behind the error condition. |
| SQLEXT | Not used |
| | |

### Record not found / No more records

SQLCODE is set to 100 in these two conditions:

- no more records available, end of result set, on FETCH statement
- no records found on a singleton SELECT statement

SQLERRD(3) can be checked to know how many records have been added or altered after UDDATE, DELETE and INSERT.

Therefore, in order to know if the WHERE condition of an UPDATE or DELETE found some records or not, SQLERRD(3) must be checked.

### Customization through an handler class

If the [iscobol.esql.sqlca_handler \*](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#databasebridge-and-jdbcesql-configuration) configuration property specifies a valid class, then the sqlcaDecoder() method of that class is invoked to retrieve the values for SQLCODE, SQLERRMC and SQLSTATE. The runtime passes the current values of these fields along with the underlying java.sql.Exception (if any) to the class. The following snippet shows a prototype of a valid class

```cobol
import com.iscobol.types.CobolVar;
import com.iscobol.rts.EsqlSqlcaHandler;
import java.sql.SQLException;
 
public class MySqlcaHandler implements EsqlSqlcaHandler {
 
   public void sqlcaDecoder(SQLException ex, CobolVar sqlcode,
                                    CobolVar sqlstate, CobolVar sqlerrmc)
 {
      int    newCode=0;
      String newState="";
      String errorMsg="";
      // set the above 3 items as you wish (note that ex might be null)
      sqlcode.set (newCode);
      sqlstate.set(newState);
      sqlerrmc.set(errorMsg);
   }
}
```

To make isCOBOL use the above class for the setting of SQLCA fields, set

```cobol
iscobol.esql.sqlca_handler=MySqlcaHandler
```
