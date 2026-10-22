## Indexed Files

Indexed files are file with an index that allows easy random access to any record given its file key. isCOBOL natively supports two kind of indexed files: [JISAM](../Indexed-Files/JISAM/Overview) and c-tree. A File Connector solution is available to access c-tree, Acucobol-GT (Vision) and Micro Focus files.

### Comparison between JISAM and c-treeRTG

The table below shows the differences between JISAM and c-tree.

The objective of this comparison is to help the user in choosing the right file system depending on his needs.

|  | JISAM | c-tree |
| --- | --- | --- |
| **maximum file size** | 9 EB | 16 EB |
| **maximum record size** | 2 GB | 2 GB |
| **maximum number of keys** | no limit | no limit [A] |
| **maximum key size** | 255 bytes | no limit |
| **max number of segments per key** | 16 | no limit [B] |
| **maximum number of records** | no limit | no limit |
| **variable length records** | not supported [C] | supported |
| **transactions** | not supported | supported |
| **alternate collating sequence** | supported | supported |
| **OPEN INPUT WITH LOCK** | not supported | supported |
| **data encryption** | supported[D] | supported[E] |
| **file compression** | not supported | supported [E] |
| **ODBC and JDBC access** | supported via isCOBOL UDBC (separate product) | supported [F] |
| **ODBC on Linux/Unix (unixODBC)** | not supported | supported |
| **ODBC compliance** | 2.0 | 3.52 |
| **ADO.NET, PHP and Python** | not supported | supported [F] |
| **native dependences** | no | yes |
| **file handling utility** | JUTIL | ctutil |
| **monitor and tuning utilities** | none | c-treeACEMonitor<br>c-treeGauges<br>c-treeISAMExplorer<br>c-treeLoadTest<br>c-treeLogAnalyzer<br>c-treePerfMon<br>c-treeTPCATestDrCtree |
| **backup features** | none | integrated online backup |
| **data replication** | not supported | supported via c-tree Replication Agent (separate product) |
| **memory files** | not supported | supported |
| **file pool** | not supported | supported |
| **auto adjustment of file structure** | not supported | supported [G] |

\[A\] By default the maximum number of keys is 32, but it can be increased by setting [MAX_DAT_KEY](../../../../c-treeRTG-for-iscobol/Configuring-the-c-tree-Server) in the server configuration.

\[B\] By default the maximum number of segments is 16, but it can be increased by setting [MAX_KEY_SEG](../../../../c-treeRTG-for-iscobol/Configuring-the-c-tree-Server) in the server configuration.

\[C\] Variable length records are treated as fixed length records using the maximum record size.

\[D\] Encrypted JISAM files can’t be read via ODBC and JDBC.

\[E\] Compression and encryption can be activated either via the WITH COMPRESSION and WITH ENCRYPTION clauses in the FILE-CONTROL paragraph or with the configuration properties [iscobol.file.index.datacompress (boolean)](../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client), [iscobol.file.index.keycompress (boolean)](../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client) and [iscobol.file.index.encrypt (boolean)](../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client). The use of configuration properties is preferable for two reasons: it allows you to enable both compression and encryption on the same file and it allows you to choose the compression strategy.

\[F\] The SQL Engine requires a specific license. With the standard license SQL features are available only for three hours from the c-tree Server startup.

\[G\] The feature must be enabled by setting [iscobol.ctree.auto_adjust (boolean)](../../Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) to true in the runtime configuration.
