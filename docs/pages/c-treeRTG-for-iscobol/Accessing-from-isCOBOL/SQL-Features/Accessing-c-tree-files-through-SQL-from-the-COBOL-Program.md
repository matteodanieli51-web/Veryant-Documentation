### Accessing c-tree files through SQL from the COBOL Program

The COBOL programs can access c-tree SQL database in two ways.

- Using standard COBOL i-o statements.

This is the same approach used for the standard isCOBOL ISAM Server. The following configuration property must be set:

```cobol
iscobol.file.index=ctreej
```

- Using Embedded SQL.

For this approach Veryant suggests that you use the official JDBC driver installed along with c-tree.

The *ctreeJDBC.jar* library must appear in the CLASSPATH and the following settings are necessary in the configuration:

```cobol
iscobol.jdbc.driver=ctree.jdbc.ctreeDriver
iscobol.jdbc.url=jdbc:ctree:6597@localhost:
```

Where *localhost* and *6597* are ip-address and port on which the SQL Server is listening.

Then, from the COBOL program:

```cobol
exec sql connect to 'ctreeSQL' user 'admin' using 'ADMIN' end-exec.
```

Where *ctreeSQL* is the name of the database and *admin/ADMIN* are user and password.
