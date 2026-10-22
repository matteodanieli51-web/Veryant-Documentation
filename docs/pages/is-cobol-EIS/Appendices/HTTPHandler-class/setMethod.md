### setMethod

Sets the HTTP request method used for client and server calls.

#### General format

```cobol
void setMethod( method )
```

#### Syntax rules

1. *method* is an alphanumeric data item or literal.

#### General rules

1. *method* must be one of the following strings: CONNECT, DELETE, GET, HEAD, OPTIONS, POST, PUT.

#### Example

Set the request method to POST:

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
           LNK-AREA:>setMethod("POST").
       ...
```
