#### IBM DB2

Driver library:

```cobol
db2jcc4.jar
```

Configuration settings:

```cobol
iscoblol.jdbc.driver=com.ibm.db2.jcc.DB2Driver
iscobol.jdbc.url=jdbc:db2://<ServerName>:<Port>/<DataBaseName>;
iscobol.jdbc.user=<Username>
iscobol.jdbc.password=<Password>
```

See [DatabaseBridge and JDBC/ESQL Configuration](../../Compiler-and-Runtime/Configuration/Configuration-Properties#databasebridge-and-jdbcesql-configuration) for other JDBC settings that affects the post-connection behaviors, like autocommit.
