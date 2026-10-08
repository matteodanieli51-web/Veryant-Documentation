## FREE

### General Format

```cobol
FREE Identifier-1 ...
```

### Syntax Rules

1. Identifier-1 Must be defined as USAGE POINTER.
2. If more than one Identifier-1 is specified in a FREE statement, the result of executing this FREE statement is the same as if a separate FREE statement had been written for each Identifier-1 in the same order as specified in the FREE statement.

### General Rules

1. If the pointer referenced by Identifier-1 identifies the start of storage that is currently allocated by an [ALLOCATE](./ALLOCATE) statement, that storage is released and the pointer referenced by Identifier-1 is set to NULL, the length of the released storage is the length of the storage obtained by the ALLOCATE statement, and the contents of any data items located within the released storage area become undefined.
2. If the pointer referenced by Identifier-1 contains the predefined address NULL or the address of storage that is not acquired by the ALLOCATE statement, no storage will be freed. The pointer Identifier-1 will be kept unchanged and the behavior is undefined.

### Examples

Free the memory associated to a pointer.

```cobol
       WORKING-STORAGE SECTION.
       ...
       77  PTR POINTER.
       ...
       PROCEDURE DIVISION.
       ...
           FREE PTR.
       ...
```
