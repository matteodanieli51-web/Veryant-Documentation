## NEXT SENTENCE

### General Format

```cobol
NEXT SENTENCE
```

### Syntax Rules

1\. A NEXT SENTENCE statement is allowed anywhere if either [-ca](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options), [-cm](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) or [-cr](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) compiler flags are used. Without these flags, a NEXT SENTENCE statement is allowed only anywhere a conditional statement is allowed.

### General Rules

1. A NEXT SENTENCE statement transfers the flow of execution to the logically next COBOL verb following the next period.

### Examples

Continue execution after the if statement

```cobol
if 1 = 1 
   next sentence
else 
   display "this cannot ever be displayed"
end-if.  *> The period here is mandatory for the next 
         *> sentence to know where to continue
display "hello".
```
