## CONTINUE

### General Format

```cobol
CONTINUE
```

Alternative syntax

```cobol
;;
```

### Syntax rules

1. The CONTINUE statement may be used anywhere a conditional statement or an imperative-statement may be used.
2. Double semicolon can be used instead of the CONTINUE word.

### General rules

1. The CONTINUE statement has no effect on the execution of the runtime element.

### Examples

Continue in the next statement if condition is true

```cobol
if ws-age > 17 
   continue
else 
   display message "Not valid age to use this Credit Card Verification App!"
end-if
display message "Welcome to our Credit Card Verification App!"
```
