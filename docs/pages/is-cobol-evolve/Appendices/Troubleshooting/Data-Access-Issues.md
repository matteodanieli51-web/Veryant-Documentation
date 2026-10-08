## Data Access Issues

Problems related to data access are identified by a file status value different than zero after a specific I/O operation. See [File Status Codes](../File-Status-Codes) for possible file status values and their meaning.

In order to retrieve additional information on the cause of failure you can take advantage of the isCOBOL logging feature. This feature is activated by setting the [iscobol.tracelevel](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#tracelevel) property to a value different than zero and optionally by setting [iscobol.logfile](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#logfile) to the name of the log file you wish to create.

If you are troubleshooting problems during the open of a file, it’s enough to set the trace level to the value of 8. When the I/O error occurs, you will find useful information in the log file including the path where the file was searched and the file handler that isCOBOL used to open the file.

If you’re troubleshooting other kind of I/O errors, you may find interesting to know the content of the record or the key that causes the error. In this case you should set the trace level to the value of 32.

When the file handler is c-treeRTG, two additional log files can be consulted to retrieve more information.

- the file CTSTATUS.FCS that is automatically updated in the server process directory. This file is particularly useful to diagnose startup errors. You may check it to ensure that the server process has been correctly started.
- the client log file that can be activated either with the [iscobol.file.index.log.file](../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client-through-Framework-properties) configuration property or with the [](../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client-through-CTREE_CONF/log) ctree.conf entry.

If the file handler is Database Bridge then you may find additional information in the JDBC log. Consult the database documentation or contact your database vendor to know how to trace the JDBC activity.

JAVA INSTR
