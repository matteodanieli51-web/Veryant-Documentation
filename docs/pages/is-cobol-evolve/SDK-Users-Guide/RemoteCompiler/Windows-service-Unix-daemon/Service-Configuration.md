### Service configuration

Java options must be put in the *isremotecc.vmoptions* file, located in the isCOBOL bin directory, which is the default directory of the service. In this file comments are prefixed by a hash and each option is on a separate line.

The following snippet shows how to configure memory limits, pass a custom configuration file and alter the Classpath for the isCOBOL RemoteCompiler service:

```cobol
#memory settings
-Xmx256m
-Xms128m
 
#configuration
-Discobol.conf=/myapp/myconf
 
#classpath
-classpath/p .
-classpath/a C:\dev\myclasses.jar
```

The isCOBOL RemoteCompiler service inherits the Classpath from the system and adds all jar libraries in the isCOBOL lib directory to it. Using the -classpath option you can add additional items to the active Classpath. The value of -classpath/p is prepended to the active Classpath. The value of -classpath/a is appended to the active Classpath.

**Note:** On some Windows distributions it’s necessary to reboot the system in order to make services aware of modifications to the system environment.

isCOBOL configuration properties to configure port number, hostname, rundebug, etcetera, can be set either in isremotecc.vmoptions with the syntax “-Dproperty=value” or in a file named iscobol.properties that will be loaded from:

1. The \etc directory
2. The user home directory
3. The Classpath
