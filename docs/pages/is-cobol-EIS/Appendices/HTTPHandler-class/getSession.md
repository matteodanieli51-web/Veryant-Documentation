### getSession

Return the HTTP Session object instance.

#### General format

```cobol
Object getSession( )
```

#### General rules

1. The returned object should be cast to *javax.servlet.http.HttpSession*.

#### Example

Retrieve the unique ID of the current HTTP session:

```cobol
       CONFIGURATION SECTION.
       REPOSITORY.
           CLASS WEB-AREA     AS "com.iscobol.rts.HTTPHandler"
           CLASS HTTP-SESSION AS "javax.servlet.http.HttpSession"
       ...
       WORKING-STORAGE SECTION.
       77 SERVLET-SESSION OBJECT REFERENCE HTTP-SESSION.
       77 UNIQUE-ID PIC X ANY LENGTH.
       ...
       LINKAGE SECTION.
       77 LNK-AREA OBJECT REFERENCE WEB-AREA.
       ...
       PROCEDURE DIVISION USING LNK-AREA.
           SET SERVLET-SESSION TO LNK-AREA:>getSession()
                               AS HTTP-SESSION.
           SET UNIQUE-ID TO SERVLET-SESSION:>getId(). 
       ...   
```
