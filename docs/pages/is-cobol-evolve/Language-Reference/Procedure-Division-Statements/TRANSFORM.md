## TRANSFORM

### General Format

```cobol
TRANSFORM identifier-1 CHARACTERS FROM pattern-1 TO pattern-2
```

### Syntax rules

1. Identifier-1 shall reference either an alphanumeric or national group item or an elementary item described implicitly or explicitly as usage display or national.
2. Pattern-1 and pattern-2 shall reference an elementary item described implicitly or explicitly as usage display or national.

### General rules

1. OS/VS COBOL supported the TRANSFORM statement and has been replaced by INSPECT CONVERTING statements. isCOBOL supports either statement.
2. The [-cv](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) compiler option is required to compile this statement.

### Examples

```cobol
77  DATA-T     PICTURE X(9) VALUE "ABCXYZCCC"
  . . .
    TRANSFORM DATA-T FROM "ABC" TO "CAT"
```

The above OS/VS COBOL TRANSFORM statement evaluates each character, changing each A to C, each B to A, and each C to T.

After the TRANSFORM statement is executed, DATA-T contains "CATXYZTTT".
