### getResponse

Return the HTTP Response object instance.

#### General format

```cobol
Object getResponse( )
```

#### General rules

1. The returned object should be cast to *javax.servlet.http.HttpServletResponse*.

#### Example

Retrieve the Response object instance:

```cobol
       CONFIGURATION SECTION.
       REPOSITORY.
           CLASS WEB-HANDLER  AS "com.iscobol.rts.HTTPHandler"
           CLASS HTTP-RESPONSE AS "javax.servlet.http.HttpServletResponse"
       ...    
       WORKING-STORAGE SECTION.
       77 SERVLET-RESPONSE OBJECT REFERENCE HTTP-RESPONSE.
       ...
       LINKAGE SECTION.
       77 LNK-AREA OBJECT REFERENCE WEB-HANDLER.
       ...
       PROCEDURE DIVISION USING LNK-AREA.
       ...
           SET SERVLET-RESPONSE TO LNK-AREA:>getResponse()
                               AS HTTP-RESPONSE.
       ...   
```
