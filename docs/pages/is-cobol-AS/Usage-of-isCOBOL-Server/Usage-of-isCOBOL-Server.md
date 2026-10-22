# Usage of isCOBOL Server

Application Server architecture runs most of the application on the server, deploying only the user interface on the client. Some applications may be programmed to run on the client rather than the server.

Before starting the Application Server, you should ensure that your application runs properly on the server as a stand-alone program. Then the Application Server daemon can be started with the following command:

```cobol
iscserver [-c config_file | -conly config_file] [-port port] [-hostname host] [-force]
```

When a TCP connection is closed the connection may remain in a timeout state for a period of time after the connection is closed (typically known as the TIME_WAIT state or 2MSL wait state). For applications using a well known socket address or port, it may not be possible to bind a socket to the required SocketAddress if there is a connection in the timeout state involving the socket address or port. Use the –force option to achieve it.

Config_file should include the standard configuration, that is the same for every client. See [Usage of isCOBOL Client](../Usage-of-isCOBOL-Client/Usage-of-isCOBOL-Client) for information about how to use a customized client configuration.

Hostname and port can also be specified in the configuration by setting the following properties:

```cobol
iscobol.hostname host
iscobol.port port
```

The following command starts the Application Server on the local PC on the default port 10999.

```cobol
iscserver
```

A correct startup will produce an output similar to this:

```cobol
Application Server started and listening on port 10999
```

On client machines, the following command should be used:

```cobol
iscclient [-port port] [-hostname host] ProgramName
```

When the client machine is Windows, the following command can also be used:

```cobol
isclient [-port port] [-hostname host] ProgramName
```

The difference is that iscclient keeps the console busy while isclient runs in a separate task.

The isclient command output is stored in two files, *isclient_out.log* and *isclient_err.log*, located in the isCOBOL bin directory. Ensure that the bin directory of isCOBOL has write permissions.

Host name, port, and a remote configuration file can also be set in the configuration file, as shown below.

```cobol
iscobol.hostname host
iscobol.port port
iscobol.remote_conf config
```

See [Usage of isCOBOL Client](../Usage-of-isCOBOL-Client/Usage-of-isCOBOL-Client) for all the possible options provided by iscclient.

In the thin client architecture every client that connects to the Application Server becomes a thread in the JVM process associated to the Application Server and is assigned with a uniqure progressive identificator number (thread id) in the range between 1 and 2147483647.

The following Java property can be set to avoid unexpected lock errors when two clients open the same relative/sequential file having Lock Mode Automatic:

```cobol
sun.nio.ch.disableSystemWideOverlappingFileLockCheck=1
```

## Setting the hostname

If the hostname parameter is not specified on the command line or with configuration properties, then the isCOBOL Server will accept connections from all local addresses. The following table summarizes the connection result in different combinations of isCOBOL Client and isCOBOL Server hostname parameter values:

| Server side hostname value | Client side hostname value | Connection result |
| --- | --- | --- |
| 0.0.0.0 | 0.0.0.0 | Successful |
| 0.0.0.0 | none | Successful |
| 0.0.0.0 | 127.0.0.1 | Successful |
| 0.0.0.0 | localhost | Successful |
| 0.0.0.0 | LAN address | Successful |
| none | 0.0.0.0 | Successful |
| none | none | Successful |
| none | 127.0.0.1 | Successful |
| none | localhost | Successful |
| none | LAN address | Successful |
| 127.0.0.1 | 0.0.0.0 | Refused |
| 127.0.0.1 | none | Successful |
| 127.0.0.1 | 127.0.0.1 | Successful |
| 127.0.0.1 | localhost | Successful |
| 127.0.0.1 | LAN address | Refused |
| localhost | 0.0.0.0 | Refused |
| localhost | none | Successful |
| localhost | 127.0.0.1 | Successful |
| LOCALHOST | localhost | Successful |
| localhost | LAN address | Refused |
| LAN address | 0.0.0.0 | Successful |
| LAN address | none | Refused |
| LAN address | 127.0.0.1 | Refused |
| LAN address | localhost | Refused |
| LAN address | LAN address | Successful |

**Note** - The above information is accurate as long as localhost is mapped to the IP address 127.0.0.1 in the system.
