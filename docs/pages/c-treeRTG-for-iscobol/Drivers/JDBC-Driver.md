## JDBC Driver

The JDBC Driver is installed on Windows machines along with c-tree if the proper option is checked. See the [Installing on Windows](../Installing-c-tree/Installing-on-Windows) chapter for details.

On other platforms the driver library is installed under drivers/sql.jdbc in the c-tree directory.

The driver library is named “ctreeJDBC.jar” and must be available in the Java Classpath.

The following code snippet shows how to connect to c-tree SQL from a Java program:

```ini
Class.forName ("ctree.jdbc.ctreeDriver");
Connection conn = DriverManager.getConnection ("jdbc:ctree:6597@localhost:ctreeSQL", "ADMIN", "ADMIN");
```

Consult Faircom’s documentation for additional information.
