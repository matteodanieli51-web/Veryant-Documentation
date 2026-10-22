## isCOBOL Server Improvements

isCOBOL File Server has been enhanced with the new ISF protocol to be used in file name assignments. This allows file access on multiple isCOBOL File Servers running on different hostnames.

The syntax to be used for ISF protocol is:

```cobol
isf://hostname[:port]:path/to/file
```

Where:

- *hostname* is the server name or IP address where the File Server is listening
- *port* is the port where the File Server is listening. If omitted, the default port 10997 is used
- *path/to/file* is the name of the remote file to open.

This syntax is supported in multiple scenarios:

- SELECT on a specific file. As an example, the following select declares FILE1 handled by the File Server listening on 192.168.0.1 on the default port:

```cobol
select file1 assign to "isf://192.168.0.1:/usr/data/file1"
       organization indexed
       access dynamic
       record key file1-key.
```

• Configuration can be applied on multiple files depending on configuration rules, for example to affect all files that have a relative path:

```cobol
iscobol.file.prefix=c:/tmp;isf://192.168.0.2:10123:/usr/data
```

The isCOBOL framework will test the presence of the file locally first, in c:\tmp folder. If the file is not found, a second attempt is made using the File Server listening on 192.168.0.2 on port number 10123.

- Library routines that manage files: C$COPY, C$DELETE and C$FULLNAME. For example, this code snippet shows how to copy a file from the local Windows machine where isCOBOL is running in standalone to the remote Linux machine where the isCOBOL File Server is running:

```cobol
call "C$COPY" using "c:\tmp\file-orders"
                    "isf://192.168.0.1:/usr/data/file-orders"
```
