### Windows service and Unix daemon

#### Windows service

On Windows you can install NoSQL Bridge as a Windows Service.

The NoSQL Bridge service can be installed during the setup process:

![](../../../images/nosql-setup-service.png)

When NoSQL Bridge has been installed, the service can be installed, removed and managed through the nosql.exe command line utility.

##### nosql.exe usage

The service maintenance is done through nosql.exe.

To install the service, use the command:

```cobol
nosql -install
```

If the operation is successful, there will be a new entry in the Windows service manager.

![](../../../images/nosql-service.png)

The service is installed in auto mode, which means the service will automatically start along with the system.

To install the service in demand mode, use the command:

```cobol
nosql -install-demand
```

In this mode, the service must be manually started by the user in the Windows service manager.

To retrieve the service status, use the command:

```cobol
nosql -status
```

The exit code of this command is 0 when the service is running, 3 when it is not running and 1 when the state cannot be determined.

To start the service, use the command:

```cobol
nosql -start
```

To stop the service, use the command:

```cobol
nosql -stop
```

To uninstall the service, use the command:

```cobol
nosql -uninstall
```

If the command is successful, the NoSQL Bridge service will disappear from the Windows service manager.

In some situations, you may need to install a Windows service as a non interactive service, ensuring it cannot access or interact with the GUI subsystem. In order to do that, add the phrase non-interactive after the -install parameter. A custom service name can still be specified after the non-interactive parameter:

```cobol
nosql -install non-interactive
```

You can also specify a custom name for the service. This name should be added as the last parameter in the isserver.exe command line for all options. For example, the following commands manage a NoSQL Bridge service named "myservice":

```cobol
nosql -install myservice
nosql -start myservice
nosql -status myservice
nosql -stop myservice
nosql -uninstall myservice
```

##### Output redirection

The NoSQL Bridge service redirects all the console output (stderr and stdout) to two files named *nosql_err.log* and *nosql_out.log*. These files are located in the isCOBOL bin directory, which is the default directory of the service.

##### Service configuration

Java options must be put in the *nosql.vmoptions* file, located in the NoSQL Bridge bin directory, which is the default directory of the service. In this file comments are prefixed by a hash and each option is on a separate line.

The following snippet shows how to configure memory limits and pass a custom configuration file for the NoSQL Bridge service:

```cobol
#memory settings
-Xmx256m
-Xms128m
 
#configuration
-Discobol.conf=/myapp/myconf
```

**Note**: On some Windows distributions it’s necessary to reboot the system in order to make services aware of modifications to the system environment.

Configuration properties for the NoSQL Bridge can be set either in nosql.vmoptions with the syntax “-Dproperty=value” or in a file named *iscobol.properties* that will be loaded from:

1. The \etc directory
2. The user home directory
3. The Classpath
