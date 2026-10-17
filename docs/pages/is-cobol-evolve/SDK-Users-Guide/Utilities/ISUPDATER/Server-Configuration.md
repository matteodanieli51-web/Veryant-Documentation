### Server configuration

On the server machine, the folder that isupdater will check through HTTP must contain the following items:

1. A configuration file named *swupdater.properties*
2. A zip file or directory for every package described in the *swupdater.properties* file

See [Server Configuration (swupdater.properties)](../../Compiler-and-Runtime/Configuration/Configuration-Properties#update-facility-configuration) for details about the properties that can be used in swupdater.properties.

The following example describes the update of isCOBOL’s bin and lib folders to version 100.

Directory content:

```cobol
isCOBOL-bin.zip
isCOBOL-lib.zip
swupdater.properties
```

Content of zip files:

| | |
| --- | --- |
| isCOBOL-bin.zip | Native libraries typically installed in the isCOBOL’s *bin* folder on Windows. The equivalent Unix libraries are installed in the isCOBOL’s *native/lib* folder on Unix platforms. It’s good practice to include only native libraries in the update process as executable files never change between two isCOBOL releases and they could be locked during the update process. |
| isCOBOL-lib.zip | Jar libraries typically installed in the isCOBOL’s *lib* folder. |
| | |

Content of *swupdater.properties*:

```cobol
swupdater.version.isc_lib=100
swupdater.lib.isc_lib=isCOBOL-lib.zip
 
swupdater.version.isc_bin=100
swupdater.lib.isc_bin=isCOBOL-bin.zip
```

**Note** - whenever you edit the swupdater.properties file there’s no need to restart the isCOBOL Server. The changes to this file will be automatically considered at the next update request.

#### isCOBOL Server as an HTTP server

In the directory where the zip files and *swupdater.properties* are stored you can start the isCOBOL Server as follows:

```cobol
iscserver -hs [-hsport port] [-hsroot folder]
```

Where

- *port* specifies the port used for the HTTP connection. If omitted, 10996 is used.
- *folder* specifies the root folder where *swupdater.properties* is located. This folder is also used to resolve relative paths of files in *swupdater.properties*. If omitted, the iscserver working directory is used.

The activation of the HTTP server as well as port and folder can also be set in the configuration file; see [iscobol.as.httpserver (boolean)](../../Compiler-and-Runtime/Configuration/Configuration-Properties#iscobol-server-thin-client-configuration), [iscobol.as.httpserver.port](../../Compiler-and-Runtime/Configuration/Configuration-Properties#iscobol-server-thin-client-configuration) and [iscobol.as.httpserver.root](../../Compiler-and-Runtime/Configuration/Configuration-Properties#iscobol-server-thin-client-configuration) for details.

The -hs option can be used along with other iscserver options. The following command starts the isCOBOL Server with all the services on: application server, file server and HTTP server.

```cobol
iscserver -as -fs -hs
```
