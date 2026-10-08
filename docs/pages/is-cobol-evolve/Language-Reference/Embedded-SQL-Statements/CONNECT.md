## CONNECT

The CONNECT statement allows you to connect to a database.

### Format 1

```cobol
EXEC SQL
 
  CONNECT [ TO [ { Database-Name } ] [ AS Connection-Name ] ]
                 { DEFAULT       }
 
          [ USER User-Name [ USING Password ] ]
 
END-EXEC
```

### Format 2

```cobol
EXEC SQL
 
  CONNECT  [ {  User-Name IDENTIFIED BY Password }[ AT Database ] USING Database-Name ]
            { Usr-Pwd                          }
END-EXEC
```

### Format 3

```cobol
EXEC SQL
 
  CONNECT  USING Connection-String
 
END-EXEC
```

### Syntax rules

1. *Database-Name, User-Name, Usr-Pwd, Password , DBString, Connection-Name and Connection-String* are [Nonnumeric Literal](../Preface/Definitions#nonnumeric-literal)s, as defined in the [Definitions](../Preface/Definitions) section of the Preface of this document or [Host Variables](../Embedded-SQL-ESQL/Host-variables/Host-variables).

### General rules

1. The connect statement must precede all statements that access the database.
2. In Format 1, when *Database-Name* is omitted or DEFAULT is specified, no database name is passed to the jdbc driver. If USER and USING are omitted too, then no parameter is passed to the jdbc driver, assuming that all the necessary information is provided by the [iscobol.jdbc.url](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#databasebridge-and-jdbcesql-configuration) configuration property.
3. In Format 2, when the USING phrase is omitted no database name is passed to the jdbc driver. If user and password credentials are omitted too, then no parameter is passed to the jdbc driver, assuming that all the necessary information is provided by the [iscobol.jdbc.url](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#databasebridge-and-jdbcesql-configuration) configuration property.
4. *Connection-String* should contain all the necessary information for the connection to the database, e.g. driver class and connection URL. The following formats are supported:
- DRIVER=;URL=<driver-class\>;URL=<connection-url\>
- DRIVER=<driver-class\>
- URL=<connection-url\>
- <connection-url\>

If either the driver class or the connection URL is not provided, the runtime retrieves the information from the [iscobol.jdbc.driver](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#databasebridge-and-jdbcesql-configuration) and the [iscobol.jdbc.url](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#databasebridge-and-jdbcesql-configuration) configuration properties.
5. When the AS phrase is omitted, the connection name is the same as the database name.
6. Once connected, you can retrieve the connection handle by invoking the getCurrConnection() method of the com.iscobol.rts.EsqlRuntime object. This method returns a java.sql.Connection that can be passed to other java programs. See [EsqlRuntime (com.iscobol.rts.EsqlRuntime)](\) for more information.
7. *Usr-Pwd* contains both UserName and Password separated by "/", for example "scott/tiger".
8. *Database* must be previously defined using a Format 4 [DECLARE](./DECLARE) statement.
9. If the [iscobol.jdbc.datasource](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#databasebridge-and-jdbcesql-configuration) configuration property specifies a valid class, then the connect() method of that class is invoked to gain connection. If the property is not set, then the runtime invokes the Java SQL DriverManager to gain connection. The following snippet shows a prototype of a valid class

```cobol
import java.sql.*;
import javax.sql.*;
public class myDataSource implements com.iscobol.rts.MyDataSource {
   public Connection connect (String dsn, String usr, String pwd)
                                                throws SQLException {
      Connection conn = getMyConnection(usr, pwd);
      return conn;
   }
   private Connection getMyConnection(String usr, String pwd) {
      // do the necessary operation to get the connection
   }
}
```

**Note** - The parameters *dsn*, *user* and *passwd* are the ones used in the CONNECT statement. If the program performs just CONNECT because database name and login credentials were put in the JDBC URL, then the class does not receive any parameter.

To make isCOBOL use the above class for connection, set

```cobol
iscobol.jdbc.datasource=myDataSource
```

10. *Connection-Name* can be referenced by the [SET CONNECTION](./SET-CONNECTION) statement.

### Examples

Format 1 - Connect to the ctree database

```cobol
move "ctreeSQL" to dbname
move "admin"    to userid
move "ADMIN"    to passwd
exec sql 
   connect to :dbname 
         user :userid  
        using :passwd
end-exec
```
