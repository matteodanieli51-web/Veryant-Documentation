#### Static Method

The runtime framework searches for static C functions in a library named stacall (e.g. stacall.dll on Windows, libstacall.so on Linux) for COBOL programs compiled without the [\-cp](\) option and a library named stacall_n (e.g. stacall_n.dll on Windows, libstacall_n.so on Linux) for COBOL programs compiled with the [\-cp](\) option.

The folder native/src in the isCOBOL installation directory includes the necessary items to build this library.

Add the code of your static functions to the file “usercall.c”, then build the library following the instructions below.

Make sure that the directory containing the stacall library is available in the operating system library search path, e.g. LD_LIBRARY_PATH on Linux, current directory or PATH on Windows

##### Building Stacall on Unix/Linux

1. Edit the *Makefile* and change the value of the JAVA_HOME variable according to the location of your JDK.
2. Run the following command:

```cobol
make -f Makefile
```

The command generates both libstacall.so and libstacall_n.so.

##### Building Stacall on Windows

1. Open either the stacall or the stacall_n project depending on the library you wish to generate.
**Note** - these projects were made using Microsoft Visual Studio 2008. An older version of Visual Studio will fail to open them, while a newer version will trigger a project conversion.
2. In *Project -> Properties -> C++ > General*, change the JDK path in the “Additional Include Directories” field in order to match your JDK installation.
3. Build the project.
