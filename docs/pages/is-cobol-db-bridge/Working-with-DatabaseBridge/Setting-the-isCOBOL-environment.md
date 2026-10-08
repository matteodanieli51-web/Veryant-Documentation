## Setting the isCOBOL environment

In this chapter we explain how to configure the runtime system in order to work on a Oracle database with isCOBOL DatabaseBridge.

Settings in iscobol.properties configuration file:

```cobol
iscobol.file.index=easydb
iscobol.jdbc.driver=oracle.jdbc.OracleDriver
iscobol.jdbc.url=jdbc:oracle:thin:<<user>>/<<pwd>>@<<machine_name>>:<<port>>:<<sid>>
```

The last two properties refer to Oracle version 9i and may be different for other Oracle versions. Other databases have their own Driver and URL properties. Please refer to your database JDBC documentation and samples to see the correct values. You can also check the Data Access guide on [JDBC](\) for useful connection strings.
