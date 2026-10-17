## COMPUTE

### General Format

```cobol
COMPUTE { Result-1 [ROUNDED]  } ... = Arithmetic-Expression 
 
  [ ON SIZE ERROR Imperative-Statement-1 ] 
 
  [ NOT ON SIZE ERROR Imperative-Statement-2 ] 
 
[END-COMPUTE]
```

### Syntax rules

1. Result-1 shall reference either an elementary numeric item or an elementary numeric-edited item.

### General rules

1. An arithmetic expression consisting of a single fixed-point numeric literal or a single fixed-point numeric data item evaluates to the exact value of that literal or identifier, before the application of any rounding, truncation, or decimal point alignment applicable for the COMPUTE statement and mode of arithmetic in effect.
2. Evaluation consists of determining the value of the arithmetic expression.

### Examples

Compute arithmetic expression, leave the result in num-1

```cobol
pute num-1 = num-2 * interest-rate / 100 / 12
```

Compute arithmetic expression, leave rounded result in num-1 and validate if result fits in num-1 defined size.

```cobol
compute num-1 rounded = num-2 * interest-rate / 100 / year-days
  on size error display message "The last computation did not fit in num-1!"
  not on size error display message "new value of num-1 : " num-1
end-compute
```
