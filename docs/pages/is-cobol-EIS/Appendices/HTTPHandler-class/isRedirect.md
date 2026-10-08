### isRedirect

Tells if a redirect has been issued or not.

#### General format

```cobol
boolean isRedirect()
```

#### Example

Check if a redired has been issued:

```cobol
       CONFIGURATION SECTION.
       REPOSITORY.
           CLASS WEB-AREA     AS "com.iscobol.rts.HTTPHandler"
       ...
       LINKAGE SECTION.
       77 LNK-AREA OBJECT REFERENCE WEB-AREA.
       ...
       PROCEDURE DIVISION USING LNK-AREA.
       ...
           IF LNK-AREA:>isRedirect()
      *       a redirect has been issued
           ELSE
      *       a redirect has not been issued
           END-IF.
...
```
