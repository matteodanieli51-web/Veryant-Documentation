## PROCESS

### General Format

```cobol
{CBL       } options
{PROCESS   }
```

### Syntax Rules

1. CBL and PROCESS are synonym.

### General Rules

1. The [-cv](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) option is required in order to compile this syntax.
2. PROCESS must be located before the IDENTIFICATION DIVISION if present, otherwise before PROGRAM-ID.
3. *Options* must appear in the same line.
4. Multiple PROCESS statements can be used.
5. The PROCESS statement is ignored by the Compiler. The syntax is compiled only for compatibility purposes.
