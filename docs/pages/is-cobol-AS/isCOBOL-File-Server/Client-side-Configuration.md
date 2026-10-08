## Client-side Configuration

There are two ways a program can use a remote file on the File Server.

1. By specifying server name and port in the file name with the ISF protocol, or
2. By using the "com.iscobol.io.DynamicRemote" class as file handler

### The ISF protocol

It is possible to specify File Server connection information in the physical file name through the URL syntax as follows:

```cobol
isf://hostname[:port]:path/to/file
```

Where

- *hostname* is the server name or IP address where the File Server is listening
- *port* is the port where the File Server is listening. If omitted, the port specified by [iscobol.file.remote.port \*](../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) (whose default value is 10997) is used
- *path/to/file* is the name of the remote file to open. It can be either a full path, a relative path or just the file name. If omitted, the root older is assumed, so a path like "isf://localhost:" is equivalent to "isf://localhost:/".

The URL can be put entirely in the file name or can be built by combining the FILE-PREFIX setting and the file name.

When the FILE-PREFIX setting includes paths starting with "isf://", multiple paths must be separated by a line feed character, e.g.

```cobol
iscobol.file.prefix=isf://192.168.0.1:/usr/data\nC:\\Temp
```

The above setting specifies two paths for the FILE-PREFIX:

1. the folder /*usr/data* on the remote server whose IP is 192.168.0.1 where the File Server is listening
2. the local folder C:\\*Temp*

The following code snippets show two ways to open FILE1 through the File Server listening on 192.168.0.1 on the default port. The File Server will search in the /usr/data folder on the server:

```cobol
       INPUT-OUTPUT SECTION.
       FILE-CONTROL.
           SELECT FILE1 ASSIGN TO "isf://192.168.0.1:/usr/data/FILE1"
                  ORGANIZATION INDEXED
                  ACCESS DYNAMIC
                  RECORD KEY FILE1-KEY.
       
       FILE SECTION.
       FD FILE1.
       01 FILE1-RECORD.
          03 FILE1-KEY  PIC 9(3).
          03 FILE1-DATA PIC X(50).
       
       PROCEDURE DIVISION.
       MAIN.
           OPEN INPUT FILE1.
```

```cobol
       INPUT-OUTPUT SECTION.
       FILE-CONTROL.
           SELECT FILE1 ASSIGN TO "FILE1"
                  ORGANIZATION INDEXED
                  ACCESS DYNAMIC
                  RECORD KEY FILE1-KEY.
       
       FILE SECTION.
       FD FILE1.
       01 FILE1-RECORD.
          03 FILE1-KEY  PIC 9(3).
          03 FILE1-DATA PIC X(50).
       
       PROCEDURE DIVISION.
       MAIN.
           SET ENVIRONMENT "file.prefix" TO "isf://192.168.0.1:/usr/data".
           OPEN INPUT FILE1.
```

### The DynamicRemote class

In order to access remote files, client programs can assign their files to the "com.iscobol.io.DynamicRemote" class. In the configuration, it’s also possible to use the alias "remote".

The class can be assigned in the SELECT statement. See [FILE-CONTROL Paragraph](../../is-cobol-evolve/Language-Reference/Environment-Division/Input-Output-Section/File-Control-Paragraph), rule 35 for information about how to assign a file to a specific class.

For example, the following sequential file will be opened through the File Server, regardless of the file name that the program puts in the ARC-NAME variable:

```cobol
SELECT ARC ASSIGN TO ARC-NAME
           ORGANIZATION LINE SEQUENTIAL
           CLASS "com.iscobol.io.DynamicRemote"
           .
```

The assignment can be done also through the following configuration properties:

- [iscobol.file.index](../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) and [iscobol.file.index.FileName](../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration)
- [iscobol.file.linesequential](../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) and [iscobol.file.linesequential.FileName](../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration)
- [iscobol.file.relative](../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) and [iscobol.file.relative.FileName](../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration)
- [iscobol.file.sequential](../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) and [iscobol.file.sequential.FileName](../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration)

For example, the following configuration entry causes all the indexed files to be opened through the File Server:

```cobol
iscobol.file.index=remote
```

Client programs are made aware of the File Server location through the configuration properties [iscobol.file.remote.host \*](../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) and [iscobol.file.remote.port \*](../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration).

Since the full-path of the file is built client-side by the runtime before sending the i/o request to the File Server, as explained at [File names interpretation](../../is-cobol-evolve/Language-Reference/Environment-Division/Input-Output-Section/File-Names-Interpretation), file aliases, prefixes and suffixes must be set in the client configuration and must refer to the directories of the server where files will be opened. If the server operating system uses a different file separator than the client, the property [iscobol.file.prefix_separator](../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) must be set in the client configuration as well.

The following client configuration, for example, handles only indexed files remotely on the Linux server whose IP is 192.168.0.1 assuming that the File Server is listening on the default port:

```cobol
iscobol.file.index=remote
iscobol.file.remote.host=192.168.0.1
iscobol.file.prefix=/usr/data
iscobol.file.prefix_separator=/
```

The following more complex sample configuration, instead, handles indexed, sequential and relative files remotely on the Linux server whose IP is 192.168.0.1 having the File Server listening on the port 12345:

```cobol
iscobol.file.index=remote
iscobol.file.sequential=remote
iscobol.file.linesequential=remote
iscobol.file.relative=remote
iscobol.file.remote.host=192.168.0.1
iscobol.file.remote.port=12345
iscobol.file.prefix=/usr/data
iscobol.file.prefix_separator=/
```
