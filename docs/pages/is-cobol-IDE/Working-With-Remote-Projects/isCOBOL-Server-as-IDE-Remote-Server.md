## isCOBOL Server as IDE Remote Server

The isCOBOL Server can work as a remote compiler and application server for the IDE.

Start the isCOBOL Server with the following command on the remote server where you wish to compile and run your programs:

```cobol
iscserver -ide [-hostname host] [-port port]
```

Hostname and port can also be specified in the configuration by setting the following properties:

```cobol
iscobol.hostname host
iscobol.port port
```

The following command starts the isCOBOL Server as IDE Remote Server on the local host on the default port 10999.

```cobol
iscserver -ide
```

A correct startup will produce an output similar to this:

```cobol
IDE Remote Server started and listening on port 10999
```
