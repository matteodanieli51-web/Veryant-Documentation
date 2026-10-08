#### Microsoft Sql Server

Driver library:

```cobol
mssql-jdbc-<version>.jar
```

Configuration settings:

```cobol
iscobol.jdbc.driver=com.microsoft.sqlserver.jdbc.SQLServerDriver
iscobol.jdbc.url=jdbc:sqlserver://<ServerName>:<Port>;encrypt=false;DatabaseName=<DatabaseName>
iscobol.jdbc.user=<Username>
iscobol.jdbc.password=<Password>
```

**Note** - A third party pure java JDBC driver is also available for Microsoft Sql Server. Its name is JTDS and it can be found at the following website: [http://jtds.sourceforge.net](http://jtds.sourceforge.net).

Driver library:

```cobol
jtds-<version>.jar
```

Configuration settings:

```cobol
iscobol.jdbc.driver=net.sourceforge.jtds.jdbc.Driver
iscobol.jdbc.url=jdbc:jtds:sqlserver://<ServerName>:<Port>/<DatabaseName>
iscobol.jdbc.user=<Username>
iscobol.jdbc.password=<Password>
```

See [DatabaseBridge and JDBC/ESQL Configuration](../../Compiler-and-Runtime/Configuration/Configuration-Properties#databasebridge-and-jdbcesql-configuration) for other JDBC settings that affects the post-connection behaviors, like autocommit.
