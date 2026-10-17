## SKIP

The SKIP statements specify blank lines that the compiler should add when printing the source listing. SKIP statements have no effect on the compilation of the source text itself

### General Format

```cobol
SKIP1
SKIP2
SKIP3
```

### General Rules

1. The SKIP statement must be the only statement on the line. IBM DOS/VS COBOL requires these words to appear in Area B and can be terminated with a separator period.
2. The SKIP statement has no effect on the compilation of the source unit itself.
3. SKIP1 skips one line before the next line
4. SKIP2 skips two lines before the next line
5. SKIP3 skips three lines before the next line
