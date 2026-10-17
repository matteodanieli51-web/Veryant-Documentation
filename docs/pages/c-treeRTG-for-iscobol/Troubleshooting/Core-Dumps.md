## Core Dumps

In the rare case of a crash of the c-tree Server executable, you might look for core dumps in the c-tree Server’s directory. These files could be useful for support technicians to understand the cause of the crash, so collect them before contacting the technical support.

### Windows

On Windows, look for files with mdmp extension, i.e.

```cobol
stack1036_01.mdmp
```

### Linux / Unix

On Linux / Unix systems, by default a core dump file is named "core", but the system can be configured to define a template that is used to name core dump files. The creation of core dumps might also be disabled in the system in order to save disc space.

Refer to your Linux distro documentation for information about how to enable and configure the creation of core dumps.
