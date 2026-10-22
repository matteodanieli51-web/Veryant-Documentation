## isCOBOL File Server usage

The File Server daemon can be started with the following command:

```cobol
iscserver -fs [-c config_file] [-fsport FSport] [-hostname host] [-as] [-port ASport] [-force]
```

Setting [iscobol.as.fileserver (boolean)](../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#iscobol-server-thin-client-configuration) to true in the configuration produces the same effect as using the -fs option while setting [iscobol.as.appserver (boolean)](../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#iscobol-server-thin-client-configuration) to true in the configuration produces the same effect as using the -as option.

The following command starts the File Server on the local pc on the default port 10997:

```cobol
iscserver -fs
```

A correct startup will produce an ouptut similar to this:

```cobol
Application Server (file services) started and listening on port 10997
```

You can start both the Application Server and the File Server at the same time with the command:

```cobol
iscserver -fs -as
```

Starting the Application Server in addition to the File Server allows you to connect the Administration Panel (see [Format 5](../Usage-of-isCOBOL-Client/Usage-of-isCOBOL-Client#format-5) of the isCOBOL Client command) and monitor the active connections to the File Server.

Both services can start on different ports than the defaults. Use the -fsport and -port options to control the port where the services will be listening. The following command, for example, starts the File Server on the port 1234 and the Application Server on the port 1235:

```cobol
iscserver -fs -fsport 1234 -as -port 1235
```

The File Server host name and port can also be set in the configuration file, as shown below.

```cobol
iscobol.hostname host
iscobol.as.fileserver.port port
```

Config_file should include the standard configuration, that is the same for every client. See [Usage of isCOBOL Client](../Usage-of-isCOBOL-Client/Usage-of-isCOBOL-Client) for information about how to use a customized client configuration.
