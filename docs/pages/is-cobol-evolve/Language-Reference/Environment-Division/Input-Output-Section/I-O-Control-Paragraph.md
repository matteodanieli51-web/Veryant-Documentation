### I-O-CONTROL Paragraph

The FILE-CONTROL paragraph allows specification of input-output rules for the files described in the program.

#### General format

```cobol
I-O-CONTROL.
 
  [ APPLY { LOCK-HOLDING } ON {File-1} ... ] ...  
          { WRITE-ONLY   }
 
  [ SAME {RECORD } AREA FOR {File-2} ... ] ... .
         {RECORDS}
```

#### Syntax rules

1. *File-1* and *File-2* must be specified in the FILE-CONTROL Paragraph.

#### General Rules

1. When the APPLY LOCK-HOLDING phrase is specified, multiple record locking rules are applied to *File-1*.
2. The APPLY WRITE-ONLY and SAME clauses are treated as a commentary.
