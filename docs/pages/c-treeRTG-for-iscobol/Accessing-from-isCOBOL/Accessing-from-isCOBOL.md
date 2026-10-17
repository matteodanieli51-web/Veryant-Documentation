# Accessing from isCOBOL

isCOBOL uses the c-tree interface in one of the following cases:

1. when the runtime framework property [iscobol.file.index](../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file_index) is set either to "ctreej"; or
2. when the runtime framework property [iscobol.file.index.FileName](../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file_index_filename) is set either to "ctreej"; or
3. when CLASS "com.iscobol.io.DynamicCtreeJ" is specified in the [SELECT Clause](../../is-cobol-evolve/Language-Reference/Environment-Division/Input-Output-Section/File-Control-Paragraph).

The isCOBOL Framework becomes a client process that connects to a listening c-tree Server. To provide this connection, isCOBOL loads the ctree client library (ctree.dll on Windows, libctree.so on Linux) which must be available in the library path and must be the same version of the listening c-tree Server. A copy of this library is provided along with isCOBOL and it’s of the same version as the latest c-tree server available for download at Veryan’t web site. The library is installed in the bin folder on Windows and in the native/lib folder on Linux/Unix. You can replace this library if you need to work with a different version of c-tree.

isCOBOL can create c-tree files directly into the c-tree SQL Server so they are available as database tables for external SQL tools. Consult [Creating c-tree files into c-tree SQL Server from the COBOL Program](./SQL-Features/Creating-c-tree-files-into-c-tree-SQL-Server-from-the-COBOL-Program) chapter for details.

In order to bring existing c-tree files into the SQL Server, instead, the [ctutil](../c-tree-Utilities/Command-line-utilities/ctutil/ctutil) utility must be used. Consult [Registering existing c-tree files in c-tree SQL Server](./SQL-Features/Registering-existing-c-tree-files-in-c-tree-SQL-Server) chapter for details.

## Accessing through a File Connector

The c-tree File Connector allows you to work on c-tree files managed by c-tree by separating ISAM native access from java process. This solution is suggested when working with third party application servers (e.g. Apache Tomcat).

isCOBOL uses the file connector interface in one of the following cases:

1. when the runtime framework property [iscobol.file.index](../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file_index) is set either to "fscsc"; or
2. when the runtime framework property [iscobol.file.index.FileName](../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file_index_filename) is set either to "fscsc"; or
3. when CLASS "com.iscobol.io.DynamicConnector" is specified in the [SELECT Clause](../../is-cobol-evolve/Language-Reference/Environment-Division/Input-Output-Section/File-Control-Paragraph).

## Accessing previous c-tree versions

### Client library

isCOBOL includes a copy of the c-tree client library in the *bin* directory on Windows and in the *native/lib* directory on Linux/Unix. This library is always up to date with the latest c-tree server distributed by Veryant. If it doesn’t suit your needs, consider replacing this library with the one found in the c-tree server’s installation, under the *drivers/ctree.cobol* folder, with the following criteria.

Until version 11.9 a c-tree client library was able to connect to a c-tree server of an older version, as long as the major release is the same. Since version 11.9, the default ctree library installed under *drivers/ctree.cobol/iscobol* is no longer able to connect to c-tree servers of a previous version (e.g. 11.6).

If you need to connect to a c-tree server of a previous version, use the library installed under *drivers/ctree.cobol/iscobol.noGT32Kfiles* instead.

**Note** - if you’re on a 32 bit runtime environment, use the libraries in the corresponding directories for 32 bit: *drivers/ctree.cobol.32bit/iscobol* and *drivers/ctree.cobol.32bit/iscobol.noGT32Kfiles*.

If you need to connect to a c-tree server version 10 or lower, then use the c-tree client library installed along with that server and use the *ctree2* file handler rather than the *ctreej* file handler.

### File handler class

The available file handler classes and their aliases may be different when working with previous c-tree versions. The following table lists the file handlers available for the various c-tree versions:

| c-tree version | available file handlers | |
| --- | --- | --- |
|  | **values for iscobol.file.index** | **classes usable in FILE-CONTROL** |
| 9.5.51961 or previous | • ctree | • com.iscobol.io.DynamicCtree |
| between 9.5.53702 and 10.4.0.39110 | • ctree2<br>• fscsc | • com.iscobol.io.DynamicCtree2<br>• com.iscobol.io.DynamicConnector |
| 10.4.0.39701 or later | • ctreej [A]<br>• ctree2 [B]<br>• fscsc | • com.iscobol.io.DynamicCtreeJ [A]<br>• com.iscobol.io.DynamicCtree2 [B]<br>• com.iscobol.io.DynamicConnector |

\[A\] Supported since isCOBOL 2016 R1.

\[B\] Deprecated since isCOBOL 2016 R1.
