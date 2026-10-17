# Working with multiple connections

By default, DatabaseBridge works on the connection identified by the [iscobol.jdbc.driver](\) and [iscobol.jdbc.url](\) configuration properties, however it’s possible to define multiple connections and associate the COBOL files with them.

In order to define multiple connections in the isCOBOL configuration, the following syntax must be used:

```cobol
iscobol.jdbc.driver.<connection_name>
iscobol.jdbc.url.<connection_name>
iscobol.easydb.prefix.<connection_name>
```

**Note** - *iscobol.easydb.prefix* should be set only if you generated the subroutines as described in [EDBI Generation at compile time (one step)](./Working-with-DatabaseBridge/Generating-EDBI-users-routines/EDBI-Generation-at-compile-time).

The above syntax must be repeated for each connection you wish to define varying connection_name. Different connections can be

- on the same database
- on different databases of the same family (e.g. Oracle)
- on different databases of different families (e.g. Oracle and MySQL)

Once there are some connections defined in the configuration, you can associate single files with them with the following syntax:

```cobol
iscobol.easydb.connection_name.<physical_file_name>=<connection_name>
```

Files that are not explicitly associated with a connection will use the default connection identified by the [iscobol.jdbc.driver](\) and [iscobol.jdbc.url](\) settings.

## Example:

```cobol
iscobol.jdbc.driver=com.mysql.jdbc.Driver
iscobol.jdbc.url=jdbc.mysql://localhost:3306/msqldb?user=scott&password=tiger
iscobol.easydb.prefix=mys
 
iscobol.jdbc.driver.conn_ora=oracle.jdbc.OracleDriver
iscobol.jdbc.url.conn_ora=jdbc:oracle:thin:scott/tiger@localhost:1521:orcl
iscobol.easydb.prefix.conn_ora=ora
 
iscobol.jdbc.driver.conn_post=org.postgresql.Driver
iscobol.jdbc.url.conn_post=jdbc:postgresql:pgdb:scott/tiger@localhost:1522:
iscobol.easydb.prefix.conn_post=pgs
 
iscobol.easydb.connection_name.file1=conn_post
iscobol.easydb.connection_name.file2=conn_ora
```

Using the above settings, FILE1 is handled on PostgreSQL and FILE2 is handled on Oracle, while any other file is handled on MySQL.
