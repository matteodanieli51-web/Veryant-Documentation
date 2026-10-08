### getHeader

Reads the value of a specific item in the HTTP header.

#### General format

```cobol
String getHeader( name )
```

#### Syntax rules

1. *name* is an alphanumeric data item or literal.

#### General rules

1. The header name should be specified in lower case otherwise it’s not found. For example, in order to get the value of "Content-Type", look for "content-type".

#### Example

Check if the Content-Language header is "en":

```cobol
       CONFIGURATION SECTION.
       REPOSITORY.
           CLASS WEB-AREA AS "com.iscobol.rts.HTTPHandler"
           .
       LINKAGE SECTION.
       01 LNK-AREA OBJECT REFERENCE WEB-AREA.
 
       PROCEDURE DIVISION USING LNK-AREA.
       MAIN.
           if LNK-AREA:>getHeader("content-language") = "en"
              ...
```
