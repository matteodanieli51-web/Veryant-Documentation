### getMethod

Returns the HTTP request method used for client and server calls.

#### General format

```cobol
String getMethod( )
```

#### General rules

1. The returned value is one of the following strings: CONNECT, DELETE, GET, HEAD, OPTIONS, POST, PUT.

#### Example

Check if the current method is POST:

```cobol
       CONFIGURATION SECTION.
       REPOSITORY.
           CLASS WEB-AREA AS "com.iscobol.rts.HTTPHandler"
           .
       LINKAGE SECTION.
       01 LNK-AREA OBJECT REFERENCE WEB-AREA.
 
       PROCEDURE DIVISION USING LNK-AREA.
       MAIN.
           if LNK-AREA:>getMethod() = "POST"
              ...
```
