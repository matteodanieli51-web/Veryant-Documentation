## Distributed environment (Application Server)

isCOBOL provides the ability to deploy the COBOL application in an Application Server environment. This kind of approach separates the backend part (that will run server-side) from the UI part (that will run client-side).

This kind of achitecture runs on every kind of network (local and remote) using the TCP/IP protocol.

While working in an Application Server environment, the program can take advantage of the following features:

- The ability to execute programs client side.

```cobol
CALL CLIENT "MYPROG" USING param-1, param-2.
```

- The ability to run programs on remote machines (see [Remote objects](\) for details).

- The ability to read and write binary files on the client machines; files must be defined as follows:

```cobol
SELECT client-file ASSIGN TO filename
  ORGANIZATION BINARY SEQUENTIAL
  CLASS "com.iscobol.io.RemoteRelative"
  .
```

- The ability to copy each kind of file (sequential, binary and indexed) from client to server and viceversa (see [C$COPY](\) for details)
