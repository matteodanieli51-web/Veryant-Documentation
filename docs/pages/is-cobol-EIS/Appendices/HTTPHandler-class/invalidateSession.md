### invalidateSession

Invalidates the current HTTP session and removes all session data. This is the correct way to terminate the whole application. This method should be associated with the “Exit” function of your application.

#### General format

```cobol
void invalidateSession()
```

#### Example

Invalidate the current session:

```cobol
       CONFIGURATION SECTION.
       REPOSITORY.
           CLASS WEB-AREA     AS "com.iscobol.rts.HTTPHandler"
       ...
       LINKAGE SECTION.
       77 LNK-AREA OBJECT REFERENCE WEB-AREA.
       ...
       PROCEDURE DIVISION USING LNK-AREA.
           LNK-AREA:>invalidateSession().
       ... 
```
