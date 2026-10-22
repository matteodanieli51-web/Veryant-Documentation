### PROGRAM-ID

The PROGRAM-ID special register returns the name of the current program.

#### General Format

```cobol
PROGRAM-ID
```

#### General Rules

1. This syntax is supported only in RM compatibility mode, so the [-cr](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) compiler option must be used.
2. PROGRAM-ID contains the name of the class file in which the program is implemented, stripped of the class extension.
