### Service configuration

Java options must be put in the *isserver.vmoptions* file, located in the isCOBOL bin directory, which is the default directory of the service. In this file comments are prefixed by a hash and each option is on a separate line.

The following snippet shows how to configure memory limits, pass a custom configuration file and alter the Classpath for the isCOBOL Server service. It also shows how to enable and disable specific functionalities using the corresponding isCOBOL property (in this case we enable Application Server and File Server and we disable HTTP Server and IDE’s remote project handling):

```cobol
#memory settings
-Xmx256m
-Xms128m
 
#configuration
-Discobol.conf=/myapp/myconf
 
#services
-Discobol.as.appserver=1
-Discobol.as.fileserver=1
-Discobol.as.httpserver=0
-Discobol.as.ide=0
 
#classpath
-classpath/p .
-classpath/a C:\dev\myclasses.jar
```

The isCOBOL Server service inherits the Classpath from the system and adds all jar libraries in the isCOBOL lib directory to it. Using the *-classpath* option you can add additional items to the active Classpath. The value of *-classpath/p* is prepended to the active Classpath. The value of *-classpath/a* is appended to the active Classpath.

**Note:** On some Windows distributions it’s necessary to reboot the system in order to make services aware of modifications to the system environment.

isCOBOL configuration properties to configure port number, hostname, rundebug, etcetera, can be set either in *isserver.vmoptions* with the syntax “-Dproperty=value” or in a file named *iscobol.properties* that will be loaded from:

1. The \\etc directory
2. The user home directory
3. The Classpath

#### Starting multiple services on the same machine (Windows)

In order to manage multiple services on the same machine, the sc command must be used instead of the isserver command.

In this example we show how to start two isCOBOL Server services listening on different ports on the same machine.

1. Create two configuration files, e.g.

server1.properties:

```cobol
iscobol.port=10999
iscobol.as.fileserver.port=10997
iscobol.as.httpserver.port=10996
```

server2.properties:

```cobol
iscobol.port=10899
iscobol.as.fileserver.port=10897
iscobol.as.httpserver.port=10896
```

Note - the two snippets above show the basic configuration, they should be completed with the rest of settings that usually appear in a isCOBOL Server configuration. Notice that different ports for each isCOBOL Server feature are referenced in the two configuration files.

2. Create the two services as follows:

```cobol
sc create "isCOBOL Server #1" start= auto binPath= "C:\Veryant\isCOBOL_SDK2026R1\bin\isserver.exe -c \path\to\server1.properties"
 
sc create "isCOBOL Server #2" start= auto binPath= "C:\Veryant\isCOBOL_SDK2026R1\bin\isserver.exe -c \path\to\server2.properties"
```
