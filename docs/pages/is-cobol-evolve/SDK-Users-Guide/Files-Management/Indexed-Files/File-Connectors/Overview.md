### File Connectors

#### Overview

isCOBOL provides a File Connector technology for file systems with native parts. File Connectors separate ISAM native access from java process.

It’s particularly useful when working in Application Server environment. For every isCOBOL Server thread (a thread is created for each connected Client) a separate native process is invoked. isCOBOL Server communicates with the native process through unnamed pipe.

The advantage of this approach it is to separate java code from native code to have a 100% pure java server.

This feature is currently supported for

- [Acucobol-GT ISAM files (Vision)](./Vision-File-Connector)
- [c-tree ISAM files](./c-tree-File-Connector)
- [DBMaker DCI](./DCI-File-Connector)
- [Micro Focus ISAM files](./Micro-Focus-File-Connector)
- [RM/COBOL ISAM files](./RM-COBOL-File-Connector)
