## The URL syntax

It is possible to specify c-tree Server connection information in the physical file name through the URL syntax as follows:

```cobol
ctree://userID:password@hostname:servername/filename?config1?config2...?configN
```

where:

• *userID* is the c-tree user ID.
• *password* is the c-tree user password.
• *hostname* is the host name or IP address of the machine running the c-tree Server.
• *servername* is the name of the c-tree Server to connect to. As an alternative, you can specify the server port with the syntax #port (see snippets below for details).
• *filename* is the name of the file to open. It can be either a full path or a path relative to c-tree Server current directory.
• *config1* thru *configN* are optional configuration keywords

### Examples

A typical example based on a default installation:

```cobol
ctree://admin:ADMIN@localhost:FAIRCOMS/myfile
```

userID and password can be omitted:

```cobol
ctree://localhost:FAIRCOMS/myfile
```

the port can be specified instead of servername:

```cobol
ctree://localhost:#5597/myfile
```

servername can also be omitted in which case the default “FAIRCOMS” is used:

```cobol
ctree://localhost/myfile
```

hostname can also be omitted in which case the default “localhost” is used:

```cobol
ctree://:FAIRCOMS/myfile
```

If both servername and hostname are omitted, the syntax is used as follows:

```cobol
ctree:///myfile
```

### URL in File Prefix

The URL syntax can be used also as [iscobol.file.prefix](../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file_prefix) value.

Suppose that your c-tree files reside in the folder C:\\data on the server machine Server1 where the c-tree server is running.

In this case the configuration should include a similar entry:

```cobol
iscobol.file.prefix=ctree://admin:ADMIN@Server1:FAIRCOMS/C:/data
```
