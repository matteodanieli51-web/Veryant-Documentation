## REPLACE

### General Format

#### Format 1

```cobol
REPLACE  [ ALSO ] { { old-text BY new-text                } } ... ] .
                  { { {LEADING } literal-1 BY {literal-2} } }
                  { { {TRAILING}              {SPACE    } } }
                  { {                         {SPACES   } } }

```

#### Format 2

```cobol
REPLACE [ LAST ] OFF
```

### Syntax rules

1. *Old-text* and *new-text* may be any of the following:

A. A series of text words placed between "==" delimiters.

B. A numeric or nonnumeric literal.

C. A data name, including qualifiers, subscripts and reference modification.

D. Any single text word.

### General rules

1. *Old-text*:

A. Must contain one or more text words. Character-strings can be continued in accordance with normal source code rules.

B. Can consist solely of a separator comma or a separator semicolon

2. *new-text*:

A. Can contain zero, one, or more text words. Character strings can be continued in accordance with normal source code rules.

3. *Old-text* and *new-text* can contain any text words that can be written in source text.
4. The compiler processes REPLACE statements in source text after the processing of any COPY statements. COPY must be processed first, to assemble complete source text. Then REPLACE can be used to modify that source text, performing simple string substitution.
5. The text produced as a result of the processing of a REPLACE statement must not contain a REPLACE statement.
6. A given occurrence of the REPLACE statement is in effect from the point at which it is specified until the next occurrence of the REPLACE statement. The new REPLACE statement supersedes the text-matching established by the previous REPLACE statement unless the ALSO phrase is specified.
7. A format 2 REPLACE suspends all replacements currently in effect.
