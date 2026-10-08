# Hook program

The isCOBOL Server provides the ability to define a hook.

A hook is a program that is automatically executed when a Client starts and when it exits.

This feature provides entry points to define additional operations that should be done for each client session, for example a custom logging of thin client activity.

The hook program is defined through the [iscobol.as.hook](../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#iscobol-server-thin-client-configuration) property.

For example, if you want the Application Server to run the program MYHOOK for each thin client session, you will set the following entry in the server configuration:

```cobol

```

The hook program must be found in the server Classpath, it's never loaded from [iscobol.code_prefix](../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration) paths.

The hook program can retrieve useful information about the client session by inquiring the following configuration properties:

| Property Name | Type | Value |
| --- | --- | --- |
| [iscobol.as.info.entering](../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#iscobol-server-thin-client-configuration) | numeric | 1 -> Program starting<br>0 -> Program exiting |
| [iscobol.as.info.userid](../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#iscobol-server-thin-client-configuration) | numeric | user ID |
| [iscobol.as.info.username](../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#iscobol-server-thin-client-configuration) | alphanumeric | user name |
| [iscobol.as.info.program](../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#iscobol-server-thin-client-configuration) | alphanumeric | called program |
| [iscobol.as.info.arguments](../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#iscobol-server-thin-client-configuration) | alphanumeric | arguments of the program |
| [iscobol.as.info.host](../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#iscobol-server-thin-client-configuration) | alphanumeric | client host address |

In addition, the program can retrieve the client thread id by calling the [A$GETTHREAD](\) library routine.

The installed sample, available in $ISCOBOL_HOME/sample/as/hook directory, shows two common useful usages of this feature:

1. Creating a custom log that traces login time and logout time of each client session.
2. Performing an automatic shutdown of the Application Server after a specific time-out if no client is still connected.

To test it, go to the sample/as/hook folder and launch:

```cobol
    iscserver
```

This will start the Application Server, reading the iscobol.properties file stored in the same directory, that contains the as.hook setting.

Now, launch the administration panel from a client. If you launch it from the same pc, it's enough to use:

```cobol
    iscclient -panel
```

If you launch it from a different pc, use:

```cobol
iscclient -hostname ip-address -panel
```

Where *ip-address* is the IP address of the machine on which you started the Application Server.

Close the panel and look in the sample/as/hook folder, on the server. A new file named access.log will be there. If you edit it, you'll see something similar to this:

```cobol
[001 ENTER - 31/03/2010 11:01:10] 00000 - admin - ASA$GPANEL - 127.0.0.1
[001 EXIT - 31/03/2010 11:03:24] 00000 - admin - ASA$GPANEL - 127.0.0.1
```

If you wait for three hours without connecting anymore, the Application Server will automatically shut down, with an exit status of 1.

This is useful if you plan to periodically re-start the Application Server when no one is working on it, in order to clean up memory.

The time-out of three hours is configured by using the following constant in the MYHOOK source code:

```cobol
78 RUNNINGHOURS value 3.
```

The special exit status (different than 0) that allows you to intercept if the Application Server was shut down by the hook program and not by the administrator user is set by using the following statement in MYHOOKTIMER source:

```cobol
java-lang-System:>exit(1).
```

**Note** - only thin clients trigger the execution of the hook program. Other isCOBOL Server client connections such as remote calls, file server access and update requests to the HTTP server do not trigger the execution of the hook program.
