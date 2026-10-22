## isCOBOL Database Bridge

isCOBOL Database Bridge is the tool that enables COBOL programs to interact with RDBMs without changing COBOL source code or learning ESQL. It has been enhanced to support a new relational database: DBMaker.

DBMaker is a powerful and flexible SQL Database Management System (RDBMS) that supports an interactive Structured Query Language (SQL), a Microsoft Open Database Connectivity (ODBC) compatible interface, and Embedded SQL for C (ESQL/C). DBMaker also supports a Java Database Connectivity compliant interface and DBMaker COBOL interface (DCI). The unique open architecture and native ODBC interface give you the freedom to build custom applications using a wide variety of programming tools or to query databases using existing ODBC-compliant applications. DBMaker is easily scalable from personal single-user databases to distributed enterprise-wide databases. The advanced security, integrity, and reliability features of DBMaker ensure the safety of critical data. Extensive cross-platform support permits you to leverage existing hardware, allows for expansion and upgrades to more powerful hardware as your needs grow. DBMaker provides excellent multimedia handling capabilities to store, search, retrieve, and manipulate all types of multimedia data. Binary Large Objects (BLOBs) ensure the integrity of multimedia data by taking full advantage of the advanced security and crash recovery mechanisms included in DBMaker. File Objects (FOs) manage multimedia data while maintaining the capability to edit individual files in the source application.

isCOBOL already supported the DCI interface to access DBMaker’s tables using statements like OPEN, READ, WRITE, using two configurations:

- *iscobol.file.index=dci* to use the DCI C client library in the same Java process. This is typically used in standalone processes

and

- *iscobol.file.index=dcic* to use the DCI C client library in a separated process that is called DCI connector. This is typically used in multithread environments like isCOBOL Server with multiple ThinClient or WebClient connections.

The isCOBOL Database Bridge now supports the DBMaker’s JDBC driver, making it a better choice when deploying in environments such as Tomcat or Java Servlet containers, where a 100% Java access is preferable.

To generate EDBI routines for DBMaker, use the following Compiler configuration:

```cobol
iscobol.compiler.easydb=1
iscobol.compiler.easydb.dbmaker=1
```

Routines for DBMaker have the dbm prefix in their name; for example, having a file whose physical name (or EFD FILE directive value) is "articles", the Compiler will generate a routine named dbmEDBI-articles.cbl.

Routines for DBMaker can be also generated with the legacy approach, through the edbiis command, that is now improved with a new option: -dd.

By processing EFD dictionaries with the new -dd option, you obtain EDBI routines without the dbm file suffix; for example, given the articles.xml EFD dictionary file, the edbiis command will generate a routine named EDBI-articles.dbm.

Although EDBI routines for DBMaker can be used with both the legacy type 3 JDBC driver (dmjdbc30.jar) and the new type 4 JDBC driver (dmjdbct4.jar), it is suggested to use EDBI routines for DBMaker with the new type 4 JDBC driver, as it is a pure Java driver without any native dependency, and therefore is suitable for platforms where there’s no porting of the DBMaker client (i.e. MacOS) and environments where native components are not always welcomed, like Java Servlet containers.

At runtime, all you need to do is activate the EasyDB file handler as usual by adding the configuration:

```cobol
iscobol.file.index=easydb
iscobol.easydb.prefix=dbm
```

If your programs operate on platforms or environments where native components are supported you might consider continuing use of the DCI file handler instead.
