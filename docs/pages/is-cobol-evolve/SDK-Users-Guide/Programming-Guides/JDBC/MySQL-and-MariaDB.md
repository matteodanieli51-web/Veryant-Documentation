#### MySQL and MariaDB

##### MySQL

Driver library:

```cobol
mysql-connector-java-<version>-bin.jar
```

Configuration settings:

```cobol
iscobol.jdbc.driver=com.mysql.cj.jdbc.Driver
iscobol.jdbc.url=jdbc:mysql://<ServerName>:<Port>/<DatabaseName>
iscobol.jdbc.user=<Username>
iscobol.jdbc.password=<Password>
```

##### MariaDB

Driver library:

```cobol
mariadb-java-client-<version>.jar
```

Configuration settings:

```cobol
iscobol.jdbc.driver=org.mariadb.jdbc.Driver
iscobol.jdbc.url=jdbc:mariadb://<ServerName>:<Port>/<DatabaseName>
iscobol.jdbc.user=<Username>
iscobol.jdbc.password=<Password>
```

See [DatabaseBridge and JDBC/ESQL Configuration](../../Compiler-and-Runtime/Configuration/Configuration-Properties#databasebridge-and-jdbcesql-configuration) for other JDBC settings that affects the post-connection behaviors, like autocommit.
