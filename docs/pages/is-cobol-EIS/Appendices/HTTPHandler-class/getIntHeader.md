### getIntHeader

Reads the value of a specific item in the HTTP header assuming that it’s an integer number.

#### General format

```cobol
int getIntHeader( name )
```

#### Syntax rules

1. *name* is an alphanumeric data item or literal.

#### General rules

1. The header name should be specified in lower case otherwise it’s not found. For example, in order to get the value of "Content-Length", look for "content-length".

#### Example

Check if the Content-Length header value is greater than 100:

```cobol
       CONFIGURATION SECTION.
       REPOSITORY.
           CLASS WEB-AREA AS "com.iscobol.rts.HTTPHandler"
           .
       LINKAGE SECTION.
       01 LNK-AREA OBJECT REFERENCE WEB-AREA.
 
       PROCEDURE DIVISION USING LNK-AREA.
       MAIN.
           if LNK-AREA:>getIntHeader("content-length") > 100
              ...
```
