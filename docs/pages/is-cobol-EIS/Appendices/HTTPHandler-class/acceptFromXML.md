### acceptFromXML

Receives parameters from the HTTP assuming that they’re passed as an XML stream.

#### General format

```cobol
void acceptFromXML( params )
```

#### Syntax rules

1. *params* is a level 01 data item for which the [IS IDENTIFIED clause](../../../is-cobol-evolve/Language-Reference/Data-Division/Data-Description/IS-IDENTIFIED-clause) has been used.

#### General rules

1. *params* elements name matches the name of the parameter passed by the HTTP client.

#### Example

Consider the following HTTP request:

```cobol
Content-Type : text/xml
Content:
<?xml version="1.0" encoding="UTF-8"?><request><user>admin</user><md5pwd>2eec6fa53d1cce9321efac977e60d705</md5pwd></request>
```

It can be intercepted with the following code:

```cobol
       CONFIGURATION SECTION.
       REPOSITORY.
           CLASS WEB-AREA AS "com.iscobol.rts.HTTPHandler"
           .
 
       ...
       WORKING-STORAGE SECTION.
       01 request identified by "request".
          03 identified by "user".
             05 user pic x any length.
          03 identified by "md5pwd".
             05 pwd pic x any length.
       ...
       LINKAGE SECTION.
       01 LNK-AREA OBJECT REFERENCE WEB-AREA.
 
       PROCEDURE DIVISION USING LNK-AREA.
       MAIN.
           LNK-AREA:>acceptFromXML(request).
```
