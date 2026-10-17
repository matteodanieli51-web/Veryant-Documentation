## Runtime Issues

Because the isCOBOL Compiler produces pure Java bytecode objects, mapping COBOL programs to Java classes, engineers can use any monitoring, logging, debugging and diagnostic tool that is available to the Java community. This includes everything discussed in Troubleshooting Guide for Java(TM) SE with HotSpot (TM) VM at [https://docs.oracle.com/javase/8/docs/technotes/guides/troubleshoot/index.html](https://docs.oracle.com/javase/8/docs/technotes/guides/troubleshoot/index.html).

Here are just some of the tools available: HPROF profiler, JConsole, jdb, jhat, jinfo, jmap, jps, jrunscript, jstack, jstat, jstatd, visualgc, and VisualVM.

isCOBOL Evolve also provides the following COBOL-oriented tools and features to help diagnose and resolve problems quickly:

- [isCOBOL IDE](./Runtime-Issues#iscobol-ide)
- [isCOBOL Debugger](./Runtime-Issues#iscobol-debugger)
- [isCOBOL Runtime Framework trace facility](./Runtime-Issues#iscobol-runtime-framework-trace-facility)
- [isCOBOL Compiler option to generate SMAP information for JSR 45 debugging](./Runtime-Issues#iscobol-compiler-option-to-generate-smap-information-for-jsr-45-debugging)
- [isCOBOL Abend Diagnostic Snapshot (ADS)](./Runtime-Issues#iscobol-abend-diagnostic-snapshot-ads)
- [Alt+Pause keyboard combination](./Runtime-Issues#altpause-keyboard-combination)

### isCOBOL IDE

Built on Eclipse, the isCOBOL IDE features a COBOL code editor, integrated debugger with remote debugging capability, the ability to debug COBOL and Java together and all of the other features available to the Eclipse community.

### isCOBOL Debugger

The isCOBOL graphical source-level debugger is written 100% in Java and is completely portable. The isCOBOL Debugger provides remote debugging capability with COBOL programs deployed in server and transaction processing environments. This keeps your application source code secure by maintaining it on the development machine, while debugging a program running on a remote test or production machine.

### isCOBOL Runtime Framework trace facility

The isCOBOL Runtime Framework supports different trace levels to allow you to follow the flow of execution with control over the level of detail that you see in the trace log.

### isCOBOL Compiler option to generate SMAP information for JSR 45 debugging

The isCOBOL Compiler is compliant with the JSR-45 specification ([http://jcp.org/en/jsr/detail?id=45](http://jcp.org/en/jsr/detail?id=45))

Including SMAP information in the COBOL object files allows you to debug COBOL programs using JSR-45 compliant debuggers such as Eclipse and the NetBeans IDE.

### isCOBOL Abend Diagnostic Snapshot (ADS)

The isCOBOL Runtime Framework can be configured to produce a detailed report, the Abend Diagnostic Snapshot (ADS), that describes the state of an application at the moment that an abnormal termination occurs. This report can be used to identify the cause of a problem after the fact.

As a matter of policy many enterprise IT organizations do not allow debugging on production machines. In these cases it is necessary to maintain a test environment that is carefully replicated from the production environment. It is critical to have one or more diagnostic capture facilities on the production machine that can provide enough information when a problem occurs to allow replication of that problem in the test environment. The isCOBOL ADS is one of the most important of these facilities because it provides all of the information available to the isCOBOL Runtime Framework at the point where an error occurs.

The ADS report contains the following information:

- The name of the exception that occurred along with the Java package and class that raised the exception
- The reason that the exception occurred as reported by the class that raised the exception
- The numeric code associated with the exception
- The name of the COBOL program, name of the paragraph, name of the COBOL source file and COBOL source line number of the code that was executing when the exception occurred
- Information about the particular COBOL operation that was executing when the exception occurred
- The COBOL call stack at the time the exception occurred, including the names of all COBOL programs in the stack, the names of the associated COBOL source files, and the line numbers in those source files of the particular CALL statement
- The date and time when the exception occurred
- The version of the isCOBOL compiler used to compile the COBOL program
- The command line arguments used to start the COBOL program
- The version of the isCOBOL Runtime Framework in use
- The version of the Java Runtime Environment in use
- The currently loaded COBOL programs
- A dump of COBOL working-storage memory, including each data-item name, offset, length, value and hexadecimal byte dump of the data-item contents

The report contains 3 major sections:

- General information about the program, such as the command-line parameters, the reason for the shutdown, and the line number where the shutdown occurred
- A call stack summary of each thread Detailed information about each program, including all the data values

The stack trace can be enhanced with important information about the state of the program at the moment the exception occurred. This further information is called "Abend Diagnostic Snapshot" (ADS). To enable the ADS, set the following boolean property:

```cobol
iscobol.exception.dump=1
```

The output of the stack trace (and, in the case, of the ADS) is by default shown in a message box, but this behavior can be changed setting the property iscobol.exception.message in the following way:

| | |
| --- | --- |
| iscobol.exception.message=0 | Exception is shown in a message box (default) |
| iscobol.exception.message=1 | Exception is shown on standard output |
| iscobol.exception.message=2 | Exception is shown on standard error |
| iscobol.exception.message=3 | Exception is written in a file whose name is in the form <prog_name\><number\>.ads.log |
| | |

In the last case, the file is created in the current directory. This behavior can be modified by setting the property iscobol.exception.prefix to change the destination directory and/or the initial part of the ADS file name. For example setting:

```cobol
iscobol.exception.prefix=/tmp/
```

will create the ADS files in the /tmp directory, while setting:

```cobol
iscobol.exception.prefix=xx
```

will create the ADS files in the current directory and their names will start with 'xx'.

This feature allows you to make a report to analyze the cause of an abnormal program shutdown. There are 3 properties:

| | |
| --- | --- |
| iscobol.exception.dump | boolean, enables the dump |
| iscobol.exception.message=3 | stores the exception details into a dump file |
| iscobol.exception.dumpfile | specifies the pathname of the dump file |
| | |

This is an example of dump file:

```
java.lang.ArrayIndexOutOfBoundsException caught! (1)
in program OVERRUN, paragraph MAIN_LOGIC
program MAINPROG, paragraph MAIN_LOGIC (Top of stack)
(com.iscobol.rts.Factory.myFill(Unknown Source))
(com.iscobol.types.CobolVar.setSpace(Unknown Source)) === Dump created: Thu Sep 25 14:10:41 CEST
2008 === Program: OVERRUN, compiled: 440, requires: 426 === Command line arguments:
=== isCOBOL Version: release 2008.2.0 build#440-20080919alpha === Java version: 1.6.0 Sun Microsystems Inc.
=== Current loaded programs ===
OVERRUN
MAINPROG
=== Memory dump ===
->01 RETURN-CODE,offset=0,length=8, value=0
00 00 00 00 00 00 00 00 "........"
 
->01 TRANSACTION-STATUS,offset=0,length=2
20 20 " "
 
-->02 TABLE-1-ITEM(1),offset=0,length=1
20 " "
```

### Alt+Pause keyboard combination

By pressing Alt+Pause when a graphical window is active, a message box is shown to provide information about the focus. When the user closes the message box, the Framework restores the focus on the window. This kind of operation is often useful to get rid of hung screens.

If the configuration property [iscobol.gui.native_name](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#gui_native_name) is set to true, the Screen Section name of the controls is shown in the message box produced by Alt+Pause. In thin client environment, the property must be set server-side.

If [iscobol.tracelevel](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#tracelevel) is set to a value of 512 or greater, complementary information is written to the log file specified by [iscobol.logfile](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#logfile) when Alt+Pause is pressed. It’s good practice to set [iscobol.logfile.append](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#logfile_append) to true. In thin client environment the client-side log file is updated, so the three properties must be set client-side.

#### How it works

Every event that occurs in a client/server environment is sent to the server, which then manages the event. For example, when the user clicks on a push button, the client sends a GOTO event and a CLICKED event to the server. So that multiple events are not sent at the same time (i.e. if the user clicks quickly on more push-buttons) the isCOBOL runtime locks the keyboard before sending the event to the server and unlocks the keyboard when the event has been managed from the server.

When [iscobol.tracelevel](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#tracelevel) is set to a value of 512 or greater, the isCOBOL runtime traces the activation and deactivation of the keyboard in the log. This kind of information is important to address focus errors where the active window appears frozen. In these circumstances, a special message box displays showing some information about the focus when ALT+PAUSE is pressed. The same information is written in the log file. After ALT+PAUSE is pressed, the runtime also starts to log the focus changes on the windows and the events that are sent to the client.

These same rules are also true in stand-alone runtime mode.

#### Alternative key

The Pause button may not be available on your keyboard. In this case, it’s possible to assign the same function to another key. The chosen key must be assigned with the exception value 65534. For example, in order to use F5 as replacement for Alt+Pause, include the following entry in the configuration:

```cobol
iscobol.key.f5=exception=65534
```
