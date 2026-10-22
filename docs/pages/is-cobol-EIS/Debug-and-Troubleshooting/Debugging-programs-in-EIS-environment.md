## Debugging programs in EIS environment

To debug programs in an EIS environment, a remote debug must be performed: the isCOBOL Graphical Debugger is launched separately and attaches the isCOBOL runtime session in the servlet.

### Debug in the IDE

The easiest way to debug programs in EIS environment is through the IDE.

If you’re developing your web application with the IDE, you can use IDE functions to start debugging.

To debug a servlet or a web service:

1. Right click on the project name in the isCOBOL Explorer.
2. Choose *Debug As > isCOBOL EIS Servlet* from the pop-up menu.

To debug a WebDirect application:

1. Right click on the program name in the isCOBOL Explorer.
2. Choose *Debug As > isCOBOL EIS WebDirect* from the pop-up menu.

The IDE will take care of performing all the necessary operations, i.e. start the embedded Jetty servlet container, create a temporary webapp, start the webapp, start a web browser and launch a debugger. No further action is required of the user; the debugger will start after a few seconds.

### Debug in Tomcat or other servlet containers

To debug programs that are running in a servlet container like Tomcat:

1. Be sure that the programs are compiled in debug mode, so either with [-d](../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#d) or [-dx](../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#dx).

2. Have the following setting in the webapp configuration (*WEB-INF/classes/iscobol.properties*):

```cobol
iscobol.rundebug=1
```

3. Launch the isCOBOL Graphical debugger from a command prompt using this command:

```cobol
isrun -r <serverip> [<debugport>]
```

**Note** - if the servlet container is running on the same machine where you launch the debugger and you didn’t configure a custom port for remote debuggers, you can use this simpler command:

```cobol
isrun -r
```

4. Use a web browser like Chrome, Edge or Firefox, or a HTTP client like PostMan or SoapUI to perform requests to the web application.

As soon as the first COBOL program is loaded, you will see its code in the debugger.

**Note** - there can be only one debug session in the servlet container.
