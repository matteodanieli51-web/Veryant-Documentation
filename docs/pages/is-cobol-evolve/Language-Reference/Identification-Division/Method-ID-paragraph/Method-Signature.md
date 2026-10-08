### Method-Signature

Method parameters and return can be specified directly in the METHOD-ID paragraph.

The list of parameters must be enclosed between parenthesis and the return must be specified using the RETURNING clause. This is the syntax prototype:

```cobol
(identifier-1 as type, identifier-2 as type, ..., identifier-n as type) RETURNING result
```

#### Syntax Rules

1. identifier-1, identifier-2, identifier-n and result are [User-defined word](../../Preface/Definitions#user-defined-word).
2. type can be:
- any Java primitive type to be specified between quotes,
- any Java classe to be specified between quotes or through a logical name mapped in the REPOSITORY paragraph,
- an elementary typedef.

Example:

Define a method that receives three alphanumeric parameters and returns a number using typedefs:

```cobol
       ...
       data division.
       working-storage section.
       77 pics9   is typedef pic s9(9).
       77 xanylen is typedef pic x any length.
             
       procedure division.
       
       identification division.
       method-id. met1 as "met1" (p1 as xanylen,  
                                  p2 as xanylen, 
                                  p3 as xanylen)
                        returning rc as pics9.
       procedure division.
       main.
           display "Received:".
           display p1.
           display p2.
           display p3.
           display "Returning 1".
           move 1 to rc.
       end method.
```
