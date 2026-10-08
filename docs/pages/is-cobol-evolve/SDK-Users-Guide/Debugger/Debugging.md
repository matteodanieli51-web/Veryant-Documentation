## Debugging Programs compiled with isCOBOL 2020R1 or previous versions

Prior to isCOBOL 2020 R2, the Compiler didn’t store the source code into the compiled class file, so it was necessary to direct the Debugger to the location of the source files. The Debugger loaded the source files separately while attaching a class.

If your programs have been compiled by an isCOBOL version 2020 R1 or previous, then it’s still necessary to direct the Debugger to the location of the source files. This is done through the iscobol.debug.code_perfix configuration property, which can be passed on the command line as follows:

```cobol
iscrun [ -J-Discobol.debug.code_prefix=SourcePaths ][ -d ] -r [ [ HostName ] Port ]
```

Where *SourcePaths* is a list of paths separated by the system path separator (";" on Windows, ":" on Unix).

If iscobol.debug.code_prefix is not set, then the Debugger looks for source files in the Classpath.

### Remote debugging programs compiled with isCOBOL 2020 R1 or previous versions

While debugging a remote runtime, the Debugger looks for source files on the local PC.

If the source files are on the remote machine instead, you can ask the remote runtime to send the source files through TCP/IP to the client. In order to activate this feature, set iscobol.debug.remote_source to true on the local PC and iscobol.debug.remote_source_enabled to true on the remote machine. The remote runtime will look for source files in its Classpath and the iscobol.debug.code_prefix setting.

#### Examples

- Example of remote debugging in thin client with automatic download of source files.

1. Start the server as follows:

```cobol
iscserver -c server.properties
```

2. Launch the Client as follows:

```cobol
iscclient -J-Discobol.debug.remote_source=1 -hostname <server-ip> -d MAIN_PROGRAM
```

Content of *server.properties*:

```cobol
iscobol.rundebug=2
iscobol.debug.remote_source_enabled=1
iscobol.debug.code_prefix=/path/to/cbl_files\n/path/to/copy_files
```

- Example of remote debugging of a character-based application (CHARVA) with automatic download of source files.

1. Start the application as follows on the server:

```cobol
iscrun -c runtime.properties -t MAIN_PROG
```

2. Run the following command on the local PC:

```cobol
iscrun -J-Discobol.debug.remote_source=1 -r <server-ip>
```

Content of *runtime.properties*:

```cobol
iscobol.rundebug=2
iscobol.debug.remote_source_enabled=1
iscobol.debug.code_prefix=/path/to/cbl_files\n/path/to/copy_files
```

- Example of remote debugging of an EIS servlet with automatic download of source files.

1. Add the following entries to *WEB-INF/classes/iscobol.properties*:

```cobol
iscobol.rundebug=2
iscobol.debug.remote_source_enabled=1
iscobol.debug.code_prefix=/path/to/cbl_files\n/path/to/copy_files
```

2. Navigate to the servlet’s URL with your favorite browser in order to trigger the execution of the underlying COBOL program,
3. Run the following command:

```cobol
iscrun -J-Discobol.debug.remote_source=1 -r <servlet-container-ip>
```
