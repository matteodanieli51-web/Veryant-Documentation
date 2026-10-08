# isCOBOL and C

## Calling C Language Functions and Other External Routines

### Introduction

The ability of programs compiled with isCOBOL to interact with external routines, such as C language functions, is fully supported and described in this document.

Programs compiled with isCOBOL can easily call external language routines without the need for code changes, and it is unnecessary to know anything about Java Native Interface (JNI) technology.

Environment variables and isCOBOL runtime framework properties are adjusted to point the isCOBOL runtime framework to functions that are available in statically-linked or dynamically-linked libraries.

Directories containing the libraries must be specified in the operating system library search path variable, such as LD_LIBRARY_PATH, LIBPATH, SHLIB_PATH or PATH. See the man page for dlopen() on UNIX/Linux or MSDN "search path" for Windows.

**NOTE** - isCOBOL Runtime Framework Property, Framework Property and Property have the same meaning. They refer to runtime configuration variables, known on the Java platform as "properties", which can be set before or during program execution.
