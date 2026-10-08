### getRequest

Return the HTTP Request object instance.

#### General format

```cobol
Object getRequest( )
```

#### General rules

1. The returned object should be cast to *javax.servlet.http.HttpServletRequest*.

#### Example

Retrieve the IP address of the client machine that made the request:

```cobol
       CONFIGURATION SECTION.
       REPOSITORY.
           CLASS WEB-HANDLER  AS "com.iscobol.rts.HTTPHandler"
           CLASS HTTP-REQUEST AS "javax.servlet.http.HttpServletRequest"
           .
       ...    
       WORKING-STORAGE SECTION.
       77 SERVLET-REQUEST OBJECT REFERENCE HTTP-REQUEST.
       77 CLIENT-IP       PIC X ANY LENGTH.
       ...
       LINKAGE SECTION.
       77 LNK-AREA OBJECT REFERENCE WEB-HANDLER.
       ...
       PROCEDURE DIVISION USING LNK-AREA.
       ...
           SET SERVLET-REQUEST TO LNK-AREA:>getRequest()
                               AS HTTP-REQUEST.
           SET CLIENT-IP TO SERVLET-REQUEST:>getRemoteAddr().
       ...   
```
