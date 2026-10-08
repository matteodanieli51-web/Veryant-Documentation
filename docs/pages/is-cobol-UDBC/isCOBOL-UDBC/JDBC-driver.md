## JDBC Driver for UDBC SQL Server

isCOBOL UDBC is provided with a JDBC driver included in the library *vjdbc.jar*.

The library must be added to the Java Class Path along with the isCOBOL runtime library (*iscobol.jar*).

The following snippet shows how to connect to a UDBC database through JDBC. The code allows you to connect to a database called "VERYSAMPLE" on the localhost on the default port with user "admin" and password "admin":

```cobol
Class.forName ("com.veryant.jdbc.VerySQLDriver");
Connection conn = DriverManager.getConnection ("jdbc:veryant:127.0.0.1:6789:VERYSAMPLE", "admin", "admin");
```

The [VISQL](./VISQL) utility accesses isCOBOL UDBC via JDBC.
