## COBTRIGGER Directive

This directive allows for the definition of a COBOL program as a trigger of I/O events such as READ, WRITE, REWRITE, or DELETE. This defined COBOL program is automatically called before and after every I/O event. It must appear above the file definition in the FILE-CONTROL paragraph.

```cobol
>>EFD COBTRIGGER=ProgramName
```

or

```cobol
$EFD COBTRIGGER=ProgramName
```

or

```cobol
*(( EFD COBTRIGGER=ProgramName ))
```

or

```cobol
*>(( EFD COBTRIGGER=ProgramName ))
```

### Example

The program MYTRIGGER will be called for each operation on MYTABLE:

```cobol
>>EFD COBTRIGGER=MYTRIGGER
 SELECT MYTABLE ASSIGN TO "MYTABLE"
        ORGANIZATION INDEXED
        ACCESS DYNAMIC
        RECORD KEY MY-KEY.
```

This directive is supported for compatibility with third party interfaces. isCOBOL DatabaseBridge and c-tree SQL do not currently support it.
