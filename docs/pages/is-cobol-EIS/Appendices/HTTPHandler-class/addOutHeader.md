### addOutHeader

Adds an item to the response HTTP header.

#### General format

```cobol
void addOutHeader( name, value )
```

#### Syntax rules

1. *name* and *value* are alphanumeric data items or literals.

Example

Add the Content-Language header to the response:

```cobol
       CONFIGURATION SECTION.
       REPOSITORY.
           CLASS WEB-AREA AS "com.iscobol.rts.HTTPHandler"
           .
 
       ...
       WORKING-STORAGE SECTION.
       01 header-name  pic x any length.
       77 header-value pic x any length.
       ...
       LINKAGE SECTION.
       01 LNK-AREA OBJECT REFERENCE WEB-AREA.
 
       PROCEDURE DIVISION USING LNK-AREA.
       MAIN.
           move "Content-Language" to header-name.
           move "en"               to header-value.
           LNK-AREA:>addOutHeader(header-name, header-value).
       ...
```
