## Enabling the TurboRun feature

The TurboRun daemon can be started with the following command:

```cobol
iscserver -tr [-c config_file] [-trport TRport] [-hostname host] [-as] [-port ASport] [-force]
```

Setting [iscobol.as.turborun (boolean)](../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#iscobol-server-thin-client-configuration) to true in the configuration produces the same effect as using the -tr option while setting [iscobol.as.appserver (boolean)](../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#iscobol-server-thin-client-configuration) to true in the configuration produces the same effect as using the -as option.

The following command starts the TurboRun on the local pc on the default port 10995:

```cobol
iscserver -tr
```

A correct startup will produce an ouptut similar to this:

```cobol
Application Server (TurboRun) started and listening on port 10995
```

You can start both the Application Server and the TurboRun at the same time with the command:

```cobol
iscserver -tr -as
```

Starting the Application Server in addition to the TurboRun allows you to connect the Administration Panel (see [Format 5](../Usage-of-isCOBOL-Client/Usage-of-isCOBOL-Client#format-5) of the isCOBOL Client command) and monitor the active TurboRun sessions.

Both services can start on different ports than the defaults. Use the -trport and -port options to control the port where the services will be listening. The following command, for example, starts the TurboRun on the port 1234 and the Application Server on the port 1235:

```cobol
iscserver -tr -trport 1234 -as -port 1235
```

The TurboRun host name and port can also be set in the configuration file, as shown below.

```cobol
iscobol.hostname host
iscobol.as.turborun.port port
```
