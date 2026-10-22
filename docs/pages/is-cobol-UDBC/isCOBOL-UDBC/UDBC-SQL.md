## UDBC SQL Server Engine

The UDBC Server is responsible for managing connections from SQL clients and communicating with the isCOBOL File Server in order to access data files. The UDBC Server retrieve necessary information from the [Database Configuration](./db-configuration).

To start the UDBC Server on Windows select:

```cobol
Start -> Programs -> isCOBOL UDBC 2025R2 -> UDBC Server
```

![](images/UDBCserver.png)

To start the UDBC Server on Linux/Unix, run:

```cobol
$VUDBC_HOME/bin/vudbcserver
```
