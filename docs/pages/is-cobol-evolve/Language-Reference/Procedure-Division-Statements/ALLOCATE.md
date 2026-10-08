## ALLOCATE

### General Format

```cobol
ALLOCATE { Arithmetic-Expression-1 CHARACTERS } [ INITIALIZED ] [ RETURNING Identifier-2 ]
         { Identifier-1                       }
```

### Syntax Rules

1. Identifier-1 must be a level-01 or level-77 item defined in the LINKAGE SECTION. If Identifier-1 is specified, the RETURNING phrase can be omitted. Otherwise, the RETURNING phrase must be specified. Identifier-1 cannot be reference modified and cannot be a group item that contains an unbounded table.
2. Identifier-2 must be defined as USAGE POINTER.

### General Rules

1. Arithmetic-Expression-1 Specifies a number of bytes of storage to be allocated.

A. If Arithmetic-Expression-1 does not evaluate to an integer, the result is rounded up to the next whole number.

B. If Arithmetic-Expression-1 evaluates to 0 or a negative value, the data item referenced by Identifier-2 is set to the predefined address NULL.

2. The INITIALIZED phrase initializes the allocated storage.

A. If the INITIALIZED phrase is not specified, the content of the allocated storage is undefined.

B. If both Arithmetic-Expression-1 and the INITIALIZED phrase are specified, all bytes of the allocated storage are initialized to binary zeros.

C. If both Identifier-1 and the INITIALIZED phrase are specified, the allocated storage is initialized as if an INITIALIZE Identifier-1 WITH FILLER ALL TO VALUE THEN TO DEFAULT statement were executed.

3. If the specified amount of storage is available for allocation:

A. If the RETURNING phrase is specified, the data item referenced by Identifier-2 is set to the address of that storage.

B. If Identifier-1 is specified, the address of the 01 or 77 LINKAGE SECTION data item referenced by Identifier-1 is set to the address of that storage, as if the "SET ADDRESS OF Identifier-1 TO address-of-obtained-storage" statement was used.

4. If the specified amount of storage is not available for allocation:

A. If the RETURNING phrase is specified, the data item referenced by Identifier-2 is set to the predefined address NULL.

B. If Identifier-1 is specified, the address of the 01 or 77 LINKAGE SECTION data item referenced by Identifier-1 is set to the predefined address NULL.

5. The allocated storage persists until explicitly released with a [FREE](./FREE) statement or the run unit is terminated, whichever occurs first.

### Examples

Allocate a Linkage Section data item initializing its content.

```cobol
       WORKING-STORAGE SECTION.
       ...
       77  PTR POINTER.
       ...
       LINKAGE SECTION.
       ...
       01  LK2 PIC X(12).
       ...
       PROCEDURE DIVISION.
       ...
           ALLOCATE LK2 INITIALIZED RETURNING PTR.
       ...
```
