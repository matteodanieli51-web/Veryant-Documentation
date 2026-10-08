# Mixing DatabaseBridge and ESQL

EDBI routines are standard COBOL programs with embedded SQL and therefore they can work together with other COBOL programs that use ESQL, sharing the connection to the database.

This possibility could help you in optimizing some procedures where the ISAM logic is too slow if compared with the SQL logic. In these cases you can rewrite only those specific procedures using ESQL and leave the rest of the application working with DatabaseBridge.

Another scenario where it’s useful to include COBOL/ESQL programs in the application is for the interaction with database resources that are unknown to the DatabaseBridge, for example tables that were not mapped to COBOL indexed files as well as stored procedures that you need to call for specific tasks.

The simplest scenario where DatabaseBridge can work together with COBOL/ESQL programs is with a single connection to the database that must be shared between DatabaseBridge and COBOL/ESQL programs. A rather more complex scenario is in an environment where multiple connections are established and therefore you have to ensure that both DatabaseBridge and COBOL/ESQL programs work on the desired connection. These two scenarios are discussed below.

## Mixing DatabaseBridge and ESQL on one single connection

No particular action is required when mixing DatabaseBridge and ESQL on the same connection. The program that connects first creates the connection to the database, it doesn’t matter if it’s a program performing [OPEN](\) via DatabaseBridge or a COBOL/ESQL program issuing a [CONNECT](\) statement. Once the connection is established, both DatabaseBridge and COBOL/ESQL can perform queries without issues.

## Mixing DatabaseBridge and ESQL in a multi-connection environment

Both COBOL/ESQL and DatabaseBridge allow you to generate multiple connections, either to the same database or to different databases.

For more information about handling multiple connections in COBOL/ESQL programs, see [Working on multiple connection simultaneously](\) in the Embedded SQL Reference manual.

For more information about handling multiple connections with DatabaseBridge programs, see [Working with multiple connections](./Working-with-multiple-connections) in this book.

When multiple connections are involved, you have to be careful of the connection names.

The default connection performed by DatabaseBridge for files that are not mapped to a particular connection and the default connection performed by COBOL/ESQL programs issuing a [CONNECT](\) statement without the AS clause is named “DEFAULT”.

When the AS clause is used in the [CONNECT](\) statement, such clause specifies the name of the connection. With reference to DatabaseBridge, instead, the name of the additional connections is extrapolated from the [iscobol.easydb.connection_name.FileName](\) configuration setting. DatabaseBridge works on the DEFAULT connection by default and then switches to the necessary separate connection when it finds a file that is mapped to that separate connection.

The good practice in this kind of scenario is to make the COBOL/ESQL program work on a dedicated named connection and switch back to the DEFAULT connection when done, so that DatabaseBridge is not influenced by the connection switch performed by the COBOL/ESQL program. E.g.

```cobol
      *connect with a custom connection name
           exec sql
              connect to    :db  as MyCustomConnection
                      user  :usr
                      using :pwd
           end-exec.
      *switch to this new custom connection
           exec sql set connection MyCustomConnection end-exec.
      *perform the desired SQL operations
           exec sql ...
           exec sql ...
           exec sql ...
           ...
      *switch back to the default connection
           exec sql set connection DEFAULT end-exec.
      *exit program
           goback.
```
