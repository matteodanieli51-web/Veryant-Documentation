## Error Codes

The following table lists the most common error codes that are applicable to c-tree and provides a brief description and some advice.

These codes can appear:

- as secondary code of [9D](../../is-cobol-evolve/Appendices/File-Status-Codes#9D) error in the COBOL program
- in the c-tree client log file (see [<log\>](../Configuring-the-client/Configuring-the-client-through-CTREE_CONF/log) and [iscobol.file.index.log.file](../Configuring-the-client/Configuring-the-client#file_index_log_file) for details)
- as output of [ctutil](../c-tree-Utilities/Command-line-utilities/ctutil/ctutil) commands

| Logical Error | Meaning |
| --- | --- |
| -3 | The client library (ctree.dll on Windows, libctree.so on Linux) is not compatible with the c-tree Server. <br>This error is usually returned when there is a mismatch in the major versions of these components, e.g. a ctree.dll v10.4 is trying to connect to a c-tree server v3.0.0. |
| 36 | The most common cause of this error is that you’re opening a file that is not a c-tree file. JIsam files, for example, have the same default extensions for the data portion (.dat) and the index portion (.idx), so a c-tree file and a JIsam file could be easily confused for one another. |
| 40 | This error occurs when the [PAGE_SIZE](../Configuring-the-c-tree-Server#page_size) of the c-tree server opening the file is lower than the PAGE_SIZE of the c-tree server that created the file. <br>It’s common when you create a file with a c-tree server v3, whose default PAGE_SIZE is 32KB, and then open it with a c-tree server v11,(whose default PAGE_SIZE is 8KB).<br>There are two possible solutions:<br><br>• change the PAGE_SIZE back to 8KB in ctsrvr.cfg and restart the server. Since this setting affects also FCS files and SQL databases, after changing it you should restart the c-tree Server with a clean data folder. As a side effect, the performance may be slower, due to the smaller page size.<br>or<br>• rebuild the files using the ctutil [-compact](../c-tree-Utilities/Command-line-utilities/ctutil/compact) command. This command will recreate the file with the correct page size. This is the preferable solution. |
| 133 | The c-tree server is down or unreachable. Double check network connectivity (e.g. try to ping the server where c-tree is running) and ensure that no firewall software is blocking the communication on the ports used by c-tree (by default: 5597and 6597) on the server. |
| 401 | The file is corrupt. Try to repair it using the [-rebuild](../c-tree-Utilities/Command-line-utilities/ctutil/rebuild) option. <br>If the error persists, contact the Veryant’s support team. |
| 456 | A common cause of this error is that the ADMIN credentials were passed on the ctutil command line instead of being passed through a configuration file. <br>See [Registering existing c-tree files in c-tree SQL Server](../Accessing-from-isCOBOL/SQL-Features/Registering-existing-c-tree-files-in-c-tree-SQL-Server) for more details. |
| 978 | A shared memory connection could not be established because the system denied access to the client process. For example, if a client is run as a Windows service and c-tree Server is not run as a Windows service (or vice-versa), |

If you encounter an error that is not in the above list, you can use the [ErrorViewer](../c-tree-Utilities/Graphical-utilities/NET-utilities/ErrorViewer) utility to obtain a brief description of the error. If the information returned by the utility doesn’t help in understanding the error cause and resolution, contact the Veryant’s support team.
