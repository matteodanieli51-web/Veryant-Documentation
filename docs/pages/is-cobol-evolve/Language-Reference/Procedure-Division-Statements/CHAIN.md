## CHAIN

### General Format

```cobol
CHAIN program-name [ USING {parameter} ... ]
 
  [ ON {EXCEPTION} statement ]
       {OVERFLOW }
 
[ END-CHAIN ]
```

### Syntax Rules

1. *program-name* is a nonnumeric literal or an alphanumeric data item.
2. *Parameter* is any data item including level-88 or a nonnumeric literal. There are no limits on the number of *parameters* that may be specified.
3. *Statement* is an imperative statement to be used if the CHAINed program can not be loaded.

### General Rules

1. program-name is executed in a new logical run unit.
2. If the USING phrase is specified, each parameter is transferred to *program-name* and is mapped to the corresponding CHAINING argument in the PROCEDURE DIVISION phrase.

### Exmaples

Call a program terminating the current run unit and starting a new one

```cobol
chain "program1"
```
