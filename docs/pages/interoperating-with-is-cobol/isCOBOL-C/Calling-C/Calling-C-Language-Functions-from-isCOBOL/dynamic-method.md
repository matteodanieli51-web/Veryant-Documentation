#### Dynamic Method

These are the steps to use the Dynamic method of calling external language routines:

- Create a shared object library (or DLL on Windows) containing the routines; e.g. “myroutines.so” (or "myroutines.dll" on Windows)
- Make sure that the directory containing this library is listed in the operating system library search path variable setting; e.g. LD_LIBRARY_PATH, LIBPATH or SHLIB_PATH (or current directory or PATH on Windows).
- Add the $ISCOBOL/native/lib (or $ISCOBOL/bin on Windows) directory to the same environment variable. This directory contains the file “libdyncall.so” (or dyncall.dll on Windows) which is the isCOBOL runtime framework dynamic call interface.

**Note** - for modularity, Veryant recommends using a different directory for user-created shared libraries.

Then Either

- Set the iscobol.shared_library_list property to specify the shared libraries to be used. e.g. “iscobol.shared_library_list=myroutines.so”

**Note** - multiple library names must be separated using the newline character, "\n", or the platform-specific separator; for UNIX platforms use the colon “:” character, for Windows use semi-colon “;”

-or-

- Load myroutines.so in the program logic using the CALL statement:

```cobol
CALL "myroutines.so".
```

The isCOBOL runtime framework will then load “myroutines.so” and make the routines available for CALLing.

In case the function in the shared library is named the same way as the library itself, it can be called directly. Consider the following statement for example.

```cobol
CALL "test" USING Param-1.
```

If the test function is included in libtest.so (or test.dll on Windows) shared library, there’s no need to call the shared library or to add it to iscobol.shared_library_list configuration property. The isCOBOL Framework will load the library automatically. Otherwise, if the function name does not match with the library name, it’s necessary to load the library through CALL or iscobol.shared_library_list before using its functions.

If the function name has the same name of the native library, you can call the function directly and the isCOBOL Framework will automatically load the library in memory.

For example, with the following statement

```cobol
CALL "foo" USING Param-1.
```

the isCOBOL Framework tries to load the foo library (foo.dll on Windows, libfoo.so on Unix), unless the library is already loaded in memory, and then calls the foo function passing Param-1 to it.

isCOBOL allows to pass up to 255 parameters to a C function.
