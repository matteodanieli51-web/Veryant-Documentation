#### PostgreSQL

Driver library:

```cobol
postgresql-<version>.jar
```

Configuration settings:

```cobol
iscobol.jdbc.driver=org.postgresql.Driver
iscobol.jdbc.url=jdbc:postgresql://<ServerName>:<Port>/<DatabaseName>
iscobol.jdbc.user=<Username>
iscobol.jdbc.password=<Password>
```

See [DatabaseBridge and JDBC/ESQL Configuration](../../Compiler-and-Runtime/Configuration/Configuration-Properties#databasebridge-and-jdbcesql-configuration) for other JDBC settings that affects the post-connection behaviors, like autocommit.
