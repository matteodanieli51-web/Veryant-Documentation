## NOTE

### General Format

```cobol
NOTE text
```

### Syntax Rules

1. Text can be any combination of characters from the computer character set.

### General Rules

1. If the NOTE statement is the first sentence of a paragraph, it must not be followed by any text and it corresponds to an EXIT PARAGRAPH statement.
2. If a NOTE statement appears as other than the first sentence of a paragraph, text up to the next separator period is treated as comment.

**Note** - this statement is supported only with the [-cv](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) compiler flag.

### Examples

Having a paragraph, p1, with a note only as contents, having another paragraph, p2, with a note in the middle

```cobol
procedure division.
main.
  perform p1
  perform p2
  goback.
 
p1.      
  note
  display message "This message will not appear"
  .
 
p2.
  display message "Entering p2".
  note This is commentary
  until the next period
  is found.
  display message "Leaving p2"
  .
```
