## File Handlers

The isCOBOL Framework includes a series of file handlers that allows you to manage sequential, relative and indexed files. These file handlers are implemented by dedicated classes in the package com.iscobol.io. For most of them, an alias is provided in order to easily reference the file handler without specifying the full class name. The table below lists the available file handlers providing class name, alias and a brief description:

### Indexed file handlers

| Class-Name | Alias | Description |
| --- | --- | --- |
| com.iscobol.extfh.ExtfhIndex | n/a | The file is handled by the 32bit EXTFH interface. |
| com.iscobol.extfh3.ExtfhIndex | n/a | The file is handled by the 64bit EXTFH interface. |
| com.iscobol.io.DynamicBtrieve | btrieve | The file is handled by the Btrieve interface. |
| com.iscobol.io.DynamicConnector | fscsc | The file is handled by c-tree through FileConnector. |
| com.iscobol.io.DynamicCtree | ctree | The file is handled by c-tree of version 9.5.51961 or previous. |
| com.iscobol.io.DynamicCtree2 | ctree2 | The file is handled by c-tree of version 9.5.53702 or later. |
| com.iscobol.io.DynamicCtreeJ | ctreej | The file is handled by c-tree of version 10.4.0.39701 or later through a Java interface. Note that the native client library is always required. |
| com.iscobol.io.DynamicDci | dci | The file is handled by the DBMaker DCI interface. |
| com.iscobol.io.DynamicDConnector | dcic | The file is handled by the DCI File Connector. |
| com.iscobol.io.DynamicEasyDB | easydb | The file is handled by isCOBOL DatabaseBridge. |
| com.iscobol.io.DynamicJIsam | jisam | The file is a JIsam archivie (default). |
| com.iscobol.io.DynamicMConnector | mfc | The file is handled by the Micro Focus File Connector. |
| com.iscobol.io.DynamicRConnector | rmc | The file is handled by the RM/COBOL File Connector. |
| com.iscobol.io.DynamicRemote | remote | The file is handled remotely by the file server feature provided by isCOBOL Server. |
| com.iscobol.io.DynamicVConnector | vfc | The file is handled by the Vision File Connector. |
| com.iscobol.io.DynamicVision | vision | (deprecated)The file is handled by the Acucobol-GT Vision interface. The runcbl library, provided separately, is required. |
| com.iscobol.io.DynamicVisionJ | visionj | The file is handled by a 100% Java-based Vision interface. No native components are required. <br>Vision formats 3 to 6 are supported.The following file types are currently not supported:<br>- encrypted files<br>- Vision files version 1 and 2 |
| com.iscobol.io.ScanMF | n/a | The file is handled by an internal Micro Focus files interface. You can only sequentially read next in input mode, other i-o is not supported. Micro Focus formats 1, 2, 3, 4 and 8 as well as C-ISAM are supported. Compressed files and split files are not supported, they won't be opened by the ScanMF class. A parsing error may occur while reading files with variable length records if the area of a record was reused by the MF runtime, e.g. due to a REWRITE statement or because it overwrote the area of a deleted record in order to save space. |
| com.iscobol.io.ScanRMKF | n/a | The file is handled by an internal RM/COBOL files interface. You can only sequentially read next in input mode, other i-o is not supported. |
| com.iscobol.io.ScanVision | n/a | The file is handled by an internal Vision interface. You can only sequentially read next, other i-o is not supported. Vision formats 3 to 6 are supported. <br>The following file types are currently not supported:<br>- encrypted files<br>- Vision files version 1 and 2<br>A 9D error is returned on open of unsupported files. |

### Binary Sequential file handlers

| Class-Name | Alias | Effect |
| --- | --- | --- |
| com.iscobol.extfh.ExtfhSequential | n/a | The sequential file is handled by the 32bit EXTFH interface. |
| com.iscobol.extfh3.ExtfhSequential | n/a | The sequential file is handled by the 64bit EXTFH interface. |
| com.iscobol.io.DynamicEasyDBSeq | easydb | The file is handled by isCOBOL DatabaseBridge. |
| com.iscobol.io.DynamicMFSequential | mfsequential | The file is handled in compatibility with Micro Focus. |
| com.iscobol.io.DynamicRemote | remote | The file is handled remotely by the file server feature provided by isCOBOL Server. |
| com.iscobol.io.DynamicSeqACU | seqacu | The fixed length sequential file is handled in compatibility with Acucobol. |
| com.iscobol.io.DynamicSequential | sequential | The file is a binary file on the local machine (default). |
| com.iscobol.io.DynamicVarSeqACU | varseqacu | The variable length sequential file is handled in compatibility with Acucobol. |
| com.iscobol.io.RemoteRelative | remote | The file is a binary file on the client machine (Application Server). |

### Relative file handlers

| Class-Name | Alias | Effect |
| --- | --- | --- |
| com.iscobol.extfh.ExtfhRelative | n/a | The relative file is handled by the 32bit EXTFH interface. |
| com.iscobol.extfh3.ExtfhRelative | n/a | The relative file is handled by the 64bit EXTFH interface. |
| com.iscobol.io.DynamicEasyDBRel | easydb | The file is handled by isCOBOL DatabaseBridge. |
| com.iscobol.io.DynamicRelative | relative | The file is a binary file on the local machine (default). |
| com.iscobol.io.DynamicRemote | remote | The file is handled remotely by the file server feature provided by isCOBOL Server. |

### Line Sequential file handlers

| Class-Name | Alias | Effect |
| --- | --- | --- |
| com.iscobol.extfh.ExtfhLineSequential | n/a | The file is handled by the 32bit EXTFH interface. |
| com.iscobol.extfh3.ExtfhLineSequential | n/a | The file is handled by the 64bit EXTFH interface. |
| com.iscobol.io.DynamicEasyDBLSeq | easydb | The file is handled by isCOBOL DatabaseBridge. |
| com.iscobol.io.DynamicLSeq8bit | lseq8bit | The file is handled by the standard isCOBOL interface (default). |
| com.iscobol.io.DynamicLSeqACU | lseqacu | The file is handled by an Acucobol compatible interface that discards form feed, carriage return and line feed before returning the record. |
| com.iscobol.io.DynamicLSeqMF_N | lseqmf_n | The file is handled by a Micro Focus compatible interface that doesn’t treat 0x0A in COMP fields as line feed. |
| com.iscobol.io.DynamicRemote | remote | The file is handled remotely by the file server feature provided by isCOBOL Server.<br>It doesn’t work for stream files and print files.<br>@It doesn’t work if program is compiled with the -flsu option. |

It’s also possible to create your own file handler by extending an existing one or by implementing it from scratch. A couple of examples are installed along with isCOBOL under the folder sample/data-access/files-redirect.
