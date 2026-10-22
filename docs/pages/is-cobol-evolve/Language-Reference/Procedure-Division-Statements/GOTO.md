## GO TO

#### Format 1

```cobol
GO TO Procedure-Name-1
```

#### Format 2

```cobol
GO TO { Procedure-Name-1 } ... DEPENDING ON Identifier-1
```

### Syntax rules

1. Identifier-1 shall reference a numeric elementary data item that is an integer.

### General rules

1. When a GO TO statement represented by format 1 is executed, control is transferred to procedure-name-1.
2. When a GO TO statement represented by format 2 is executed, control is transferred to procedure-name-1, etc., depending on the value of identifier-1 being 1, 2, ... , n.

### Examples

Format 1 - Go to a paragraph if a condition is true

```cobol
compute-int section.
validate.
  if ws-amount > 0 go to compute-interest
  else go to exit-compute.
 
compute-interest.
  compute ws-interest = ws-amount * ws-rate / 100 / 12
  move ws-interest to loan-interest
  .
 
exit-compute.
  exit.
```

Format 2 - Go To a paragraph depending on menu option selected

```cobol
process-menu section.
accept-option.
  accept ws-option
  go to op1 op2 op3 depending on ws-option.
 
op1.
  display message "processing op1"
  go to process-exit.
 
op2.
  display message "processing op2"
  go to process-exit.
 
op3.
  display message "processing op3"
  go to process-exit.
 
process-exit.
  exit.
```
