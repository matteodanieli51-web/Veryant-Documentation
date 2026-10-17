### displayXML

Returns a XML stream to the HTTP client.

#### General format

```cobol
void displayXML( xml )
```

#### Syntax rules

1. *xml* is a level 01 data item for which the [IS IDENTIFIED clause](../../../is-cobol-evolve/Language-Reference/Data-Division/Data-Description/IS-IDENTIFIED-clause) has been used.

#### General rules

1. The MIME type “text/xml” is automatically applied.
2. The stream is returned when the program terminates (e.g. upon EXIT PROGRAM or GOBACK statements).

#### Example

Return a XML response:

```cobol
       CONFIGURATION SECTION.
       REPOSITORY.
           CLASS WEB-AREA AS "com.iscobol.rts.HTTPHandler"
           .
 
       ...
       WORKING-STORAGE SECTION.
       01 response identified by "response".
          03 identified by "result".
             05 result pic xx.
             
       LINKAGE SECTION.
       01 LNK-AREA OBJECT REFERENCE WEB-AREA.
 
       PROCEDURE DIVISION USING LNK-AREA.
       MAIN.
           move "OK" to result.
           LNK-AREA:>displayXML(response).
```
