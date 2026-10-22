### The Library Path

In order for the JVM to find shared libraries and shared objects, they must be located in a directory contained in the library path.

The JVM looks for the library path by inquiring a system dependent environment variable. The below table shows the most common ones:

| **Operating System** | **Library file extension** | **Environment Variable** |
| --- | --- | --- |
| AIX | *.so | LIBPATH |
| HP-UX Itanium | *.so | LD_LIBRARY_PATH |
| HP-UX PA-RISC | *.sl | SHLIB_PATH |
| Linux | *.so | LD_LIBRARY_PATH |
| Mac OS X | *.jnlib | DYLD_LIBRARY_PATH |
| SCO | *.so | LD_LIBRARY_PATH |
| Solaris | *.so | LD_LIBRARY_PATH |
| Windows | *.dll | PATH |
