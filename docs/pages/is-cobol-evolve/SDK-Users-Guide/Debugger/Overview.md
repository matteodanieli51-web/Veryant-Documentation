# Debugger

## Overview

isCOBOL provides a visual source-level debugger. In order to debug programs, they must be compiled with either [\-d](../Compiler-and-Runtime/Compiler/Compiler-Options#common-options) option or [-dx](../Compiler-and-Runtime/Compiler/Compiler-Options#common-options) option. For example:

```cobol
iscc -d Options SourceCode
```

The following command starts a debugging session of the ProgramName program.

```cobol
iscrun -d ProgramName
```

When running on Windows, the following command can also be used:

```cobol
isrun -d ProgramName
```

**Note** - The Debugger takes advantage of some Compiler features, therefore the isCOBOL Compiler must be installed and licensed on the machine where the above commands are used.

### Debugging a multi-thread program

When the debugged program generates more threads, it’s possible to switch from one thread to another by choosing the desired thread at the bottom of the Run menu.

While the debugger is waiting for user input, all threads are blocked. When the debugger gives the control to the program, all threads run.
