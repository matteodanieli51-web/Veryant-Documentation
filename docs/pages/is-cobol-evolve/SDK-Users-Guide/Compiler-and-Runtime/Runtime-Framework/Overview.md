## Runtime Framework

### Overview

Source code compiled with isCOBOL needs a Runtime Framework to run. The Runtime is the engine that runs the application. The Runtime Framework consists of a number of libraries that provide all the functionality required to run the application. There are two kinds of library: Java jar libraries and operating system native libraries.

This is the list of the Java jar libraries that compose the isCOBOL Runtime Framework:

| **Library** | **Description** |
| --- | --- |
| asm-9.6.jar<br>asm-commons-9.6.jar<br>asm-tree-9.6.jar | Bytecode manipulation framework.<br>These libraries are required for the Code Coverage feature. |
| barcode4j.jar | Generator for barcodes. |
| bcprov-jdk18on-1.78.1.jar | Bouncy Castle library used for PDF encryption. <br>If your programs don’t encrypt PDF files using either the ENCRYPTION attribute or the iscobol.print.attribute.encryption configuration property, you could safely remove this library. |
| charva.jar | Support for "green" terminals. |
| commons-codec-1.20.0.jar<br>commons-collections4-4.5.0.jar<br>commons-compress-1.28.0.jar<br>commons-io-2.21.0.jar<br>commons-math3-3.6.1.jar<br>curvesapi-1.08.jarlog4j-api-2.25.2.jar<br>log4j-core-2.25.2.jar<br>poi-5.5.1.jar<br>poi-ooxml-5.5.1.jar<br>poi-ooxml-lite-5.5.1.jar<br>SparseBitSet-1.3.jar<br>xmlbeans-5.3.0.jar | These libraries provide the ability to manage XLS and XLSX files.<br>They’re required by the Grid control export features. |
| commons-logging-api.jar | Implementations of commons-logging wrapper API. |
| commons-logging.jar | Implementatinos of commons-logging. |
| ctree-rtg.jar | ctreej interface. |
| org.eclipse.swt..jar | Default web-browser control implementation. |
| flatlaf-3.6.jar | Implementation of the Flatlaf look and feel. |
| image4j-0.7.2.jar | This library provides support for 1 and 32 bits .bmp files. |
| iscobol.jar | isCOBOL Compiler, Framework, Debugger and Application Server. |
| isprofiler.jar | isCOBOL Profiler. |
| isupdater.jar | isCOBOL Software Updater tool. |
| jacoco-core-0.8.11.jar | This library is required for Code Coverage and Profiler features. |
| javassist.jar | isCOBOL Profiler dependences. |
| jcalendar-1.4.jar | Date-entry control implementation. |
| jcommon-1.0.23.jar<br>jcommon-xml-1.0.23.jar<br>jfreechart-1.5.1.jar | This library allows you to create charts via java-bean technology. |
| jdom.jar | This library allows the COBFILEIO, EfdParser and XML2WRK to parse XML files. |
| jna-5.2.0.jar<br>jna-platform-5.2.0.jar | These libraries allow the C$SYSTEM routine to create a process on Windows.<br>They also allow the C$OPENSAVEBOX routine to display native file chooser dialogs on Windows.They’re required also by the default web-browser control implementation. |
| joe-1.3.jar | This library allows you to execute joe scripts. |
| openpdf-2.0.3v1.jar | This library allows you to generate PDFs for print files assigned to "-P PDF". |
| wow.jarwowax.jar | isCOBOL WOW support. |
| zxing-core-1.7.jar | Generator for QR codes. |

These libraries are installed in the isCOBOL lib folder on all platforms. All these libraries are portable to different platforms except for "swt-..jar" that includes native items and therefore is different on every operating system.

This is the list of native libraries included in the isCOBOL Runtime Framework:

| **Library** | **Description** |
| --- | --- |
| ctree | allow to interact with a c-tree server |
| dyncall | allows programs compiled without -cp option to call dynamic link libraries |
| dyncall_n | allows programs compiled with -cp option to call dynamic link libraries |
| flatlaf-3.6-<\platform> | implementation of the Flatlaf look and feel |
| iscobolc | allows programs compiled without -cp option to be called by C programs |
| iscobolc_n | allows programs compiled with -cp option to be called by C programs |
| Terminal | Curses implementation (native part) of Charva.<br>Note - This library is not available on the Windows 64 bit platform. |

On Windows systems these libraries are installed in the isCOBOL bin folder and have dll extension (e.g. bin\\dyncall.dll).

On Linux/Unix systems these libraries are installed in the isCOBOL native/lib folder, they have the lib prefix and so extension (e.g. native/lib/libdyncall.so).

On Mac OSX systems these libraries are installed in the isCOBOL native/lib folder, they have the lib prefix and jnilib extension (e.g. native/lib/libdyncall.jnilib).

A program compiled with isCOBOL can be executed with the following command:

```cobol
iscrun ProgramName
```

**Note** - On Windows this command should be launched from inside the isCOBOL Shell. Otherwise you need to set ISCOBOL and ISCOBOL\_JRE\_ROOT environment variables before using iscrun.

This command is a wrapper which automatically adds all of the JAR files listed above to the class path before executing java and passing *ProgramName* to it. When running on Windows, the following command can be used in the same way to call javaw.exe:

```cobol
isrun ProgramName
```

Javaw.exe runs the program without displaying the command line console window.

When using isrun.exe, since standard output and standard error are not available in this case, the console output printed on two files called "isrun_out.log" and “isrun_err.log” in the bin directory of isCOBOL.

Paths in *Program-Name* are considered only if [iscobol.code_prefix](\) is set. Relative paths in *Program-Name* are appended to the code-prefix paths.
