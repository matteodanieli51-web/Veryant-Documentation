### displayEx

Returns a stream to the HTTP client by invoking [displayJSON](./displayJSON) or [displayXML](./displayXML) depending on the Content-type field. If no Content-type is available in the response header, then it invokes [displayJSON](./displayJSON) or [displayXML](./displayXML) depending on the [iscobol.rest.default_stream](../../..//is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#rest_default_stream) configuration setting.

#### Format 1

```cobol
void displayEx( stream )
```

#### Format 2

```cobol
void displayEx( stream, hasDummyRoot )
```

#### Format 3

```cobol
void displayEx( stream, hasDummyRoot, encoding )
```

#### Syntax rules

1. *stream* is a level 01 data item for which the [IS IDENTIFIED clause](../../../is-cobol-evolve/Language-Reference/Data-Division/Data-Description/IS-IDENTIFIED-clause) has been used.
2. *hasDummyRoot* is an alphanumeric data item or literal hosting a boolean value (e.g. "0", "1", "true", "false", "yes", "no", "on" or "off"). If the boolean value is TRUE, then the top level item of Record-Definition is discarded and will not appear in the JSON stream . This parameter can be NULL, in such case, FALSE is assumed.
3. *encoding* is a string literal or data item that specifies the character set to be used in the JSON stream. All the canonical names listed in the following Java documentation can be used as value for this property: [http://java.sun.com/javase/6/docs/technotes/guides/intl/encoding.doc.html.](http://java.sun.com/javase/6/docs/technotes/guides/intl/encoding.doc.html)

#### General rules

1. The MIME type is automatically applied.
2. *hasDummyRoot* is considered only for the JSON type.
3. The stream is returned when the program terminates (e.g. upon EXIT PROGRAM or GOBACK statements).

#### Example

Return a JSON response by setting the Content-Type header before producing the response:

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
           LNK-AREA:>addOutHeader("Content-Type", "application/json").
           LNK-AREA:>displayEx(response).
```
