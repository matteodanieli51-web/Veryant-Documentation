## EXHIBIT

The EXHIBIT statement causes an (optionally conditional) display of the literals, and/or variables (optionally preceded by the variable name) specified in the statement.

### General Format

```cobol
EXHIBIT [NAMED] [CHANGED] {Literal-1    }  ...
                          {Identifier-1 }
```

### Syntax rules

1. CHANGED is treated as commentary.

### General rules

1. If NAMED is not used, each literal and variable value is displayed.
2. If NAMED is used, each literal is displayed, and each variable is displayed. Variables are preceded by "variable-name=" (where "variable-name" is replaced with the name of the variable in the EXHIBIT statement).

**Note** - this statement is supported only with the [-cv](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) compiler flag.

### Examples

Format 1 - Display a variable and its value

```cobol
       WORKING-STORAGE SECTION.
       77 my-var pic x(3) value "ABC".
 
       PROCEDURE DIVISION.
 
       MAIN.
           exhibit named my-var. |it will display: MY-VAR=ABC
           goback.
```
