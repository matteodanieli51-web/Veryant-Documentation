# Wrappers

Each isCOBOL product, from Compiler to Application Server, is identified by a java class.

The standard way to launch these classes would be by adding the library in which they're stored to the Classpath and by issuing the command:

```cobol
java <ClassName>
```

However, since this kind of approach would generate long commands and would require some efforts in the Classpath configuration, wrappers are provided along with isCOBOL.

These wrappers are identified by exe files on the Windows platform and by shell script files on other platforms.

They're stored in the isCOBOL bin directory.

When you launch a wrapper, the current directory ("."), all the jar libraries stored in the isCOBOL *lib* directory and all the jar libraries stored in the isCOBOL jars directory are automatically added to the Classpath, then your command is translated as follows:

```cobol
wrapper_name <Parameters>
```

becomes

```cobol
java iscobol_product_class <Parameters>
```

## Standard wrappers

The following table lists all the standard wrappers, which are available for all platforms, followed by the corresponding isCOBOL class:

| **Wrapper** | **Class** |
| :--- | :--- |
| cobfileio | com.iscobol.lib.COBFILEIO |
| cpgen | com.iscobol.compiler.CopyGen |
| cpk | com.iscobol.lib.CPK |
| edbiis | com.iscobol.easydb.EdbiIs |
| gife | com.iscobol.lib.GIFE |
| iscc | com.iscobol.compiler.Pcc |
| iscclient | com.iscobol.gui.client.Client |
| isconfig | com.iscobol.lib.ISCONFIG |
| iscbalancer | com.iscobol.balancer.LoadBalancer |
| isremotecc | com.iscobol.compiler.remote.server.Server |
| iscrun | com.iscobol.invoke.Isrun |
| iscserver | com.iscobol.as.AppServerImpl |
| iscupdater | com.iscobol.updater.SoftwareUpdater |
| isl | com.iscobol.lib.ISL |
| ismigrate | com.iscobol.lib.ISMIGRATE |
| iscmigrate | com.iscobol.lib.ISMIGRATE |
| issort | com.iscobol.issort.IsSort |
| jdbc2fd | com.iscobol.lib.JDBC2FD |
| jutil | com.iscobol.utility.Jutil |
| stream2wrk | com.iscobol.utility.Stream2Wrk |
| vudbccfg | com.iscobol.utility.VUDBCCHG |

All the above wrappers load the class from the iscobol.jar library.

Based on the above table, you see that, for example, using the command:

```cobol
iscc
```

is the same as using:

```cobol
java com.iscobol.compiler.Pcc
```

All wrappers force the operating system look and feel for the application by default when running on Windows. Instead, when running on other systems, they force the Java look and feel (Metal) by default.

Launching:

```cobol
iscrun PROG1
```

is the same as launching:

```cobol
iscrun --system PROG1
```

## WebClient wrappers

Wrappers for WebClient commands run the Main class included in the corresponding war library with some command line options:

| **Wrapper** | **Class** | **Library** |
| :--- | :--- | :--- |
| webcclient | main.Main -j jetty.properties | webclient/webclient-server.war |
| webcclient-admin | main.Main -j jetty.properties` | webclient/admin/webclient-admin-server.war |
| webcclient-and-admin | main.Main -j jetty.properties -serveradmin -pfa admin/webswing-admin.properties -adminctx /admin -aw admin/webswing-admin-server.war | webclient/webclient-server.war |
| webcclient-cluster | main.Main -j jetty.properties | webclient/cluster/cluster-server/webclient.war |
| webcclient-session | main.Main -j jetty.properties | webclient/cluster/session-pool/webclient.war |

## Windows wrappers

On Windows platform five additional wrappers are available:

| **Wrapper** | **Class** |
| :--- | :--- |
| iscclientd | com.iscobol.clientlstnr.ClientListener |
| isclient | com.iscobol.gui.client.Client |
| iscclientd | com.iscobol.clientlstnr.ClientListener |
| isrun | com.iscobol.invoke.Isrun |
| isupdater | com.iscobol.updater.SoftwareUpdater |

**Note** - isrun and isclient are the same as iscrun and iscclient except that they launch the isCOBOL class with javaw.exe instead of java.exe. In this way the java process does not keep the console busy.

For example, launching:

```cobol
isrun.exe PROGRAM
```

is the same as launching:

```cobol
javaw com.iscobol.invoke.Isrun PROGRAM
```

With these wrappers that don't display output on the console, if an unexpected exception occurs or if the program displays data upon sysout and syserr, two files named *wrapper*_out.log and *wrapper*_err.log (where *wrapper* can be *isrun* or *isclient* depending on the exe you launched) are updated in the isCOBOL bin directory.

### Windows wrappers for Virtualized DPI

On Windows platform the *bin* directory includes a subdirectory named *no_dpi_aware* with four additional wrappers:

| **Wrapper** | **Class** |
| :--- | :--- |
| iscclient | com.iscobol.gui.client.Client |
| isclient | com.iscobol.gui.client.Client |
| iscrun | com.iscobol.invoke.Isrun |
| isrun | com.iscobol.invoke.Isrun |

These executable files include a manifest without the entry *<dpiAware>true</dpiAware>*. The Windows system is informed that the executable is not DPI-aware and takes care of increasing the pixels size when running on a higher DPI. This approach ensures that the aspect ratio of the windows is perfectly maintained even when the font is a little blurred as a result.

These wrappers also automatically set the *sun.java2d.dpiaware* Java property to false.

To use these wrappers instead of the standard ones, change the %PATH% environment variable and place "%ISCOBOL%\bin\no_dpi_aware" before "%ISCOBOL%\bin".

## Class name normalization

Wrappers that take a program class name as parameter (e.g. iscrun, isrun, iscclient and isclient) take care of normalizing the name passed on the command line to be suitable for the Java runtime. They convert the name in upper-case, replace hyphens by underscore and strip the file extension.

For example, launching:

```cobol
iscrun Prog-1.class
```

is the same as launching:

```cobol
java com.iscobol.invoke.Isrun PROG_1
```

## The -J option

The -J option allows you to pass options to the JVM instantiated by the wrapper. Each option specified by -J is placed between “java” and the class name in the command generated by the wrapper. Refer to https://docs.oracle.com/javase/8/docs/technotes/tools/windows/java.html for the list of available options. The most popular Java options used on the command line are *-Dproperty=value* to specify either a Java system property or an isCOBOL configuration property and -Xmxn to increase the maximum amount of memory that the JVM can allocate.

### Example for Compiler

```cobol
iscc -J-Discobol.compiler.const.const1=1 prog1.cbl
```

becomes

```cobol
java -Discobol.compiler.const.const1=1 com.iscobol.compiler.Pcc prog1.cbl
```

### Example for Utilities

```cobol
gife -J-Discobol.gife.efd_directory=/dev/myapp/efd
```

becomes

```cobol
java -Discobol.gife.efd_directory=/dev/myapp/efd GIFE
```

### Example for Runtime

```cobol
iscrun -J-Xmx512m -c /myapp/conf PROG1
```

becomes

```cobol
java -Xmx512m com.iscobol.invoke.Isrun -c /myapp/conf PROG1
```

### Example for Debugger

When you run the Debugger you must pay attention in using the -J option because there are two different virtual machines involved:

- the java virtual machine that runs the Debugger
- the java virtual machine instantiated by the Debugger, that runs the COBOL program

Options passed through -J are passed to both virtual machines, while options passed without -J are passed only to the second java virtual machine.

The following command, for example, shows how to pass a low memory limit (512 MB) to the Debugger and an high memory limit (3 GB) to the COBOL program:

```cobol
iscrun -d -J-Xmx512m -Xmx3g PROG1
```

That becomes:

```cobol
java -Xmx512m com.iscobol.invoke.Isrun -d -Xmx3g PROG1
```

The internal class com.iscobol.invoke.Isrun, if the -d option is used, behaves as follows: settings specified before the -d option are passed to the Debugger JVM and to the program JVM, instead settings specified after the -d option are passed only to the program JVM.

### Example for Client

```cobol
iscclient -J-Xmx256m -hostname 192.168.0.133 -c /myapp/remoteconf PROG1
```

becomes

```cobol
java -Xmx256m com.iscobol.gui.client.Client -hostname 192.168.0.133 -c /myapp/remoteconf PROG1
```

### vmoptions files

On Windows, an alternative way to pass Java options is by editing the wrapper’s vmoptions file, where applicable.

Some wrappers are provided with a file with the same name and vmoptions extension. For example, *isbalancer.exe* is provided with *isbalancer.vmoptions* and *isremotecc.exe* is provided with *isremotecc.vmoptions*.

The vmoptions file is placed in the same folder as the wrapper and is automatically read without being specified on the command line.

Options passed through -J are appended to the options found in the vmoptions file.

Vmoptions files are particularly useful to pass Java options to Windows services, where there is no command line in which you can put your options.

Vmoptions files are text files that include a list of options. Every option is specified on a separate line. The # character comments the line. The options should be specified with the same syntax that you would use on the command line. The *-classpath* option can be followed by either "/p" or "/a", in this way the option value is prepended or appended to the default Class Path built by the wrapper, that includes the libraries stored in the isCOBOL’s "lib" and "jars" folders. The * character at the end of a path to assume “all jar files in that path” is not supported here; you have to specify the pathname of each single jar file.

For more information see for example [Service configuration](\) in [isCOBOL Evolve: Application Server](\).
