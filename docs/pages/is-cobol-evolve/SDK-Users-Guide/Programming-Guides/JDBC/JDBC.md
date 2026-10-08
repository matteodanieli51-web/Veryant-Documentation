## JDBC

JDBC (short for Java DataBase Connectivity) is a Java API that enables Java programs to execute SQL statements. This allows Java programs to interact with any SQL-compliant database. Since nearly all relational database management systems (RDBMS) support SQL, and because Java itself runs on most platforms, JDBC makes it possible to write a single database application that can run on different platforms and interact with different RDBMS.

isCOBOL provides two ways to interact with RDMBS

- Database Bridge
- ESQL syntax

Both of them take advantage of JDBC.

In order to let isCOBOL interact with a RDBMS you need the proper JDBC driver. JDBC drivers are Java libraries (jar) that are usually supplied by the RDBMS vendor. Each RDMBS has its own drivers. The Java library must appear in the CLASSPATH and the driver class name must be specified by the iscobol.jdbc.driver configuration property.

In addition you must specify the connection url by setting the iscobol.jdbc.url property.

Once driver and url have been set, your program is able to connect to the RDBMS through JDBC.
