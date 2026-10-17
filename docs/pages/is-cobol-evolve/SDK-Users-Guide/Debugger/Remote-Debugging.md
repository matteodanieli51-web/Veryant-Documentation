## Remote Debugging

isCOBOL’s Debugger can be used in remote debugging scenarios, a benefit in these situations when you want to debug:

- to debug a servlet or a web service running under Tomcat or other servlet container,
- to debug a COBOL program running via webclient,
- to debug a COBOL program that is called by foreign languages like C or Java,
- to debug a program with character-based interface managed by CHARVA,
- to debug a remote program running in the isCOBOL Server.

Here are the basic steps to activating the remote debugger to debug a program in one of the above situations.

1. Compile the program(s) to be debugged with either [-d](../Compiler-and-Runtime/Compiler/Compiler-Options#common-options) option or [-dx](../Compiler-and-Runtime/Compiler/Compiler-Options#common-options) option.

2. Set the [iscobol.rundebug \*](../Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration) property in your run environment to either value 1 or 2:

| | |
| --- | --- |
| iscobol.rundebug=1 | The application will start and run immediately. The remote debug session will launch the debugger with the first program it finds that was compiled for debug, whether that program is the first program run (if the remote debugger is started before the application), the current program (if the remote debugger is started while the application is running), or a later debug-compiled program when it detects it. |
| iscobol.rundebug=2 | The runtime framework will start in debug mode, pausing to connect to a remote debugger before running the program. This is useful when all your programs are compiled for debug and you want to start your remote debugger at the very first line of the application. |
| | |

3. Start the remote debugger session on your desktop.

To start a remote debugging session, the isCOBOL Debugger needs to know the host name of the machine running the program to be debugged and the port number dedicated to the debugger connection. Use the following command:

```cobol
iscrun [ -d ] -r [ [ HostName ] Port ]
```

When running on Windows, the following command can also be used:

```cobol
isrun [ -d ] -r [ [ HostName ] Port ]
```

- The -d option can be omitted when -r is used.
- If *HostName* is omitted, then localhost is assumed.
- If *Port* is omitted, then 9999 is assumed.

**Note** - The debugger listens and runs on the TCP/IP port 9999. A different port number can be set via the the [iscobol.debug.port](../Compiler-and-Runtime/Configuration/Configuration-Properties#debugger-configuration) configuration property.

**Note** - In thin client environment you don’t need to use the remote debugger. You can debug the isCOBOL Server activity by running the isCOBOL Client with the -d option as explained in [Usage of isCOBOL Client](\), Format 6.
