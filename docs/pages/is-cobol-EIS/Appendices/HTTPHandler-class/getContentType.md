### getContentType

Return the HTTP Content Type of the request

#### General format

```cobol
String getContentType( )
```

#### Example

Check if the Content-Type header is "text/xml":

```cobol
       CONFIGURATION SECTION.
       REPOSITORY.
           CLASS WEB-AREA AS "com.iscobol.rts.HTTPHandler"
           .
       LINKAGE SECTION.
       01 LNK-AREA OBJECT REFERENCE WEB-AREA.
 
       PROCEDURE DIVISION USING LNK-AREA.
       MAIN.
           if LNK-AREA:>getContentType() = "text/xml"
              ...
```
