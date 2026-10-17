#### Oracle

Driver library:

```cobol
ojdbc<version>.jar
```

**Note** - the version in the library name is the minimum Java version required to use this library: ojdbc8.jar requires Java 1.8 or later, ojdbc11.jar requires Java 11 or later, etcetera.

Configuration settings:

```cobol
iscobol.jdbc.driver=oracle.jdbc.OracleDriver
iscobol.jdbc.url=jdbc:oracle:thin:@<ServerName>:<Port>:<Sid>
iscobol.jdbc.user=<Username>
iscobol.jdbc.password=<Password>
```

Configuration settings when using a TNS:

```cobol
iscobol.jdbc.driver=oracle.jdbc.OracleDriver
iscobol.jdbc.url=jdbc:oracle:thin:@(description=(address=(host=<ServerName>)(protocol=tcp)(port=<Port>))(connect_data=(sid=<Sid>)))
iscobol.jdbc.user=<Username>
iscobol.jdbc.password=<Password>
```

See [DatabaseBridge and JDBC/ESQL Configuration](../../Compiler-and-Runtime/Configuration/Configuration-Properties#databasebridge-and-jdbcesql-configuration) for other JDBC settings that affects the post-connection behaviors, like autocommit.
