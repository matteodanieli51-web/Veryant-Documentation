## Moving from Fat Client to Thin Client

This chapter provides guidelines for transitioning from a fat client environment to a thin client environment.

### Concepts

In a fat client environment the server is used only for file hosting. The server hosts the data files, the program objects and possibly also the runtime executables, but the runtime process runs on every single client PC, so the client machines are responsible for the processing. Files are shared between the server and the clients via network share or file servers. This kind of architecture is not optimized and is more difficult to maintain.

In a thin client environment instead the server does most of the work. The server hosts data files, program objects and runtime executables and it’s also responsible for the processing. Client machines only manage the user interface. Files are accessed locally on the server. This kind of architecture is more optimized and easier to maintain.

### Why should you move from Fat Client to Thin Client?

There are some advantages in performing this change:

- better performance, as the elaboration is performed server-side and the server hardware is usually more powerful than the client PC hardware; also accessing data files locally on the server is faster than accessing the same files via network share or file server,
- memory saving, as class definitions and string constants are kept in memory on the server and shared between multiple instances of the program run by different clients,
- web enablement, as a thin client application can run in a web-browser via the WebClient technology (see [isCOBOL Evolve: WebClient](../../../is-cobol-web-client/iscobol-webclient) for more information).

### Issues that you should be aware of

Some application concepts, like printing, have different rules between fat client and thin client. Below is a list of the most common differences between the two environments along with some advice on how to deal with these differences.

#### Printing

In a fat client environment the runtime sees only the printers installed on the client PC. In a thin client environment instead, the runtime sees both server printers and client printers. By default the COBOL application works with the client printers, but you can switch it on the server printers through the [WINPRINT-SET-PRINTER-AS](\) function.

#### User specific files

Some COBOL applications create files that are specific for the user that is running the application. Usually they’re temporary files and they’re created on the local drive when running in a fat client environment (e.g. "C:\\Temp\\work.tmp"). Every client has its own local drive so there is no conflict. After moving to a thin client environment, the local drive is on the server and therefore it’s shared among all the connected clients. A little code change is required in this case: the file names must be made unique, for example by including the client machine name (or any other info that you can retrieve by calling the [A$CURRENT_USER](\) routine) in the path. For example, instead of having "/tmp/work.tmp", use "/tmp/client1/work.tmp", "/tmp/client2/work.tmp", etcetera.

#### Opening files with the associated application

The [C$DESKTOP](\) routine and the [C$EASYOPEN](\) routine open a file with the associated application on the same machine where the runtime is running. In a thin client environment this would cause the associated application to be launched on the server, without possibility for the user to interact with it. Set the csFlag parameter to 1 to open the file on the client machine.

#### Processing files stored on the client PC

The COBOL application may require the user to load a file stored on the client PC. Let’s think for example about a CSV file that includes data to be imported in the application database. The COBOL application asks the user to provide the CSV file location via the [OPENSAVE-OPEN-BOX](\) function, then opens the CSV file for input, reads it and writes the data to the proper indexed data file. In a fat client environment this processing is completely performed on the local PC using client paths (e.g. read "C:\\Downloads\\orders\_may\_2019.csv" and write "K:\\data\\orders"). In a thin client environment instead, since the processing is performed server side, you need to transfer the CSV file to the server before reading it. It can be done via the [C$COPY](\) routine, e.g.

```cobol
CALL "C$COPY" USING "@[display]:C:\Downloads\orders_may_2019.csv"
                    "/tmp/orders_may_2019.csv"
```

After the call to C$COPY, the COBOL application can transfer data (E.g. read "/tmp/orders_may_2019.csv" and write "/opt/myapp/data/orders").

The same consideration can be made for the opposite scenario, where the user is prompted to save a file via the [C$PARAMSIZE](\) function. The user will choose a client side path, but the file is on the server, so the program must download it to the client via the [C$COPY](\) routine, e.g.

```cobol
CALL "C$COPY" USING "/tmp/download_me"
                    "@[display]:C:\Downloads\download_me"
```

**Note** - In a thin client environment the [C$OPENSAVEBOX](\) routine shows only client paths, it doesn’t give the client access to paths on the server.

#### File case

This difference affects environments with a Linux/Unix server and Windows clients. In fat client the files are searched with Windows rules, so they’re searched in a case insensitive way. In thin client instead, since files are accessed locally on the server, Unix rules apply and the file case matters. Let’s make a practical example: we have a path on the server, "/opt/myapp/data", that the client PC sees as "K:\\data" via Samba. In this path we have a file named "file1". In fat client the runtime can open successfully all these full names: "K:\\data\\file1", "K:\\DATA\\FILE1", "K:\\Data\\File1", etcetera. In thin client it must use exactly "/opt/myapp/data/file1" as the following full names would be invalid: "/opt/myapp/DATA/FILE1", "/opt/myapp/Data/File1", etcetera. The [iscobol.file.case](../Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) configuration entry may help in addressing this issue.

#### Library routines and external functions

Library routines that interact with the user interface or with printers automatically work on the client PC when running in a thin client environment. All the other routines, instead, work on the server by default. You can use the CALL CLIENT statement to use a specific routine on the client PC, for example:

```cobol
*retrieve information about a file stored on the server       
 CALL "C$FILEINFO" USING "/tmp/file1"
                        fileInfo.
 
*retrieve information about a file stored on the client       
 CALL CLIENT "C$FILEINFO" USING "C:\Temp\file1"
                                fileInfo.
```

Refer to [Library Routines](\) for the list of routines that work on the client PC by default and the list of routines that can be called with a CALL CLIENT statement.

External C functions implemented in shared libraries are executed on the server machine by default when running in a thin client environment. You can use the CALL CLIENT statement to call a C function on the client PC, assuming that the shared library is installed on the client PC.

Ensure that C functions executed on the server are thread safe. If they’re not thread safe, consider creating a separate task for each connected client by setting [iscobol.as.multitasking](../Compiler-and-Runtime/Configuration/Configuration-Properties#iscobol-server-thin-client-configuration) to 1.

#### Java classes and Java-Beans

In a thin client environment, the user interface of a java-bean is displayed on the client PC while the backend processing is performed on the server. For this reason, the java-bean libraries must be installed on both client and server.

It is possible to invoke static methods of Java classes installed on the client PC, see [callStaticMethod](\) for details.

If you need to invoke non-static methods of Java classes installed on the client PC, create a COBOL program that invokes these methods, install the COBOL program on the client PC and call it with a CALL CLIENT statement.

#### Memory and CPU usage

In a thin client environment, the JVM behind the isCOBOL Server creates a new thread for each connected client. This makes the JVM use more memory and CPU than a JVM running the isCOBOL Framework in a stand-alone installation. Refer to [Measuring the load of your COBOL application](\) for advice about the tuning of the Server’s JVM.

### Additional issues introduced by WebClient

After moving from fat client to thin client, a possible next step is to let clients connect via web browser. The advantage of this solution is that neither Java nor isCOBOL need to be installed on the client machines, the user needs just a web browser.

This kind of solution is provided via WebClient. For more information about this product, read [isCOBOL Evolve: WebClient](../../../is-cobol-web-client/iscobol-webclient).

There are some differences between a standard thin client environment and a WebClient environment. Read [Known limitations and differences between WebClient and Thin Client](../../../is-cobol-web-client/Known-limitations-and-differences-between-WebClient-and-Thin-Client) for more information.

### Retrieving the current runtime environment

Given the information provided in this chapter, it’s important to know what’s the current runtime environment in order to perform specific operations or not. It is possible to know if you’re running in thin client by checking the IS-REMOTE condition in the TERMINAL-ABILITIES group item, for example:

```cobol
 ACCEPT TERMINAL-ABILITIES FROM TERMINAL-INFO.
 IF IS-REMOTE
    | running in thin client
 ELSE
    | not running in thin client
 END-IF.
```

It is possible to know if you’re running with WebClient by calling the [C$GETRUNENV](\) routine, for example:

```cobol
 CALL "C$GETRUNENV".
 IF RETURN-CODE = RUNENV-WEB-CLIENT
   | running in WebClient
 ELSE
   | not running in WebClient
 END-IF.
```

Add the [iscobol.def](\) copybook to the Working-Storage for the definition of the items referenced in the above code snippets.

### Keeping versions synchronized

It’s important that the isCOBOL Client and isCOBOL Server are the same version, otherwise the connection fails with this error:

```cobol
ERROR: Client release (n1) is incompatible with Application Server (n2)
```

You can consider to set up and [Automatic Client update](../../../is-cobol-AS/Automatic-Client-update) in order to keep the Client versions syncronized with the Server version.
