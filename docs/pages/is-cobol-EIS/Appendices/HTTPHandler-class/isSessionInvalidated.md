### isSessionInvalidated

Tells if the current session has been invalidated or not.

#### General format

```cobol
boolean isSessionInvalidated()
```

#### Example

Check if the current session has been invalidated

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
           IF LNK-AREA:>isSessionInvalidated()
      *       the session has been invalidated
           ELSE
      *       the session has not been invalidated
           END-IF.
       ...
```
