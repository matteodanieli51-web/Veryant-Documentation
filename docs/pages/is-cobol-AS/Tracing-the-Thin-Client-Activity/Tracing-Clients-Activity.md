## Tracing Clients Activity

In order to trace the activity of the clients, the following entries must appear in the configuration when you start the Application Server:

```cobol
iscobol.logfile=Client.log
iscobol.tracelevel=11
```

A log file for each client connection will be generated along with a file with the lck extension that Java uses to avoid unexpected overwrite. The name of the log file is composed of the value of iscobol.logfile followed by a progressive number. The file whose name matches with the iscobol.logfile setting contains the configuration read by the Application Server. For example, using the above settings, if three clients connect to the Application Server, the following files will be generated:

```cobol
Client.log
Client.log.lck
Client.log.1
Client.log.1.lck
Client.log.2
Client.log.2.lck
Client.log.3
Client.log.3.lck
```

The content of these files varies depending on iscobol.tracelevel value. With the above setting, which uses a value of 11, the log contains: client configuration, i/o and programs executed.

If you wish to trace the activity of a single client, you can set iscobol.logfile and iscobol.tracelevel properties in the remote configuration file used by the client instead of the standard configuration file used by the Application Server. See [Format 1](../Usage-of-isCOBOL-Client/Usage-of-isCOBOL-Client#format-1) for details about remote configuration.
