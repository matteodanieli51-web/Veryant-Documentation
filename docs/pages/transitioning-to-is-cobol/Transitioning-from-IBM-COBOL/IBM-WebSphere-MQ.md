## IBM WebSphere MQ

IBM WebSphere MQ is messaging middleware designed to enable application integration.

isCOBOL supports the shared libraries provided by IBM WebSphere MQ.

The isCOBOL runtime can load platform-specific shared libraries, and then COBOL programs can call the necessary WebSphere MQ routines.

To load the shared libraries at runtime startup, set the [iscobol.shared_library_list *](\) configuration property.

### Windows

```cobol
iscobol.shared_library_list=/path/to/mqic32.dll
```

### Linux/Unix

```cobol
iscobol.shared_library_list=/path/to/libmqic_r.so:/path/to/libmqmcs_r.so
```
