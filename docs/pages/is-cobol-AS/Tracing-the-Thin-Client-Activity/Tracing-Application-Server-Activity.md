## Tracing Application Server Activity

In order to trace the activity of the Application Server, the following entries must appear in the configuration when you start it:

```cobol
iscobol.as.logging=1
iscobol.as.logfile=AppServer.log
```

The log file contains information about the server startup and the clients that connect to it. The following snippet is the result of a correct startup on localhost:

```cobol
17-mar-2010 16.23.57 com.iscobol.as.AppServerImpl main
INFO: Starting server on hostname: null with port number: 10999
17-mar-2010 16.23.57 com.iscobol.as.ServerHandler init
INFO: AppServer bound in registry
17-mar-2010 16.23.57 com.iscobol.as.ServerHandler init
INFO: LockManager: com.iscobol.io.DefaultLockManager
17-mar-2010 16.24.16 com.iscobol.as.ServerHandler <init>
INFO: new AppServerImpl
```
